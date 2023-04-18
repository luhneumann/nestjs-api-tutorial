import { Injectable } from '@nestjs/common';
import { CreateIncomingDto } from './dto/create-incoming.dto';
import { UpdateIncomingDto } from './dto/update-incoming.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Incoming } from './entities/incoming.entity';
import { Model } from 'mongoose';


@Injectable()
export class IncomingsService {
  constructor(@InjectModel(Incoming.name) private readonly incomingModel: Model<Incoming>) { }

  async create(createIncomingDto: CreateIncomingDto) {
    try {
      const newIncoming = await new this.incomingModel(createIncomingDto)
        .save()
      return newIncoming
    } catch (error: any) {
      return {
        message: 'Invalid data insertion',
        error
      }
    }
  }

  async findAll() {
    try {
      return await this.incomingModel.find().exec()
    } catch (error: any) {
      return {
        message: 'Search not found results',
        error
      }
    }
  }

  async findOne(id: string) {
    try {
      const findOneIncoming = await this.incomingModel
        .findById(id)
        .exec()
      if (!findOneIncoming) {
        return {
          message: 'No incoming register matches this id'
        }
      }
    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      }
    }
  }

  async update(id: string, updateIncomingDto: UpdateIncomingDto) {
    try {
      const updateIncoming = await this.incomingModel
        .findByIdAndUpdate({ _id: id }, updateIncomingDto, {returnDocument: 'after'})
        .exec()
      if (!updateIncoming) {
        return {
          message: 'No incoming matches this id'
        }
      } else {
        return updateIncoming
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
      const removeIncoming = await this.incomingModel
        .findByIdAndDelete(id)
        .exec()
      if (!removeIncoming) {
        return {
          message: 'No incoming register matches this id'
        }
      } else {
        return 'Incoming register removed'
      }
    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      }
    }
  }
}
