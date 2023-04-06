import { Injectable } from '@nestjs/common';
import { CreateVaccinationDto } from './dto/create-vaccination.dto';
import { UpdateVaccinationDto } from './dto/update-vaccination.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Vaccination, VaccinationSchema } from './entities/vaccination.entity';
import { Model } from 'mongoose';

@Injectable()
export class VaccinationService {
  constructor(@InjectModel(Vaccination.name) private readonly vaccinationModel: Model<Vaccination>){}
    
  async create(createVaccinationDto: CreateVaccinationDto) {
    try {
      const newVaccination = await new this.vaccinationModel(createVaccinationDto)
      .save()
      return newVaccination

    } catch (error) {
      console.log(error)
    }
  }

  async findAll() {
    try {
      return await this.vaccinationModel
      .find()
      .exec()
    } catch (error) {
      console.log(error)
    }   
  }

  async findOne(id: string) {
    try {
      return await this.vaccinationModel
      .findById(id)
      .exec()
    } catch (error) {
      console.log(error)
    }    
  }

  async update(id: string, updateVaccinationDto: UpdateVaccinationDto) {
    try {
      const updateVaccine = await this.vaccinationModel
      .findByIdAndUpdate({_id:id}, updateVaccinationDto)
      .exec()
      return updateVaccine
    } catch (error) {
      console.log(error)
    }   
  }

  async remove(id: string) {
    try {
      return await this.vaccinationModel
      .findByIdAndRemove(id)
      .exec()
    } catch (error) {
      console.log(error)
    }    
  }
}
