import { Injectable } from '@nestjs/common';
import { CreateDiseaseDto } from './dto/create-disease.dto';
import { UpdateDiseaseDto } from './dto/update-disease.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Disease } from './entities/disease.entity';
import { Model } from 'mongoose';

@Injectable()
export class DiseasesService {
  constructor(@InjectModel(Disease.name) private readonly diseaseModel: Model<Disease>){}

  async create(createDiseaseDto: CreateDiseaseDto) {
    try {
      const newDisease = await new this.diseaseModel(createDiseaseDto)
      .save()
      return newDisease
    } catch (error) {
      console.log(error)
    }    
  }

  async findAll() {
    try {
      return await this.diseaseModel.find().exec()
    } catch (error) {
      console.log(error)
    }    
  }

  async findOne(id: string) {
    try {
      return await this.diseaseModel
      .findById(id)
      .exec()
    } catch (error) {
      console.log(error)
    }
  }

  async update(id: string, updateDiseaseDto: UpdateDiseaseDto) {
    try {
      return await this.diseaseModel
      .findByIdAndUpdate({_id:id}, updateDiseaseDto)
      .exec()
    } catch (error) {
      console.log(error)
    }
  }

  async remove(id: string) {
    try {
      return await this.diseaseModel
      .findByIdAndRemove(id)
      .exec() 
    } catch (error) {
      console.log(error)
    }
  }
}
