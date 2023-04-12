import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Event } from './entities/event.entity';
import { Model } from 'mongoose';
import { AnimalDeathsService } from 'src/animal-deaths/animal-deaths.service';
import { DiseasesService } from 'src/disease/disease.service';


@Injectable()
export class EventsService {
  constructor(@InjectModel(Event.name) private readonly eventModel: Model<Event>,
  private readonly animalDeaths: AnimalDeathsService,
  private readonly diseases: DiseasesService){}

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

  async findManagementId(management_id: string){
    try {
      const conditions = {management_id: management_id}
      const managementId = await this.eventModel.findOne(conditions).exec()
      return managementId
    } catch (error) {
      console.log(error)
    }
  }

  async findEachEvent(id: string){
    try {      
      const diseases = await this.diseases.findEventId(id)      
      const animalDeaths = await this.animalDeaths.findEventId(id)      
                  
      return {
        diseases,
        animalDeaths,        
      }      
    } catch (error) {
      console.log()
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
