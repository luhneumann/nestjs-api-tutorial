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

        } catch (error) {
            console.log(error)
            return null
        }
    }

    async findAll() {
        try {
            return await this.professionModel.find().exec();
        } catch (error) { }
    }

    async findOne(id: string) {
        try {
            return await this.professionModel.findById(id).exec()
        } catch (error) {
            error
        }
    }
    async update(id: string, updateData: UpdateProfessionDto) {
        try {
            await this.professionModel
                .findOneAndUpdate({ _id: id }, updateData)
                .exec();
            return await this.findOne(id)
        } catch (error) {
            return error
        }
    }

    async remove(id: string) {
        try {
            const profession = this.findOne(id)
            await this.professionModel
                .findOneAndDelete({ _id: id })
                .exec()
            return profession
        } catch (error) {
            return error
        }

    }
}