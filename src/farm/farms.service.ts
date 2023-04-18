import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Farm } from "./entities/farm.entities";
import { Model } from "mongoose";
import { CreateFarmDto } from "./dto/create-farm.dto";
import { UpdateFarmDto } from "./dto/update-farm.dto";
import { UserService } from "src/user/user.service";
import { User } from "src/user/entities/user.entities";



@Injectable()
export class FarmsService {
    constructor(
        @InjectModel(Farm.name) private farmModel: Model<Farm>) { }

    async create(data: CreateFarmDto) {
        try {
            const newFarm = await new this.farmModel(data)
                .save()
            return newFarm

        } catch (error: any) {
            return {
                message: 'Invalid data insertion',
                error
            }
        }
    }

    async findAll() {
        try {
            return await this.farmModel
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
            const findOneFarm = await this.farmModel
                .findById(id)
                .exec()
            if (!findOneFarm) {
                return {
                    message: 'No farm register matches this id'
                }
            } else {
                return findOneFarm
            }
        } catch (error: any) {
            return {
                message: 'Invalid Id',
                error
            }
        }
    }

    async findByUserId(user_id: string) {
        try {
            const conditions = { user: user_id }
            const user = await this.farmModel.find(conditions).exec()

            if (!user) {
                return {
                    message: 'No user matches this id'
                }
            } else {
                return user
            }
        } catch (error: any) {
            return {
                message: 'Invalid user_id',
                error
            }
        }
    }

    async update(id: string, updateFarmDto: UpdateFarmDto) {
        try {
            const updateFarm = await this.farmModel
                .findByIdAndUpdate({ _id: id }, updateFarmDto, { returnDocument: 'after' })
                .exec()
            if (!updateFarm) {
                return {
                    message: 'No farm register matches this id'
                }
            } else {
                return updateFarm
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
            const removeFarm = await this.farmModel
                .findByIdAndRemove({ _id: id })
                .exec()
            if (!removeFarm) {
                return {
                    message: 'No farm register matches this id'
                }
            } else {
                return 'Farm register removed'
            }
        } catch (error: any) {
            return {
                message: 'Invalid Id',
                error
            }
        }
    }
}