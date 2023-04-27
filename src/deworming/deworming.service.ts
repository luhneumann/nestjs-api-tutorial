import { Injectable } from '@nestjs/common';
import { CreateDewormingDto } from './dto/create-deworming.dto';
import { UpdateDewormingDto } from './dto/update-deworming.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Deworming } from './entities/deworming.entity';
import { Model } from 'mongoose';
import { id } from 'date-fns/locale';

@Injectable()
export class DewormingService {
  constructor(@InjectModel(Deworming.name) private readonly dewormingModel: Model<Deworming>) { }

  async create(createDewormingDto: CreateDewormingDto) {
    try {
      const newDeworming = await new this.dewormingModel(createDewormingDto)
        .save();
      return newDeworming
    } catch (error: any) {
      return {
        message: 'Invalid data insertion',
        error
      }
    }
  }

  async findAll() {
    try {
      return await this.dewormingModel
        .find()
        .exec()
    } catch (error: any) {
      return {
        message: 'Search not found results',
        error
      }
    }
  }

  async findOne(id: string) {
    try {
      const findOneDeworming = await this.dewormingModel.findById(id).exec()
      if (!findOneDeworming) {
        return {
          message: 'No deworming register matches this id'
        }
      } else {
        return findOneDeworming
      }
    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      }
    }
  }

  async findManagementId(management_id: string) {
    try {
      const conditions = { management_id: management_id }
      const managementId = await this.dewormingModel.findOne(conditions).exec()
      return managementId
    } catch (error: any) {
      return {
        message: 'Invalid management_Id',
        error
      }
    }
  }

  async findDewormingsByAnimals(animal_id: string) {
    try {
      const conditions = { animal: animal_id }
      const animalDewormingInputs: Array<any> = await this.dewormingModel.find(conditions).exec()
      return animalDewormingInputs

    } catch (error: unknown) {
      let message: 'Invalid animal_id'
      return ({ message, error })

    }
  }  

  async findlastDeworming(animal_id: string) {
    try {
      const conditions = { animal: animal_id }
      const lastDeworming = await this.dewormingModel.find(conditions)
        .sort({ date: -1 })   
        .limit(1)          

      if (lastDeworming.length > 0) {
        return lastDeworming;
      } else {
        return {
          message: 'There is no deworming register to this animal'
        }
      }

    } catch (error: any) {
      return {
        message: 'Invalid animal_id',
        error
      };
    }
  }

  async daysFromLastDeworming(animal_id: string) {
    try {
      const lastDeworming = await this.findlastDeworming(animal_id)     
      const currentDate = new Date();
      const pastDate = new Date(lastDeworming[0].date);
      const timeDiff = currentDate.getTime() - pastDate.getTime();
      const daysDiff = Math.floor(timeDiff/(1000 * 3600 * 24));   

      return `${daysDiff} dias`
      
    } catch (error: any) {
      console.log(error)
      return {
        message: 'Invalid animal_id',
        error
      };
    }
  }

  async update(id: string, updateDewormingDto: UpdateDewormingDto) {
    try {
      const updateDeworming = await this.dewormingModel
        .findByIdAndUpdate({ _id: id }, updateDewormingDto, { returnDocument: 'after' })
        .exec()
      if (!updateDeworming) {
        return {
          message: 'No deworming register matches this id'
        }
      } else {
        return updateDeworming
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
      const removeDeworming = await this.dewormingModel
        .findByIdAndDelete(id)
        .exec()
      if (!removeDeworming) {
        return {
          message: 'No deworming register matches this id'
        }
      } else {
        return 'Deworming register removed'
      }
    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      }
    }
  }
}
