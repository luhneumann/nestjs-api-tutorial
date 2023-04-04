import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entities';
import * as bcrypt from 'bcrypt'
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>){}

    async create(createUserDto: CreateUserDto){             
        try{ 
            const createSalt = await bcrypt.genSalt()
            const password = createUserDto.password;
            const hash = await bcrypt.hash(password, createSalt)
            
            const user = Object.assign(createUserDto, {password: hash,});
            const newUser = await new this.userModel(user).save();

            const response = this.findOne(newUser._id.toString());
            return response           

        } catch (error) {
            console.log(error, 'error')
        }
    }   

    async getAll() {
        try {
            return await this.userModel
            .find()
            .populate('profession')
            .exec()
        } catch (error) { 
            return error
        }
    }
        

    async getById(id: string) {
        return await this.userModel.findById(id).exec();
    }

    async findByEmail(email: string) {
        try{
            return await this.userModel
            .findOne({
                email: email,
            })
            .populate('Profession')
            .exec()
        } catch (error) {
            return error
        }
        
    }

    async findOne(id: string) {
        try {
            return await this.userModel
                .findById(id)  
                .populate('Profession')
                .exec()              
        } catch (error) { 
            return error
        }
    }

    async update(id: string, data: UpdateUserDto) {
        try {
            return await this.userModel
            .findByIdAndUpdate(id, data)
            .exec()
        } catch (error) {
            return error
        }
    }

    async delete(id: string) {
        try {
            return await this.userModel
            .findByIdAndRemove(id)
            .exec()
        } catch (error) {
            return error
        }
    }    
}