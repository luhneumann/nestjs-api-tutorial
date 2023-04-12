import { Injectable } from '@nestjs/common';
import { CreateParturitionDto } from './dto/create-parturition.dto';
import { UpdateParturitionDto } from './dto/update-parturition.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Parturition } from './entities/parturition.entity';
import { Model } from 'mongoose';

@Injectable()
export class ParturitionsService {
  constructor(@InjectModel(Parturition.name) private readonly parturitionModel: Model<Parturition>){}

  async create(createParturitionDto: CreateParturitionDto) {
    try {
      const newParturition = await new this.parturitionModel(createParturitionDto)
      .save()
      return newParturition
    } catch (error) {
      console.log(error)
    }    
  }

  async findAll() {
    try {
      return await this.parturitionModel.find().exec()
    } catch (error) {
      console.log(error)
    }    
  }

  async findOne(id: string) {
    try {
      return await this.parturitionModel.findById(id).exec()
    } catch (error) {
      console.log(error)
    }  
  }

  async update(id: string, updateParturitionDto: UpdateParturitionDto) {
    try {
      return await this.parturitionModel.findByIdAndUpdate({_id: id}, updateParturitionDto).exec()
    } catch (error) {
      console.log(error)
    }    
  }

  async remove(id: string) {
    try {
      return await this.parturitionModel.findByIdAndDelete(id).exec()
    } catch (error) {
      console.log(error)
    }    
  }
}
