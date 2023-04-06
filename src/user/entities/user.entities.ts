import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document, Types } from "mongoose";
import { Profession } from "src/professions/entities/professions.entities";


@Schema({versionKey: false})
export class User extends Document {
    
    @Prop({type: String, required: true})
    name:string;

    @Prop({type: String, required: true})
    email:string; 

    @Prop({type: String, required: false})
    phoneNumber:string;

    @Prop({type: String, required: true})    
    password:string; 

    @Prop({type: String, required: false, default: null})
    profession: string

    @Prop({type: String, required: false, default: null})
    state: string

    @Prop({type: String, required: false, default: null})
    city: string   
    
    @Prop({type: String, required: false, default: null})
    farm: string
}

export const UserSchema = SchemaFactory.createForClass(User)