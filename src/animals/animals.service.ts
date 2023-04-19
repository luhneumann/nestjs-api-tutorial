import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Animal, GenderEnum } from './entities/animal.entity';
import { Model } from 'mongoose';
import { Farm } from 'src/farm/entities/farm.entities';
import { LotsService } from 'src/lots/lots.service';



@Injectable()
export class AnimalsService {
  constructor(@InjectModel(Animal.name) private animalModel: Model<Animal>,
  public lotsService: LotsService) { }

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

  async findAll(gender?: string) {
    try {
      if(!!gender){
        let conditions = {gender: gender}
        return await this.animalModel.find(conditions).exec()
      } else {
        return await this.animalModel.find().exec();
      }
      
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

  async findByFarm(farm_id: string) {
    try {
      const conditions = { farm: farm_id }
      const animalsByFarm = await this.animalModel
        .find(conditions)
        .exec()
      if (!animalsByFarm) {
        return {
          message: 'No farm register matches this id'
        }
      } else {
        return animalsByFarm
      }
    } catch (error: any) {
      return {
        message: 'Invalid farm_Id',
        error
      }
    }
  }

  async findByLot(id: string) {
    try {
   
      const animalsByLot = await this.lotsService.findOne(id)
      
      if (!animalsByLot) {
        return {
          message: 'No lot register matches this id'
        }
      } else {
       return animalsByLot['animals']
      }
    } catch (error: any) {    
      return {
        message: 'Invalid lot_Id',
        error
      }
    }
  }

  

  async update(id: string, updateAnimalDto: UpdateAnimalDto) {
    try {
      const updateAnimal = await this.animalModel
        .findByIdAndUpdate({ _id: id }, updateAnimalDto, { returnDocument: 'after' })
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
      if (!removeAnimal) {
        return {
          message: 'No animal register matches this id'
        }
      } else {
        return {
          message: 'Animal register removed'
        }
      }
    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      }
    }
  }
}
