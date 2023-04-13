import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './entities/task.entity';
import { Model } from 'mongoose';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private readonly taskModel: Model<Task>){}

  async create(createTaskDto: CreateTaskDto) {
    try {
      const newTask = await new this.taskModel(createTaskDto).save()
      return newTask
    } catch (error) {
      console.log(error)
    }   
  }

  async findAll() {
    try {
      return await this.taskModel.find().exec()      
    } catch (error) {
      console.log(error)
    }   
  }

  async findOne(id: string) {
    try {
      return await this.taskModel.findById(id).exec()      
    } catch (error) {
      console.log(error)
    }   
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    try {
      return await this.taskModel
      .findByIdAndUpdate({_id: id}, updateTaskDto)
      .exec()      
    } catch (error) {
      console.log(error)
    }   
  }

  async remove(id: string) {
    try {
      return await this.taskModel
      .findByIdAndDelete(id)
      .exec()      
    } catch (error) {
      console.log(error)
    }   
  }
}
