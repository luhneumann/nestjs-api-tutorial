import { Injectable } from '@nestjs/common';
import { CreateGestationDto } from './dto/create-gestation.dto';
import { UpdateGestationDto } from './dto/update-gestation.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Gestation } from './entities/gestation.entity';
import { Model } from 'mongoose';

@Injectable()
export class GestationsService {
  constructor(@InjectModel(Gestation.name) private readonly gestationModel: Model<Gestation>){}

  async create(createGestationDto: CreateGestationDto) {
    try {
      const newGestation = await new this.gestationModel(createGestationDto)
      .save()
      return newGestation
    } catch (error) {
      console.log(error)
    }    
  }

  async findAll() {
    try {
       return await this.gestationModel.find().exec()      
    } catch (error) {
      console.log(error)
    }    
  }

  async findOne(id: string) { 
    try {
      return await this.gestationModel.findById(id).exec()      
    } catch (error) {
      console.log(error)
    }    
  }

  async update(id: string, updateGestationDto: UpdateGestationDto) {
    try {
      return await this.gestationModel.findByIdAndUpdate({_id: id}, updateGestationDto).exec()      
   } catch (error) {
     console.log(error)
   }    
  }

  async remove(id: string) {
    try {
      return await this.gestationModel.findByIdAndRemove(id).exec()      
   } catch (error) {
     console.log(error)
   }    
  }
}
