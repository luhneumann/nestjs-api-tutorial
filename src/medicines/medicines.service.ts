import { Injectable } from '@nestjs/common';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Medicine } from './entities/medicine.entity';
import { Model } from 'mongoose';

@Injectable()
export class MedicinesService {
  constructor(@InjectModel(Medicine.name) private medicineModel: Model<Medicine>) { }

  async create(createMedicineDto: CreateMedicineDto) {
    try {
      const newMedicine = await new this.medicineModel(createMedicineDto)
        .save()
      return newMedicine
    } catch (error: any) {
      return {
        message: 'Invalid data insertion',
        error
      }
    }
  }

  async findAll() {
    try {
      return await this.medicineModel.find()
    } catch (error: any) {
      return {
        message: 'Search not found results',
        error
      }
    }
  }

  async findOne(id: string) {
    try {
      const findOneMedicine = await this.medicineModel
        .findById(id)
        .exec()
      if (!findOneMedicine) {
        return {
          message: 'No medicine register matches this id'
        }
      } else {
        return findOneMedicine
      }
    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      }
    }
  }

  async findManagementId(management_id: string) {
    try {
      const conditions = { management_id: management_id }
      const managementId = await this.medicineModel.findOne(conditions).exec()
      return managementId
    } catch (error: any) {
      return {
        message: 'Invalid management_Id',
        error
      }
    }
  }

  async update(id: string, updateMedicineDto: UpdateMedicineDto) {
    try {
      const updateMedicines = await this.medicineModel
        .findByIdAndUpdate({ _id: id }, updateMedicineDto, { returnDocument: 'after' })
        .exec()
      if (!updateMedicineDto) {
        return {
          message: 'No medicine register matches this id'
        }
      } else {
        return updateMedicines
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
      const removeMedicines = await this.medicineModel
        .findByIdAndRemove(id)
        .exec()
      if (!removeMedicines) {
        return {
          message: 'No medicine register matches this id'
        }
      } else {
        return 'Medicines register removed'
      }
    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      }
    }
  }
}
