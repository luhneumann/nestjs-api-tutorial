import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Animal } from './entities/animal.entity';
import { Model } from 'mongoose';


@Injectable()
export class AnimalsService {
  constructor(@InjectModel(Animal.name) private animalModel: Model<Animal>) { }

  async create(createAnimalDto: CreateAnimalDto) {
    try {
      const newAnimal = await new this.animalModel(createAnimalDto).save();
      return newAnimal;

    } catch (error: any) {
      return {
        message: 'Invalid data insertion',
        error
      }
    }
  }

  async findAll() {
    try {
      return await this.animalModel.find().exec();
    } catch (error: any) {
      return {
        message: 'Search not found results',
        error
      }
    }
  }

  async findOne(id: string) {
    try {
      const findAnimal = await this.animalModel
        .findById(id)
        .exec();
      if (!findAnimal) {
        return {
          message: 'No animal register matches this id'
        }
      } else {
        return findAnimal
      }
    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      }
    }
  }

  async update(id: string, updateAnimalDto: UpdateAnimalDto) {
    try {
      const updateAnimal = await this.animalModel
        .findByIdAndUpdate({ _id: id }, updateAnimalDto)
        .exec();
      if (!updateAnimal) {
        return {
          message: 'No animal register matches this id'
        }
      } else {
        return updateAnimal
      }

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
      const removeAnimal = await this.animalModel
      .findByIdAndDelete(id)
      .exec();
      if(!removeAnimal){
        return {
          message: 'No animal register matches this id'
        }
      } else {
        return removeAnimal
      }
    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      }
    }
  }
}
