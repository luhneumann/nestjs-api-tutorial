import { Injectable } from '@nestjs/common';
import { CreateLotDto } from './dto/create-lot.dto';
import { UpdateLotDto } from './dto/update-lot.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Lot } from './entities/lot.entity';
import { Model } from 'mongoose';

@Injectable()
export class LotsService {
  constructor(@InjectModel(Lot.name) private LotsModel: Model<Lot>){}

  async create(createLotDto: CreateLotDto) {
    try{
      const newLot = await new this.LotsModel(createLotDto)
      .save()
      return newLot

    } catch (error){
       throw Error
    }    
  }

  async getAll() {
    try {
      return this.LotsModel.find().exec();
    } catch (error) {
      throw Error
    }    
  }

  async findOne(id: string) {
    try{
      return await this.LotsModel.findById(id).exec();
    } catch (error){
      throw error
    }    
  }

  async update(id: string, updateLotDto: UpdateLotDto) {
    try{
      const updateLot = await this.LotsModel
        .findByIdAndUpdate({_id: id}, updateLotDto)
        .exec()
      return updateLot
    } catch(error) {
      throw error
    }    
  }

  async remove(id: string) {
    try{
      const deleteLot =  await this.LotsModel
      .findByIdAndDelete(id)
      .exec()
      return deleteLot
    } catch (error) {
      throw error
    } 
  }  
    
}
