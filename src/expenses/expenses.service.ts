import { Injectable } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Expense } from './entities/expense.entity';
import { Model } from 'mongoose';

@Injectable()
export class ExpensesService {
  constructor(@InjectModel(Expense.name) private readonly expenseModel: Model<Expense>){}

  async create(createExpenseDto: CreateExpenseDto) {
    try {
      const newExpense = await new this.expenseModel(createExpenseDto).save()
      return newExpense
    } catch (error) {
      console.log(error)
    }    
  }

  async findAll() {
    try {
      return await this.expenseModel.find().exec()      
    } catch (error) {
      console.log(error)
    }    
  }

  async findOne(id: string) {
    try {
      return await this.expenseModel.findById(id).exec()      
    } catch (error) {
      console.log(error)
    }    
  }

 async update(id: string, updateExpenseDto: UpdateExpenseDto) {
  try {
    return await this.expenseModel
    .findByIdAndUpdate({_id:id}, updateExpenseDto)
    .exec()      
  } catch (error) {
    console.log(error)
  }    
  }

  async remove(id: string) {
    try {
      return await this.expenseModel.findByIdAndDelete(id).exec()      
    } catch (error) {
      console.log(error)
    }      
  }
}
