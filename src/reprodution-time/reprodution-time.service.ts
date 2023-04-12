import { Injectable } from '@nestjs/common';
import { CreateReprodutionTimeDto } from './dto/create-reprodution-time.dto';
import { UpdateReprodutionTimeDto } from './dto/update-reprodution-time.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ReprodutionTime } from './entities/reprodution-time.entity';
import { Model } from 'mongoose';

@Injectable()
export class ReprodutionTimeService {
  constructor(@InjectModel(ReprodutionTime.name) private readonly reprodutionTimeModel: Model<ReprodutionTime>){}

  async create(createReprodutionTimeDto: CreateReprodutionTimeDto) {
    try {
      const newReprodutionTime = await new this.reprodutionTimeModel(createReprodutionTimeDto)
      .save()
      return newReprodutionTime      
    } catch (error) {
      console.log(error)
    }    
  }

  async findAll() {
    try {
      return await this.reprodutionTimeModel.find().exec()
    } catch (error) {
      console.log(error)
    }    
  }

  async findOne(id: string) {
    try {
      return await this.reprodutionTimeModel.findById(id).exec()
    } catch (error) {
      console.log(error)
    }   
  }

  async update(id: string, updateReprodutionTimeDto: UpdateReprodutionTimeDto) {
    try {
      return await this.reprodutionTimeModel
      .findByIdAndUpdate({_id: id}, updateReprodutionTimeDto)
      .exec()
    } catch (error) {
      console.log(error)
    }    
  }

  async remove(id: string) {
    try {
      return await this.reprodutionTimeModel.findByIdAndDelete(id).exec()
    } catch (error) {
      console.log(error)
    }    
  }
}
