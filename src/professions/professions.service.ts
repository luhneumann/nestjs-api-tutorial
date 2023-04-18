import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Profession } from "./entities/professions.entities";
import { Model } from "mongoose";
import { CreateProfessionDto } from "./dto/create-professions.dto";
import { UpdateProfessionDto } from "./dto/update-professions.dto";

@Injectable()
export class ProfessionsService {
  constructor(
    @InjectModel(Profession.name)
    private professionModel: Model<Profession>,
  ) { }

  async create(createProfessionDto: CreateProfessionDto) {
    try {
      const newProfession = await new this.professionModel(
        createProfessionDto,
      ).save()
      return newProfession

    } catch (error: any) {
      return {
        message: 'Invalid data insertion',
        error
      }
    }
  }

  async findAll() {
    try {
      return await this.professionModel.find().exec();
    } catch (error: any) {
      return {
        message: 'Search not found results',
        error
      }
    }
  }

  async findOne(id: string) {
    try {
      const findOneProfession = await this.professionModel.findById(id).exec()
      if (!findOneProfession) {
        return {
          message: 'No profession register matches this id'
        }
      }
    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      }
    }
  }
  async update(id: string, updateData: UpdateProfessionDto) {
    try {
      const updateProfession = await this.professionModel
        .findOneAndUpdate({ _id: id }, updateData, { returnDocument: 'after' })
        .exec();
      if (!updateProfession) {
        return {
          message: 'No profession register matches this id'
        }
      } else {
        return updateProfession
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
      const removeProfession = await this.professionModel.findByIdAndDelete(id).exec()
      if (!removeProfession) {
        return {
          message: 'No profession register matches this id'
        }
      } else {
        return removeProfession
      }

    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      }
    }
  }
}