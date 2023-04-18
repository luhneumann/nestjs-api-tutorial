import { Injectable } from '@nestjs/common';
import { CreateDiseaseDto } from './dto/create-disease.dto';
import { UpdateDiseaseDto } from './dto/update-disease.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Disease } from './entities/disease.entity';
import { Model } from 'mongoose';

@Injectable()
export class DiseasesService {
  constructor(@InjectModel(Disease.name) private readonly diseaseModel: Model<Disease>) { }

  async create(createDiseaseDto: CreateDiseaseDto) {
    try {
      const newDisease = await new this.diseaseModel(createDiseaseDto)
        .save()
      return newDisease
    } catch (error: any) {
      return {
        message: 'Invalid data insertion',
        error
      }
    }
  }

  async findAll() {
    try {
      return await this.diseaseModel.find().exec()
    } catch (error: any) {
      return {
        message: 'Search not found results',
        error
      }
    }
  }

  async findOne(id: string) {
    try {
      const findOneDisease = await this.diseaseModel
        .findById(id)
        .exec()
      if (!findOneDisease) {
        return {
          message: 'No disease register matches this id'
        }
      } else {
        return findOneDisease
      }
    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      }
    }
  }

  async findEventId(event_id: string) {
    try {
      const conditions = { event_id: event_id }
      const eventId = await this.diseaseModel.findOne(conditions).exec()
      return eventId
    } catch (error: any) {
      return {
        message: 'No event_id register matches this id '
      }
    }
  }

  async update(id: string, updateDiseaseDto: UpdateDiseaseDto) {
    try {
      const updateCity = await this.diseaseModel
        .findByIdAndUpdate({ _id: id }, updateDiseaseDto, { returnDocument: 'after' })
        .exec()
      if (!updateCity) {
        return {
          message: 'No disease register matches this id '
        }
      } else {
        return updateCity
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
      const removeDisease = await this.diseaseModel
        .findByIdAndRemove(id)
        .exec()
      if (!removeDisease) {
        return {
          message: 'No disease register matches this id'
        }
      } else {
        return 'Disease register removed'       
      }
    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      }
    }
  }
}
