import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAbortionDto } from './dto/create-abortion.dto';
import { UpdateAbortionDto } from './dto/update-abortion.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Abortion } from './entities/abortion.entity';
import { Model } from 'mongoose';


@Injectable()
export class AbortionService {
  constructor(@InjectModel(Abortion.name) private readonly abortionModel: Model<Abortion>){};
  async create(createAbortionDto: CreateAbortionDto) {
    try {
      const newAbortion = await new this.abortionModel(createAbortionDto)
      .save();
      return newAbortion;

    } catch (error: any) {           
      return {'Validation Error': error }   
    }
  }

  async findAll() {
    try {
      return await this.abortionModel.find().exec();
    } catch (error: any)  {      
      return {'not found': error.message}
    }
  }

  async findOne(id: string) {
    try {
      return await this.abortionModel.findById(id).exec();
    } catch (error: any) {
      return {'Not found': error.message}       
    }
  }

  async update(id: string, updateAbortionDto: UpdateAbortionDto) {
    try {
      return await this.abortionModel.findByIdAndUpdate({_id: id}, updateAbortionDto);
    } catch (error: any) {
      return {'Validation Error': error.message }      
    }   
  }

  async remove(id: string) {
    try {
      return await this.abortionModel.findByIdAndDelete(id);
    } catch (error: any) {
      return error (error.message)      
    }
  }
}
