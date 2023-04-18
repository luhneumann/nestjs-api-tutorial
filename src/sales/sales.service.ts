import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Sale } from './entities/sale.entity';
import { Model } from 'mongoose';

@Injectable()
export class SalesService {
  constructor(@InjectModel(Sale.name) private readonly salesModel: Model<Sale>) { }

  async create(createSaleDto: CreateSaleDto) {
    try {
      const newSale = await new this.salesModel(createSaleDto)
        .save()
      return newSale
    } catch (error: any) {
      return {
        message: 'Invalid data insertion',
        error
      }
    }
  }

  async findAll() {
    try {
      return await this.salesModel.find().exec()
    } catch (error) {
      return {
        message: 'Search not found results',
        error
      }
    }
  }

  async findOne(id: string) {
    try {
      const findOneSale = await this.salesModel.findById(id).exec()
      if (!findOneSale) {
        return {
          message: 'No sale register matches this id'
        }
      } else {
        return findOneSale
      }
    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      }
    }
  }

  async update(id: string, updateSaleDto: UpdateSaleDto) {
    try {
      const updateSale = await this.salesModel
        .findByIdAndUpdate({ _id: id }, updateSaleDto, { returnDocument: 'after' })
        .exec()
      if (!updateSale) {
        return {
          message: 'No sale register matches this id'
        }
      } else {
        return updateSale
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
      const removeSale = await this.salesModel.findByIdAndDelete(id).exec()
      if (!removeSale) {
        return {
          message: 'No sale register matches this id'
        }
      } else {
        return 'Sale register removed'
      }
    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      }
    }
  }
}
