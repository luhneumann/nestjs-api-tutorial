import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Sale } from './entities/sale.entity';
import { Model } from 'mongoose';

@Injectable()
export class SalesService {
  constructor(@InjectModel(Sale.name) private readonly salesModel: Model<Sale>){}

  async create(createSaleDto: CreateSaleDto) {
    try {
      const newSale = await new this.salesModel(createSaleDto)
      .save()
      return newSale
    } catch (error) {
      console.log(error)
    }    
  }

  async findAll() {
    try {
      return await this.salesModel.find().exec()    
    } catch (error) {
      console.log(error)
    }        
  }

  async findOne(id: string) {
    try {
      return await this.salesModel.findById(id).exec()    
    } catch (error) {
      console.log(error)
    }  
  }

  async update(id: string, updateSaleDto: UpdateSaleDto) {
    try {
      return await this.salesModel
      .findByIdAndUpdate({_id: id}, updateSaleDto)
      .exec()    
    } catch (error) {
      console.log(error)
    }        
  }

  async remove(id: string) {
    try {
      return await this.salesModel.findByIdAndDelete(id).exec()    
    } catch (error) {
      console.log(error)
    }        
  }
}
