import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "src/user/entities/user.entities";

export enum GenderEnum {
    'Male' = 'Male',
    'Female' = 'Female'
}

export enum AnimalProperty {
    'Own' = 'Own',
    'Other' = 'Other'
}

@Schema({versionKey: false})
export class Animals extends Document {
    
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true})
    user: User

    @Prop({type: String, required: true})
    identification_number: string

    @Prop({type: String, required: true})
    name: string 

    @Prop({type: String, required: false})
    animal_photo: string

    @Prop({type: String, required: false})
    email: string

    @Prop({type: String, enum: GenderEnum, default: GenderEnum.Female, required: true})
    gender: string

    @Prop({type: String, required: true})
    category: string

    @Prop({type: String, required: true})
    date_of_birth: string

    @Prop({type: String, required: true})
    race: string

    @Prop({type: String, required: true})
    dentition: string

    @Prop({type: String, required: false})
    observation: string

    @Prop({type: String, required: false})
    attach_document: string

    @Prop({type: String, required: true})
    father_name: string

    @Prop({type: String, enum: AnimalProperty, default: AnimalProperty.Own, required: true})
    father_proper_animal: string

    @Prop({type: String, required: false})
    mother_name: string

    @Prop({type: String, enum: AnimalProperty, default: AnimalProperty.Own, required: true})
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

export const AnimalSchema = SchemaFactory.createForClass(Animals)
