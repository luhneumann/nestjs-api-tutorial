import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entities';
import * as bcrypt from 'bcrypt'

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

        } catch (error) {}
    }   

    async getAll() {
        return await this.userModel.find().exec();
    }

    async getById(id: number) {
        return await this.userModel.findById(id).exec();
    }

    async findByEmail(email: string) {
        try{
            return await this.userModel
            .findOne({
                email: email,
            })
            .exec()
        } catch (error) {}
        
    }

    async findOne(id: string) {
        try {
            return await this.userModel
                .findById(id)  
                .exec()              
        } catch (error) { }
    }

    
}