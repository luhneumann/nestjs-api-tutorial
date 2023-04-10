import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Event } from './entities/event.entity';
import { Model } from 'mongoose';


@Injectable()
export class EventsService {
  constructor(@InjectModel(Event.name) private readonly eventModel: Model<Event>){}

  async create(createEventDto: CreateEventDto) {
    try{
      const newEvent = await new this.eventModel(createEventDto)
      .save()
      return newEvent
    } catch(error){
      console.log(error)
    }   
  }

  async findAll() {
    try{
      return await this.eventModel.find().exec()
    } catch (error) {
      console.log(error)
    }
  }

  async findOne(id: string) {
    try{
      return await this.eventModel.findById(id).exec()
    } catch(error){
      console.log(error)
    }    
  }

  async update(id: string, updateEventDto: UpdateEventDto) {
    try{
      return await this.eventModel
      .findByIdAndUpdate({_id: id}, updateEventDto)
      .exec()
    } catch(error){
      console.log(error)
    }    
  }

  async remove(id: string) {
    try{
      return await this.eventModel.findByIdAndDelete(id)
    } catch(error){
      console.log(error)
    }
    
  }
}
