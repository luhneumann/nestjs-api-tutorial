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
    } catch (error) {
      console.log(error)
    }    
  }

  async findAll() {
    try {
      return await this.weightControlModel
      .find()
      .exec()
    } catch (error) {
      console.log(error)
    }    
  }

  async findOne(id: string) {
    try {
      return await this.weightControlModel
      .findById(id)
      .exec()
    } catch (error) {
      console.log(error)
    }
  }

  async findManagementId(management_id: string){
    try {
      const conditions = {management_id: management_id}
      const managementId = await this.weightControlModel.findOne(conditions).exec()
      return managementId
    } catch (error) {
      console.log(error)
    }
  }

  async update(id: string, updateWeightControlDto: UpdateWeightControlDto) {
    try {
      const updateWeightControl = await this.weightControlModel
      .findByIdAndUpdate({_id:id}, updateWeightControlDto)
      .exec()
      return updateWeightControl
    } catch (error) {
      console.log(error)
    }
  }

  async remove(id: string) {
    try {
      return await this.weightControlModel
      .findByIdAndRemove(id)
      .exec()
    } catch (error) {
      console.log(error)
    }    
  }
}
