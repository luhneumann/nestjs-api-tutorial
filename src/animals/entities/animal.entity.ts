import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiTags } from "@nestjs/swagger";
import mongoose from "mongoose";
import { User } from "src/user/entities/user.entities";
import { Document } from "mongoose";

export enum GenderEnum {
    'Male' = 'Male',
    'Female' = 'Female'
}

export enum AnimalProperty {
    'Own' = 'Own',
    'Other' = 'Other'
}

@ApiTags('animals')
@Schema({versionKey: false})
export class Animal extends Document {
    
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: User.name, required: false})
    user: User

    @Prop({type: String, required: false})
    identification_number: string

    @Prop({type: String, required: false})
    name: string 

    @Prop({type: String, required: false})
    animal_photo: string

    @Prop({type: String, required: false})
    email: string

    @Prop({type: String, enum: GenderEnum, default: GenderEnum.Female, required: false})
    gender: string

    @Prop({type: String, required: false})
    category: string

    @Prop({type: String, required: false})
    date_of_birth: Date

    @Prop({type: String, required: false})
    race: string

    @Prop({type: String, required: false})
    dentition: string

    @Prop({type: String, required: false})
    observation: string

    @Prop({type: String, required: false})
    attach_document: string

    @Prop({type: String, required: false})
    father_name: string

    @Prop({type: String, enum: AnimalProperty, default: AnimalProperty.Own, required: false})
    father_proper_animal: string

    @Prop({type: String, required: false})
    mother_name: string

    @Prop({type: String, enum: AnimalProperty, default: AnimalProperty.Own, required: false})
    mother_proper_animal: string

    @Prop({type: String, required: false})
    register_name: string

    @Prop({type: String, required: false})
    register_number: string

    @Prop({type: String, required: false})
    tattoo: string

    @Prop({type: String, required: false})
    service: string
}

export const AnimalSchema = SchemaFactory.createForClass(Animal)