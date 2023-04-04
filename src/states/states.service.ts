import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { States } from "./entities/states.entities";
import { Model } from "mongoose";
import { CreateStateDto } from "./dto/create-state.dto";
import { UpdateStatesDto } from "./dto/update-state.dto";

@Injectable()
export class StatesService {
    constructor(
        @InjectModel(States.name) private statesModel: Model<States>) { }

    async create(data: CreateStateDto) {
        try {
            const newState = await new this.statesModel(
                data,
            )
                .save()
            return newState

        } catch (error) {
            return error
        }
    }

    async getAll() {
        try {
            return await this.statesModel.find().exec()
        } catch (error) {
            return error
        }
    }

    async findOne(id: string) {
        try {
            return await this.statesModel.findById(id).exec()
        } catch (error) {
            return error
        }
    }

    async update(id: string, updateData: UpdateStatesDto) {
        try {
            await this.statesModel
                .findOneAndUpdate({ _id: id }, updateData)
                .exec()
            return await this.findOne(id)
        } catch (error) {
            return error
        }
    }

    async remove(id: string) {
        try {
            const state = this.findOne(id)
            await this.statesModel
                .findByIdAndDelete(id)
                .exec()
            return state
        } catch (error) {
            return error
        }
    }
}