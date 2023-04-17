import { Injectable } from '@nestjs/common';
import { CreateAnimalDeathDto } from './dto/create-animal-death.dto';
import { UpdateAnimalDeathDto } from './dto/update-animal-death.dto';
import { InjectModel } from '@nestjs/mongoose';
import { AnimalDeath } from './entities/animal-death.entity';
import { Model } from 'mongoose';
import { error } from 'console';

@Injectable()
export class AnimalDeathsService {
  constructor(@InjectModel(AnimalDeath.name) private readonly animalDeathModel: Model<AnimalDeath>) { }

  async create(createAnimalDeathDto: CreateAnimalDeathDto) {
    try {

      const newAnimalDeath = await new this.animalDeathModel(createAnimalDeathDto)
        .save();
      return newAnimalDeath;

    } catch (error: any) {
      return {
        message: 'Invalid data insertion',
        error
      }
    }
  }

  async findAll() {
    try {
      return await this.animalDeathModel.find().exec();
    } catch (error: any) {
      return {
        message: 'Search not found results',
        error
      }
    }
  }

  async findOne(id: string) {
    try {

      const findAnimalDeath = await this.animalDeathModel
        .findById(id)
        .exec();

      if (!findAnimalDeath) {
        return {
          message: 'No animal death register matches this id'
        };
      } else {
        return findAnimalDeath
      }

    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      }

    }
  }

  async findEventId(event_id: string) {
    try {
      const conditions = { event_id: event_id }
      const eventId = await this.animalDeathModel.findOne(conditions).exec()
      return eventId
    } catch (error: any) {
      console.log(error)
      return {
        message: 'event_id not found',
        error
      }
    }
  }

  async update(id: string, updateAnimalDeathDto: UpdateAnimalDeathDto) {
    try {
      const updateAnimalDeathRegister = await this.animalDeathModel
        .findByIdAndUpdate({ _id: id }, updateAnimalDeathDto)
        .exec();

      if (!updateAnimalDeathRegister) {
        return {
          message: 'No animal death register matches this id'
        }
      } else {
        return updateAnimalDeathRegister
      };

    } catch (error: any) {
      if (error.path === "_id") {
        return {
          message: 'Invalid Id',
          error
        };
      } else {
        return {
          message: 'Invalid updating data',
          error
        };
      }
    }
  }

  async remove(id: string) {
    try {
      const removeRegister = await this.animalDeathModel.findByIdAndDelete(id)
      if (!removeRegister) {
        return {
          message: 'No animal death register matches this id'
        }
      } else {
        return removeRegister
      }
    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      }
    }
  }
}
