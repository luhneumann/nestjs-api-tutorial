import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { State } from "./entities/states.entities";
import { Model } from "mongoose";
import { CreateStateDto } from "./dto/create-state.dto";
import { UpdateStatesDto } from "./dto/update-state.dto";

@Injectable()
export class StatesService {
  constructor(
    @InjectModel(State.name) private statesModel: Model<State>) { }

  async create(data: CreateStateDto) {
    try {
      const newState = await new this.statesModel(
        data,
      )
        .save()
      return newState

    } catch (error: any) {
      return {
        message: 'Invalid data insertion',
        error
      }
    }
  }

  async getAll() {
    try {
      return await this.statesModel.find().exec()
    } catch (error: any) {
      return {
        message: 'Search not found results',
        error
      }
    }
  }

  async findOne(id: string) {
    try {
      const findOneState = await this.statesModel.findById(id).exec()
      if(!findOneState){
        return{
          message: 'No state register matches this id'
        }
      } else {
        return findOneState
      }
    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      }
    }
  }

  async update(id: string, updateData: UpdateStatesDto) {
    try {
      const updateState = await this.statesModel
        .findOneAndUpdate({ _id: id }, updateData, {returnDocument: 'after'})
        .exec()
      if(!updateState){
        return {
          message: 'No state register matches this id'
        }
      } else {
        return updateState
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
      const removeState = await this.statesModel
      .findByIdAndDelete(id)
      .exec()      
      if(!removeState){
        return {
          message: 'No state register matches this id'
        }
      } else {
        return removeState
      }      
    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      }
    }
  }
}