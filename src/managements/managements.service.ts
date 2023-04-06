import { Injectable } from '@nestjs/common';
import { CreateManagementDto } from './dto/create-management.dto';
import { UpdateManagementDto } from './dto/update-management.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Management } from './entities/management.entity';
import { Model } from 'mongoose';

@Injectable()
export class ManagementsService {
  constructor(@InjectModel(Management.name) private readonly managementModel: Model<Management>) { }

  async create(createManagementDto: CreateManagementDto) {
    try {
        const newManagement = await new this.managementModel(createManagementDto)        
        .save()

        return newManagement
    } catch(error){
      console.log(error)
    }    
  }

  async findAll() {
    try {
      return await this.managementModel
      .find()
      .exec()
    } catch (error) {
      console.log(error)
    }    
  }

  async findOne(id: string) {
    try {
      return await this.managementModel
      .findById(id)
      .exec()
    } catch (error) {
      console.log(error)
    }    
  }

  async update(id: string, updateManagementDto: UpdateManagementDto) {
    try{
      const updateManagement = await this.managementModel
      .findByIdAndUpdate({_id: id}, updateManagementDto)
      .exec()
      return updateManagement
    } catch (error){
      console.log(error)
    }    
  }

  async remove(id: string) {
    try {
      return await this.managementModel
      .findByIdAndRemove(id)
      .exec()
    } catch (error) {
      console.log(error)
    }    
  }
}
