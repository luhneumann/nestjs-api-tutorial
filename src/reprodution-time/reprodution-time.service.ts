import { Injectable } from '@nestjs/common';
import { CreateReprodutionTimeDto } from './dto/create-reprodution-time.dto';
import { UpdateReprodutionTimeDto } from './dto/update-reprodution-time.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ReprodutionTime } from './entities/reprodution-time.entity';
import { Model } from 'mongoose';

@Injectable()
export class ReprodutionTimeService {
  constructor(@InjectModel(ReprodutionTime.name) private readonly reprodutionTimeModel: Model<ReprodutionTime>) { }

  async create(createReprodutionTimeDto: CreateReprodutionTimeDto) {
    try {
      const newReprodutionTime = await new this.reprodutionTimeModel(createReprodutionTimeDto)
        .save()
      return newReprodutionTime
    } catch (error: any) {
      return {
        message: 'Invalid data insertion',
        error
      }
    }
  }

  async findAll() {
    try {
      return await this.reprodutionTimeModel.find().exec()
    } catch (error: any) {
      return {
        message: 'Search not found results',
        error
      }
    }
  }

  async findOne(id: string) {
    try {
      const findReprodutionRegister = await this.reprodutionTimeModel.findById(id).exec()
      if (!findReprodutionRegister) {
        return {
          message: 'No reprodution-time register matches this id'
        }
      } else {
        return findReprodutionRegister
      }
    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      }
    }
  }

  async update(id: string, updateReprodutionTimeDto: UpdateReprodutionTimeDto) {
    try {
      const updateReprodution = await this.reprodutionTimeModel
        .findByIdAndUpdate({ _id: id }, updateReprodutionTimeDto, { returnDocument: 'after' })
        .exec()
      if (!updateReprodution) {
        return {
          message: 'No reprodution-time register matches this id'
        }
      } else {
        return updateReprodution
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
      const removeReprodutionRegister = await this.reprodutionTimeModel
        .findByIdAndDelete(id)
        .exec()
      if (!removeReprodutionRegister) {
        return {
          message: 'No reprodution-time register matches this id'
        }
      } else {
        return 'Reprodution register removed'
      }
    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      }
    }
  }
}
