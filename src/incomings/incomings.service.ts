import { Injectable } from '@nestjs/common';
import { CreateIncomingDto } from './dto/create-incoming.dto';
import { UpdateIncomingDto } from './dto/update-incoming.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Incoming } from './entities/incoming.entity';
import { Model } from 'mongoose';

@Injectable()
export class IncomingsService {
  constructor(@InjectModel(Incoming.name) private readonly incomingModel: Model<Incoming>){}

  async create(createIncomingDto: CreateIncomingDto) {
    try {
      const newIncoming = await new this.incomingModel(createIncomingDto)
      .save()
      return newIncoming
    } catch (error) {
      console.log(error)
    }    
  }

  async findAll() {
    try {
      return await this.incomingModel.find().exec()
    } catch (error) {
      console.log(error)
    }   
  }

  async findOne(id: string) {
    try {
      return await this.incomingModel.findById(id).exec()
    } catch (error) {
      console.log(error)
    }   
  }

  async update(id: string, updateIncomingDto: UpdateIncomingDto) {
    try {
      return await this.incomingModel
      .findByIdAndUpdate({_id: id}, updateIncomingDto)
      .exec()
    } catch (error) {
      console.log(error)
    }   
  }

  async remove(id: string) {
    try {
      return await this.incomingModel.findByIdAndDelete(id).exec()
    } catch (error) {
      console.log(error)
    }   
  }
}
