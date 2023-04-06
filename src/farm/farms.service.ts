import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Farm} from "./entities/farm.entities";
import { Model } from "mongoose";
import { CreateFarmDto } from "./dto/create-farm.dto";
import { UpdateFarmDto } from "./dto/update-farm.dto";
import { UserService } from "src/user/user.service";
import { User } from "src/user/entities/user.entities";



@Injectable()
export class FarmsService {
    constructor(
        @InjectModel(Farm.name) private farmModel: Model<Farm>) { }

    async create(data: CreateFarmDto){
        try{
            const newFarm = await new this.farmModel(data)            
            .save()
            return newFarm

        }catch(error){
            console.log(error)
        }
    }

    async findAll(){
        try{
            return await this.farmModel
            .find()            
            .exec()
        }catch (error) {
            console.log(error)
        }
    }

    async findOne(id: string){
        try{
            return await this.farmModel
            .findById(id)            
            .exec()
        } catch(error){
            console.log(error)
        }
    }

    async findByUserId(user_id: string){
        try{          
            const conditions = { user: user_id }                

            const user = await this.farmModel.find(conditions).exec()           

            return user
        } catch(error){
            console.log(error)
        }
    }   

    async update(id: string, updateFarmDto: UpdateFarmDto){
        try {
            const updateFarm = await this.farmModel
            .findByIdAndUpdate({_id:id}, updateFarmDto)
            .exec()
            return updateFarm
        } catch (error) {
            console.log(error)           
        }
    }
    async remove(id: string){
        try {
            return await this.farmModel
            .findByIdAndRemove({_id: id})
            .exec()            
        } catch (error) {
            console.log(error)
        }
    }
}