import { Injectable } from '@nestjs/common';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Medicine } from './entities/medicine.entity';
import { Model } from 'mongoose';

@Injectable()
export class MedicinesService {
  constructor(@InjectModel(Medicine.name) private medicineModel: Model<Medicine>){}

  async create(createMedicineDto: CreateMedicineDto) {
    try {
      const newMedicine = await new this.medicineModel(createMedicineDto)
      .save()
      return newMedicine
    } catch (error) {
      console.log(error)
    }    
  }

  async findAll() {
    try{
      return await this.medicineModel.find()
    } catch(error){
      console.log(error)
    }    
  }

  async findOne(id: string) {
    try{
      return await this.medicineModel
      .findById(id)
      .exec()
    } catch(error){
      console.log(error)
    }     
  }

  async findManagementId(management_id: string){
    try {
      const conditions = {management_id: management_id}
      const managementId = await this.medicineModel.findOne(conditions).exec()
      return managementId
    } catch (error) {
      console.log(error)
    }
  }

  async update(id: string, updateMedicineDto: UpdateMedicineDto) {
    try{
      return await this.medicineModel
      .findByIdAndUpdate({_id:id}, updateMedicineDto)
      .exec()
    } catch(error){
      console.log(error)
    }   
  }

  async remove(id: string) {
    try{
      return await this.medicineModel.findByIdAndRemove(id)
    }catch(error){
      console.log(error)
    }
    
  }
}
