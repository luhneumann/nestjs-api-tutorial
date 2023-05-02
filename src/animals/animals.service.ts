import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Animal, GenderEnum } from './entities/animal.entity';
import { Model } from 'mongoose';
import { LotsService } from 'src/lots/lots.service';
import { WeightControlService } from 'src/weight-control/weight-control.service';
import { DewormingService } from 'src/deworming/deworming.service';
import { differenceInYears } from 'date-fns';




@Injectable()
export class AnimalsService {
  constructor(@InjectModel(Animal.name) private animalModel: Model<Animal>,
    public lotsService: LotsService,
    public weightControlService: WeightControlService,
    public dewormingService: DewormingService) { }

  async create(createAnimalDto: CreateAnimalDto) {
    try {
      const sendAnimal = Object.assign(
        {...createAnimalDto},
        { age: this.calculateAge(new Date(createAnimalDto.birth_date)) },
      );

      const newAnimal = await new this.animalModel(sendAnimal).save();
      return this.findOne(newAnimal._id.toString());

    } catch (error: any) {
      return {
        message: 'Invalid data insertion',
        error
      }
    }
  }

  async findAll(gender?: string) {
    try {
      if (gender !== undefined && gender.length > 0) {
        let conditions = { gender: gender }

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

  async findAnimalsByFarm(farm_id: string) {
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

  async findByFarmSpecial(farm_id: string) {

    const conditions = { farm: farm_id }
    const animalsByFarm = await this.animalModel
      .find(conditions)
      .exec();

    return animalsByFarm

  }

  async findFarmAnimalQuantity(farm_id: string) {
    try {

      const allAnimalsByFarm = await this.findByFarmSpecial(farm_id)               

      const farmAnimalsQuantity = new Set()

      allAnimalsByFarm.forEach(animal => { farmAnimalsQuantity.add(animal) })

      return farmAnimalsQuantity.size


    } catch (error: any) {
      return {
        message: 'Invalid farm_Id',
        error
      }
    }
  }

  async findLotsAnimalQty(farm_id: string) {
    try {
      const allLots = await this.lotsService.findLotsByFarmEspecial(farm_id)
      const AnimalsList = new Set()

      allLots.forEach(lot => {
        lot.animals.forEach(animal => AnimalsList.add(animal.toString()))
      })

      return AnimalsList.size

    } catch (error: any) {
      return {
        message: 'Invalid farm_Id',
        error
      }
    }
  }

  async findNoLotsAnimals(farm_id: string) {
    try {

      const farmAnimals: any[] = await this.findByFarmSpecial(farm_id)
      const lotsAnimals: any[] = await this.lotsService.findLotsByFarmEspecial(farm_id)

      const inNoLots = new Set<string>();

      farmAnimals.forEach((animal) => {
        const idAnimal = animal._id;

        lotsAnimals.forEach((lot) => {
          const lotAnimals = lot.animals;

          if (!lotAnimals.includes(idAnimal)) {
            inNoLots.add(idAnimal)
          }
        })
      })
      return inNoLots.size
    } catch (error: any) {
      return {
        message: 'Invalid farm_Id',
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

  calculateAge(birthdate: Date): string {
    const today = new Date();
    return differenceInYears(today, birthdate).toString();
  }
}
