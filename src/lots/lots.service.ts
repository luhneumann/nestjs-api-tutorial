import { Injectable } from '@nestjs/common';
import { CreateLotDto } from './dto/create-lot.dto';
import { UpdateLotDto } from './dto/update-lot.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Lot } from './entities/lot.entity';
import { Aggregate, Model } from 'mongoose';
import { WeightControl } from 'src/weight-control/entities/weight-control.entity';


@Injectable()
export class LotsService {
  constructor(@InjectModel(Lot.name) private LotsModel: Model<Lot>) { }

  async create(createLotDto: CreateLotDto) {
    try {
      const newLot = await new this.LotsModel(createLotDto)        
        .save()        
      return newLot

    } catch (error: any) {
      return {
        message: 'Invalid data insertion',
        error
      }
    }
  }

  async getAll() {
    try {
      const findAllLots = await this.LotsModel
        .find()
        .populate('animals')
        .exec();
      if (!findAllLots) {
        return {
          message: "Serch not found results"
        }
      } else {
        return findAllLots
      }
    } catch (error: any) {
      return error
    }
  }

  async findOne(id: string) {
    try {
      const findOneLot = await this.LotsModel
        .findById(id)
        .populate('animals')        
        .exec();
      if (!findOneLot) {
        return {
          message: 'No lot register matches this id '
        }
      } else {
        return findOneLot
      }
    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      }
    }
  }

  async findLotsByFarm(farm_id: string) {
    try {
      const conditions = { farm: farm_id }
      const findByFarm = await this.LotsModel
        .find(conditions)
        .populate('animals')
        .exec();
      if (!findByFarm) {
        return {
          message: 'No lots register at this farm'
        }
      } else {
        return findByFarm
      }

    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      }
    }
  }

  async findLotsByFarmEspecial(farm_id: string) {

    const conditions = { farm: farm_id }
    const findByFarm = await this.LotsModel
      .find(conditions)
      .exec();

    return findByFarm

  }   

  async joinLotAndWeight(id: string){
    try {     
      const lot = await this.LotsModel.aggregate([         
        { $lookup: 
          {   
            from: "weightcontrols",
            localField: "animals",
            foreignField: "animal",
            as: "weight_control"
          },          
        },        
      ])
      const byLotIdFilter = lot.filter((lot) => lot._id == id)
      return byLotIdFilter

    } catch (error: any) {
      
    }
  }



  async update(id: string, updateLotDto: UpdateLotDto) {
    try {
      const updateLot = await this.LotsModel
        .findByIdAndUpdate({ _id: id }, updateLotDto, { returnDocument: 'after' })
        .exec()
      if (!updateLot) {
        return {
          message: 'No lot register matches this id'
        }
      } else {
        return updateLot
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
      const removeLot = await this.LotsModel
        .findByIdAndDelete(id)
        .exec()
      if (!removeLot) {
        return {
          message: 'No lot register matches this id'
        }
      } else {
        return 'Lot register removed'
      }
    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      }
    }
  }
}
