import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document, Types } from "mongoose";
import { Profession } from "src/professions/entities/professions.entities";


@Schema({versionKey: false})
export class User extends Document {
    
    @Prop({type: String, required: true})
    name:string;

    @Prop({type: String, required: true})
    email:string; 

    @Prop({type: String, required: true})
    phoneNumber:string;

    @Prop({type: String, required: true})    
    password:string; 

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: Profession.name, required: true})
    profession: Profession
    
}

export const UserSchema = SchemaFactory.createForClass(User)