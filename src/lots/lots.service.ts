import { Injectable } from '@nestjs/common';
import { CreateLotDto } from './dto/create-lot.dto';
import { UpdateLotDto } from './dto/update-lot.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Lot } from './entities/lot.entity';
import { Model } from 'mongoose';

@Injectable()
export class LotsService {
  constructor(@InjectModel(Lot.name) private LotsModel: Model<Lot>) { }

  async create(createLotDto: CreateLotDto) {
    try {
      const newLot = await new this.LotsModel(createLotDto)
        .save()
      return newLot

    } catch (error: any) {
      return {
        message: 'Invalid data insertion',
        error
      }
    }
  }

  async getAll() {
    try {
      const findAllLots = await this.LotsModel
        .find()
        .exec();
      if (!findAllLots) {
        return {
          message: "Serch not found results"
        }
      } else {
        return findAllLots
      }
    } catch (error: any) {
      return error
    }
  }

  async findOne(id: string) {
    try {
      const findOneLot = await this.LotsModel
        .findById(id)
        .exec();
      if (!findOneLot) {
        return {
          message: 'No lot register matches this id '
        }
      } else {
        return findOneLot
      }
    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      }
    }
  }

  async update(id: string, updateLotDto: UpdateLotDto) {
    try {
      const updateLot = await this.LotsModel
        .findByIdAndUpdate({ _id: id }, updateLotDto, { returnDocument: 'after' })
        .exec()
      if (!updateLot) {
        return {
          message: 'No lot register matches this id'
        }
      } else {
        return updateLot
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
      const removeLot = await this.LotsModel
        .findByIdAndDelete(id)
        .exec()
      if (!removeLot) {
        return {
          message: 'No lot register matches this id'
        }
      } else {
        return 'Lot register removed'
      }
    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      }
    }
  }
}
