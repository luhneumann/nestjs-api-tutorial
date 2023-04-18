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
    private readonly diseases: DiseasesService) { }

  async create(createEventDto: CreateEventDto) {
    try {
      const newEvent = await new this.eventModel(createEventDto)
        .save()
      return newEvent
    } catch (error: any) {
      return {
        message: 'Invalid data insertion',
        error
      }
    }
  }

  async findAll() {
    try {
      return await this.eventModel.find().exec()
    } catch (error: any) {
      return {
        message: 'Search not found results',
        error
      }
    }
  }

  async findOne(id: string) {
    try {
      const findOneEvent = await this.eventModel
        .findById(id)
        .exec();
      if (!findOneEvent) {
        return {
          message: 'No event register matches nthis id'
        }
      } else {
        return findOneEvent
      }
    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      }
    }
  }

  async findManagementId(management_id: string) {
    try {
      const conditions = { management_id: management_id }
      const managementId = await this.eventModel.findOne(conditions).exec()
      if (!managementId) {
        return {
          message: 'No management_id matches this id'
        }
      } else {
        return managementId
      }
    } catch (error: any) {
      return {
        message: 'Invalid management_id',
        error
      }
    }
  }

  async findEachEvent(id: string) {
    try {
      const diseases = await this.diseases.findEventId(id)
      const animalDeaths = await this.animalDeaths.findEventId(id)

      return {
        diseases,
        animalDeaths,
      }
    } catch (error: any) {
      return {
        message: 'Invalid id',
        error
      }
    }
  }

  async update(id: string, updateEventDto: UpdateEventDto) {
    try {
      const updateEvent = await this.eventModel
        .findByIdAndUpdate({ _id: id }, updateEventDto, { returnDocument: 'after' })
        .exec()
      if (!updateEvent) {
        return {
          message: 'No event matches this id'
        }
      } else {
        return updateEvent
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
      const removeEvent = await this.eventModel
        .findByIdAndDelete(id)
        .exec()
      if (!removeEvent) {
        return {
          message: 'No event register matches this id'
        }
      } else {
        return 'Event register removed'
      }
    } catch (error: any) {
      return {
        message: 'Invalid Id',
        error
      }
    }
  }
}
