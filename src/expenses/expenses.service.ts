import { Injectable } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Expense } from './entities/expense.entity';
import { Model } from 'mongoose';

@Injectable()
export class ExpensesService {
  constructor(@InjectModel(Expense.name) private readonly expenseModel: Model<Expense>) { }

  async create(createExpenseDto: CreateExpenseDto) {
    try {
      const newExpense = await new this.expenseModel(createExpenseDto).save()
      return newExpense
    } catch (error: any) {
      return {
        message: 'Invalid data insertion',
        error
      }
    }
  }

  async findAll() {
    try {
      return await this.expenseModel.find().exec()
    } catch (error: any) {
      return {
        message: 'Search not found results',
        error
      }
    }
  }

  async findOne(id: string) {
    try {
      const findOneExpense = await this.expenseModel
        .findById(id)
        .exec()
      if (!findOneExpense) {
        return {
          message: 'No expense register matches this id '
        }
      } else {
        return findOneExpense
      }
    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      }
    }
  }

  async update(id: string, updateExpenseDto: UpdateExpenseDto) {
    try {
      const updateExpense = await this.expenseModel
        .findByIdAndUpdate({ _id: id }, updateExpenseDto, { returnDocument: 'after' })
        .exec()
      if (!updateExpense) {
        return {
          message: 'No expense register matches this id'
        }
      } else {
        return updateExpense
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
      const removeExpense = await this.expenseModel
        .findByIdAndDelete(id)
        .exec()
      if (!removeExpense) {
        return {
          message: 'No expense matches this id'
        }
      } else {
        return 'Expense register removed'
      }
    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      }
    }
  }
}
