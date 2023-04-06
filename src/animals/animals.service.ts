import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Animal } from './entities/animal.entity';
import { Model } from 'mongoose';

@Injectable()
export class AnimalsService {
  constructor(@InjectModel(Animal.name) private animalModel: Model<Animal>){}

  async create(createAnimalDto: CreateAnimalDto) {
    try {
      const newAnimal = await new this.animalModel(createAnimalDto).save();
      return newAnimal;   

    } catch (error) {
      console.log(error)
    }    
  }

  async findAll() {
    try{
      return await this.animalModel.find().exec();
    } catch(error){
      throw Error;
    }
  }

  async findOne(id: string) {
    try{
      return await this.animalModel.findById(id).exec();
    } catch(erro) {
      throw Error;
    }   
  }

  async update(id: string, updateAnimalDto: UpdateAnimalDto) {
    try{
      const updateAnimal = await this.animalModel
      .findByIdAndUpdate({_id: id}, updateAnimalDto)
      .exec();
      return updateAnimal
    } catch (error){
      throw Error
    }    
  }

  async remove(id: string) {
    try{
      return await this.animalModel.findByIdAndDelete({_id: id}) ;
    } catch(error){
      throw Error
    }    
  }
}
