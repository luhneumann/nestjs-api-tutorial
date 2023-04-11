import { Injectable } from '@nestjs/common';
import { CreateManagementDto } from './dto/create-management.dto';
import { UpdateManagementDto } from './dto/update-management.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Management } from './entities/management.entity';
import { Model } from 'mongoose';
import { MedicinesService } from 'src/medicines/medicines.service';
import { EventsService } from 'src/events/events.service';
import { DewormingService } from 'src/deworming/deworming.service';
import { WeightControlService } from 'src/weight-control/weight-control.service';
import { VaccinationService } from 'src/vaccination/vaccination.service';

@Injectable()
export class ManagementsService {
  constructor(@InjectModel(Management.name) private managementModel: Model<Management>,
  public  medicinesService: MedicinesService,
  public  eventsService: EventsService,
  public  dewormingService: DewormingService,
  public  weightControlService: WeightControlService,
  public  vaccinationService: VaccinationService) { }

  async create(createManagementDto: CreateManagementDto) {
    try {
        const newManagement = await new this.managementModel(createManagementDto)        
        .save()

        return newManagement
    } catch(error){
      console.log(error)
    }    
  }

  async findAll() {
    try {
      return await this.managementModel
      .find()      
      .exec()
    } catch (error) {
      console.log(error)
    }    
  }

  async findOne(id: string) {
    try {
      return await this.managementModel
      .findById(id)     
      .exec()
    } catch (error) {
      console.log(error)
    }    
  }

  async findEachChangesOfManagements(id: string){
    try {      
      const medicines = await this.medicinesService.findManagementId(id)      
      const vaccination = await this.vaccinationService.findManagementId(id)      
      const deworming = await this.dewormingService.findManagementId(id)      
      const events = await this.eventsService.findManagementId(id)      
      const weight_control = await this.weightControlService.findManagementId(id)                
      return {
        medicines,
        vaccination,
        deworming,
        events,
        weight_control
      }      
    } catch (error) {
      console.log()
    }
  }
  

  async update(id: string, updateManagementDto: UpdateManagementDto) {
    try{
      const updateManagement = await this.managementModel
      .findByIdAndUpdate({_id: id}, updateManagementDto)
      .exec()
      return updateManagement
    } catch (error){
      console.log(error)
    }    
  }

  async remove(id: string) {
    try {
      return await this.managementModel
      .findByIdAndRemove(id)
      .exec()
    } catch (error) {
      console.log(error)
    }    
  }
}
