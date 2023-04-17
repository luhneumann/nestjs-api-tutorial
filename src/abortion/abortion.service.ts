import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAbortionDto } from './dto/create-abortion.dto';
import { UpdateAbortionDto } from './dto/update-abortion.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Abortion } from './entities/abortion.entity';
import { Model } from 'mongoose';


@Injectable()
export class AbortionService {
  constructor(@InjectModel(Abortion.name) private readonly abortionModel: Model<Abortion>) { };
  async create(createAbortionDto: CreateAbortionDto) {
    try {
      const newAbortion = await new this.abortionModel(createAbortionDto)
        .save();
      return newAbortion;

    } catch (error: any) {
      return {
        message: `Invalid data insertion`,
        error
      };
    };
  };

  async findAll() {
    try {
      return await this.abortionModel.find().exec();
    } catch (error: any) {
      return {
        message: 'Search not found results',
        error
      };
    };
  };

  async findOne(id: string) {
    try {
      const findOneRegister = await this.abortionModel
      .findById(id)
      .exec();
      if (!findOneRegister) {
        return {
          message: 'No abortion register matches this id'
        };
      } else {
        return findOneRegister;
      };
    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      };
    };
  };

  async update(id: string, updateAbortionDto: UpdateAbortionDto) {
    try {
      const updateAbortionRegister = await this.abortionModel
        .findByIdAndUpdate({ _id: id }, updateAbortionDto)
        .exec();

      if (!updateAbortionRegister) {
        return {
          message: 'No abortion register matches this id'
        };
      } else {
        return updateAbortionRegister
      };

    } catch (error: any) {
      if (error.path !== '_id') {
        return {
          message: "Invalid updating data",
          error
        };
      } else {
        return {
          message: 'Invalid id',
          error
        };
      };
    };
  };

  async remove(id: string) {
    try {
      const removeAbortionRegister = await this.abortionModel
      .findByIdAndDelete(id)
      .exec();      
      if (!removeAbortionRegister) {
        return {
          message: 'No abortion register matches this id'
        };
      } else {
        return {
          removeAbortionRegister
        };
      };
    } catch (error: any) {
      return {
        message: 'Invalid id',
        error
      };
    };
  };
};
