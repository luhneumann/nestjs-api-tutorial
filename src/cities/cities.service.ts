import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { City } from "./entities/cities.entities"
import { Model } from "mongoose"
import { CreateCityDto } from "./dto/create-city.dto"
import { UpdateCityDto } from "./dto/update-city.dto"

@Injectable()
export class CitiesService {
    constructor(
        @InjectModel(City.name) private citiesModel: Model<City>) { }

    async create(data: CreateCityDto) {
        try {
            const newCity = await new this.citiesModel(
                data,
            ).save()
            return newCity

        } catch (error) {
            console.log(error)
            return null
        }
    }

    async getAll() {
        try {
            return await this.citiesModel.find().exec()
        } catch (error) {
            return error
        }
    }

    async findOne(id: string) {
        try {
            return await this.citiesModel.findById(id).exec()
        } catch (error) {
            return error
        }
    }

    async update(id: string, updateData: UpdateCityDto) {
        try {
            await this.citiesModel
                .findOneAndUpdate({ _id: id }, updateData)
                .exec()
            return await this.findOne(id)
        } catch (error) {
            return error
        }
    }

    async remove(id: string) {
        try {
            const city = this.findOne(id)
            await this.citiesModel
                .findByIdAndDelete(id)
                .exec()
            return city
        } catch (error) {
            return error
        }
    }
}