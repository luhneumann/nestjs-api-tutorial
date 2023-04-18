import { Injectable } from '@nestjs/common';
import { CreateWeightControlDto } from './dto/create-weight-control.dto';
import { UpdateWeightControlDto } from './dto/update-weight-control.dto';
import { InjectModel } from '@nestjs/mongoose';
import { WeightControl } from './entities/weight-control.entity';
import { Model } from 'mongoose';

@Injectable()
export class WeightControlService {
  constructor(@InjectModel(WeightControl.name) private readonly weightControlModel: Model<WeightControl>){}

  async create(createWeightControlDto: CreateWeightControlDto) {
    try {
      const newWeightControl = await new this.weightControlModel(createWeightControlDto)
      .save()
      return newWeightControl
    } catch (error: any) {
      return {
        message: 'Invalid data insertion',
        error
      }
    }    
  }

  async findAll() {
    try {
      return await this.weightControlModel
      .find()
      .exec()
    } catch (error) {
      return {
        message: 'Search not found results',
        error
      }
    }    
  }

  async findOne(id: string) {
    try {
      const findWeightControl = await this.weightControlModel
      .findById(id)
      .exec()
      if(!findWeightControl){
        return{
          message: 'No weight-control register matches this id'
        }
      } else {
        return findWeightControl
      }
    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      }
    }
  }

  async findManagementId(management_id: string){
    try {
      const conditions = {management_id: management_id}
      const managementId = await this.weightControlModel.findOne(conditions).exec()
      return managementId
    } catch (error: any) {
      return {
        message: 'Invalid management_Id',
        error
      }
    }
  }

  async update(id: string, updateWeightControlDto: UpdateWeightControlDto) {
    try {
      const updateWeightControl = await this.weightControlModel
      .findByIdAndUpdate({_id:id}, updateWeightControlDto, {returnDocument: 'after'})
      .exec()
      if(!updateWeightControl){
        return {
          message: 'No weight-control register matches this id'
        }
      } else {
        return updateWeightControl
      }      
    } catch (error: any) {
      if (error.path === "_id") {
        return {
          message: 'Invalid Id',
          error
        };
      } else {
        return {
          message: 'Invalid updating data',
          error
        };
      }
    }
  }

  async remove(id: string) {
    try {
      const removeWeightRegister = await this.weightControlModel
      .findByIdAndRemove(id)
      .exec()
      if(!removeWeightRegister){
        return {
          message: 'No weight-control register matches this id'
        }
      } else {
        return 'Weight register removed'
      }
    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      }
    }    
  }
}
