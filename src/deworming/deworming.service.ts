import { Injectable } from '@nestjs/common';
import { CreateDewormingDto } from './dto/create-deworming.dto';
import { UpdateDewormingDto } from './dto/update-deworming.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Deworming } from './entities/deworming.entity';
import { Model } from 'mongoose';

@Injectable()
export class DewormingService {
  constructor(@InjectModel(Deworming.name) private readonly dewormingService: Model<Deworming>){}

  async create(createDewormingDto: CreateDewormingDto) {
    try {
      const newDeworming = new this.dewormingService(createDewormingDto)
      .save()
      return await newDeworming
    } catch (error) {
      console.log(error)
    }    
  }

  async findAll() {
    try {
      return await this.dewormingService
      .find()
      .exec()
    } catch (error) {
      console.log(error)
    }  
  }

  async findOne(id: string) {
    try{
      return await this.dewormingService
      .findById(id)
      .exec()
    } catch (error){
      console.log(error)
    }    
  }

  async update(id: string, updateDewormingDto: UpdateDewormingDto) {
    try {

      const updateDeworming = await this.dewormingService
      .findByIdAndUpdate({_id: id}, updateDewormingDto)
      .exec()
      return updateDeworming
      
    } catch (error) {
      console.log(error)
    }    
  }

  async remove(id: string) {
    try {
      return await this.dewormingService
      .findByIdAndDelete(id)
      .exec()
    } catch (error) {
      console.log(error)
    }    
  }
}
