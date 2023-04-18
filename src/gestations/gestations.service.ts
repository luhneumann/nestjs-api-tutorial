import { Injectable } from '@nestjs/common';
import { CreateGestationDto } from './dto/create-gestation.dto';
import { UpdateGestationDto } from './dto/update-gestation.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Gestation } from './entities/gestation.entity';
import { Model } from 'mongoose';

@Injectable()
export class GestationsService {
  constructor(@InjectModel(Gestation.name) private readonly gestationModel: Model<Gestation>) { }

  async create(createGestationDto: CreateGestationDto) {
    try {
      const newGestation = await new this.gestationModel(createGestationDto)
        .save()
      return newGestation

    } catch (error: any) {
      return {
        message: 'Invalid data insertion',
        error
      }
    }
  }

  async findAll() {
    try {
      const findAllGestations = await this.gestationModel
        .find()
        .exec()
      if (!findAllGestations) {
        return {
          message: 'Search not found results'
        }
      } else {
        return findAllGestations
      }
    } catch (error: any) {
      return error
    }
  }

  async findOne(id: string) {
    try {
      const findOneGestation = await this.gestationModel
        .findById(id)
        .exec()
      if (!findOneGestation) {
        return {
          message: 'No gestation register matches this id'
        }
      } else {
        return findOneGestation
      }
    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      }
    }
  }

  async update(id: string, updateGestationDto: UpdateGestationDto) {
    try {
      const updateGestations = await this.gestationModel
        .findByIdAndUpdate({ _id: id }, updateGestationDto, { returnDocument: 'after' })
        .exec()
      if (!updateGestations) {
        return {
          message: 'No gestation register matches this id'
        }
      } else {
        return updateGestations
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
      const removeGestation = await this.gestationModel
        .findByIdAndRemove(id)
        .exec()
      if (!removeGestation) {
        return {
          message: 'No gestation register matches this id'
        }
      } else {
        return 'Gestation register removed'
      }
    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      }
    }
  }
}
