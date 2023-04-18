import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './entities/task.entity';
import { Model } from 'mongoose';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private readonly taskModel: Model<Task>) { }

  async create(createTaskDto: CreateTaskDto) {
    try {
      const newTask = await new this.taskModel(createTaskDto).save()
      return newTask
    } catch (error: any) {
      return {
        message: 'Invalid data insertion',
        error
      }
    }
  }

  async findAll() {
    try {
      return await this.taskModel.find().exec()
    } catch (error: any) {
      return {
        message: 'Search not found results',
        error
      }
    }
  }

  async findOne(id: string) {
    try {
      const findOneTask = await this.taskModel.findById(id).exec()
      if (!findOneTask) {
        return {
          message: 'No task register matches this id'
        }
      } else {
        return findOneTask
      }
    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      }
    }
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    try {
      const updateTask = await this.taskModel
        .findByIdAndUpdate({ _id: id }, updateTaskDto, { returnDocument: 'after' })
        .exec()
      if (!updateTask) {
        return {
          message: 'No task register matches this id'
        }
      } else {
        return updateTask
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
      const removeTask = await this.taskModel
        .findByIdAndDelete(id)
        .exec()
      if(!removeTask){
        return {
          message: 'No task register matches this id'
        }
      } else {
        return 'Task register removed '
      }
    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      }
    }
  }
}
