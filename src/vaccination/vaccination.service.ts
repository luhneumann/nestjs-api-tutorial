import { Injectable } from '@nestjs/common';
import { CreateVaccinationDto } from './dto/create-vaccination.dto';
import { UpdateVaccinationDto } from './dto/update-vaccination.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Vaccination, VaccinationSchema } from './entities/vaccination.entity';
import { Model } from 'mongoose';



@Injectable()
export class VaccinationService {
  constructor(@InjectModel(Vaccination.name) private readonly vaccinationModel: Model<Vaccination>) { }

  async create(createVaccinationDto: CreateVaccinationDto) {
    try {
      const newVaccination = await new this.vaccinationModel(createVaccinationDto)
        .save()
      return newVaccination

    } catch (error: any) {
      return {
        message: 'Invalid data insertion',
        error
      }
    }
  }

  async findAll() {
    try {
      return await this.vaccinationModel
        .find()
        .exec()
    } catch (error: any) {
      return {
        message: 'Search not found results',
        error
      }
    }
  }

  async findManagementId(management_id: string) {
    try {
      const conditions = { management_id: management_id }
      const managementId = await this.vaccinationModel.find(conditions).exec()
      return managementId
    } catch (error: any) {
      return {
        message: 'Invalid management_Id',
        error
      }
    }
  }

  async findVaccinesByAnimals(animal_id: string) {
    try {
      const conditions = { animal: animal_id }
      const animalVaccinationInputs: Array<any> = await this.vaccinationModel.find(conditions).exec()
      return animalVaccinationInputs

    } catch (error: unknown) {
      return {
        message: 'Invalid animal_id',
        error
      };

    }
  }

  async findVaccinesByAnimalsSpecial(animal_id: string) {

    const conditions = { animal: animal_id }
    const animalVaccinationInputs: Array<any> = await this.vaccinationModel.find(conditions).exec()
    return animalVaccinationInputs
  }

  async vaccineIndicatorFilter(animal_id: string) {
    try {
      const animalVaccination = await this.findVaccinesByAnimalsSpecial(animal_id)
      const allInput = animalVaccination.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      })      
      console.log(allInput)
      const lastVaccine = allInput.map((item) => item.vaccine)      

      return lastVaccine[0]       

    } catch (error: any) {
      return {
        message: 'Invalid animal_id',
        error
      };
    }
  }

  async findOne(id: string) {
    try {
      const findOneVaccination = await this.vaccinationModel
        .findById(id)
        .exec()
      if (!findOneVaccination) {
        return {
          message: 'No vaccination register matches this id'
        }
      } else {
        return {
          findOneVaccination
        }
      }
    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      }
    }
  }

  async update(id: string, updateVaccinationDto: UpdateVaccinationDto) {
    try {
      const updateVaccinationRegister = await this.vaccinationModel
        .findByIdAndUpdate({ _id: id }, updateVaccinationDto)
        .exec()
      if (!updateVaccinationRegister) {
        return {
          message: 'No vaccination register matches this id'
        }
      } else {
        return updateVaccinationRegister
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
      const removeVaccinationRegister = await this.vaccinationModel
        .findByIdAndRemove(id)
        .exec()
      if (!removeVaccinationRegister) {
        return {
          message: 'No vaccination register matches this id'
        }
      } else {
        return 'Vaccination register removed'
      }
    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      }
    }
  }
}
