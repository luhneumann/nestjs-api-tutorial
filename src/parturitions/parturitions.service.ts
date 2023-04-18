import { Injectable } from '@nestjs/common';
import { CreateParturitionDto } from './dto/create-parturition.dto';
import { UpdateParturitionDto } from './dto/update-parturition.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Parturition } from './entities/parturition.entity';
import { Model } from 'mongoose';

@Injectable()
export class ParturitionsService {
  constructor(@InjectModel(Parturition.name) private readonly parturitionModel: Model<Parturition>) { }

  async create(createParturitionDto: CreateParturitionDto) {
    try {
      const newParturition = await new this.parturitionModel(createParturitionDto)
        .save()
      return newParturition
    } catch (error: any) {
      return {
        message: 'Invalid data insertion',
        error
      }
    }
  }

  async findAll() {
    try {
      return await this.parturitionModel.find().exec()
    } catch (error: any) {
      return {
        message: 'Search not found results',
        error
      }
    }
  }

  async findOne(id: string) {
    try {
      const findOneParturition = await this.parturitionModel.findById(id).exec()
      if (!findOneParturition) {
        return {
          message: 'No parturition register matches this id'
        }
      } else {
        return findOneParturition
      }
    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      }
    }
  }

  async update(id: string, updateParturitionDto: UpdateParturitionDto) {
    try {
      const updateParturition = await this.parturitionModel
      .findByIdAndUpdate({ _id: id }, updateParturitionDto, {returnDocument: 'after'})
      .exec()
      if(!updateParturition){
        return {
          message: 'No parturition register matches this id'
        }
      } else {
        return updateParturition        
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
      const removeParturition = await this.parturitionModel
      .findByIdAndDelete(id)
      .exec()
      if(!removeParturition){
        return {
          message: 'No parturition register matches this id'
        }
      } else {
        return 'Parturition register removed'
      }
    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      }
    }
  }
}
