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

    async create(createCityDto: CreateCityDto) {
        try {
            const newCity = await new this.citiesModel(
                createCityDto,
            ).save()
            return newCity

        } catch (error: any) {
            return {
                message: 'Invalid data insertion',
                error
            }
        }
    }

    async getAll() {
        try {
            return await this.citiesModel.find().exec()
        } catch (error: any) {
            return {
                message: 'Search not found results',
                error
            }
        }
    }

    async findOne(id: string) {
        try {
            const findOneCity = await this.citiesModel
                .findById(id)
                .exec()
            if (!findOneCity) {
                return {
                    message: 'No city register matches this id'
                }
            } else {
                return findOneCity
            }
        } catch (error: any) {
            return {
                message: 'Invalid Id',
                error
            }
        }
    }

    async update(id: string, updateCity: UpdateCityDto) {
        try {
            const updatedCity = await this.citiesModel
                .findByIdAndUpdate({_id: id}, updateCity, {returnDocument: 'after'})
                .exec()                 
            if (!updateCity) {
                return {
                    message: 'No city register matches this id'
                }
            } else {                
                return updatedCity
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
            const removeCity = this.findOne(id)
            await this.citiesModel
                .findByIdAndDelete(id)
                .exec()
            if(!removeCity){
                return {
                    message: 'No city register matches this id'
                }
            } else {
                return 'City register removed'         
            }               
        } catch (error: any) {
            return {
                message: 'Invalid Id',
                error
            }
        }
    }
}