import { Injectable } from '@nestjs/common';
import { CreateAnimalDeathDto } from './dto/create-animal-death.dto';
import { UpdateAnimalDeathDto } from './dto/update-animal-death.dto';
import { InjectModel } from '@nestjs/mongoose';
import { AnimalDeath } from './entities/animal-death.entity';
import { Model } from 'mongoose';

@Injectable()
export class AnimalDeathsService {
  constructor(@InjectModel(AnimalDeath.name) private readonly animalDeathModel: Model<AnimalDeath>){}

  async create(createAnimalDeathDto: CreateAnimalDeathDto) {
    try {
      const newAnimalDeath = await new this.animalDeathModel(createAnimalDeathDto)
      .save()
      return newAnimalDeath
    } catch (error) {
      console.log(error)
    }    
  }

  async findAll() {
    try {
      return await this.animalDeathModel.find().exec()
    } catch (error) {
      console.log(error)
    }    
  }

  async findOne(id: string) {
    try {
      return await this.animalDeathModel.findById(id)
    } catch (error) {
      console.log(error)
    }    
  }

  async findEventId(event_id: string){
    try {
      const conditions = {event_id: event_id}
      const eventId = await this.animalDeathModel.findOne(conditions).exec()
      return eventId
    } catch (error) {
      console.log(error)
    }
  }

  async update(id: string, updateAnimalDeathDto: UpdateAnimalDeathDto) {
    try {
      return await this.animalDeathModel
      .findByIdAndUpdate({_id:id}, updateAnimalDeathDto)
      .exec()
    } catch (error) {
      console.log(error)
    }    
  }

  async remove(id: string) {
    try {
      return await this.animalDeathModel.findByIdAndDelete(id)
    } catch (error) {
      console.log(error)
    }
  }
}
