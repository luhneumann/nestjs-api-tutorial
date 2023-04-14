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
            return null
        }
    }   

    async getAll() {
        try {
            return await this.userModel
            .find()          
            .populate('city')
            .populate('state')            
            .exec()
        } catch (error) { 
            console.log(error)
        }
    }      

    

    async findByEmail(email: string) {
        try{
            return await this.userModel
            .findOne({
                email: email,
            })            
            .populate('city')
            .populate('state')            
            .exec()
        } catch (error) {
            console.log(error)
        }
        
    }

    async findOne(id: string) {
        try {
            return await this.userModel
                .findById(id)                  
                .populate('city')
                .populate('state')                
                .exec()              
        } catch (error) { 
            console.log(error)
        }
    }

    async update(id: string, data: UpdateUserDto) {
        try {
            return await this.userModel
            .findByIdAndUpdate(id, data)
            .exec()
        } catch (error) {
            console.log(error)
        }
    }

    async delete(id: string) {
        try {
            return await this.userModel
            .findByIdAndRemove(id)
            .exec()
        } catch (error) {
            console.log(error)
        }
    }    
}