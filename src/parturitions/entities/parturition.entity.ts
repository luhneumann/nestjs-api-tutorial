import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Date, Document } from "mongoose";
import { User } from "src/user/entities/user.entities";

export enum FatherEnum{
    'Own' = 'Own',
    'Other' = 'Other'
}

@Schema({ versionKey: false})
export class Parturition extends Document{

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: User.name, required: false})
    user: User

    @Prop({type: Date, required: false})
    date: Date

    @Prop({type: String, required: false})
    matrix: string

    @Prop({type: String, enum: FatherEnum , default: FatherEnum.Own, required: false})
    father_owner: string

    @Prop({type: String, required: false})
    father_name: string
    
    @Prop({type: String, required: false})
    birth: string
    
    @Prop({type: String, required: false})
    udder: string
    
    @Prop({type: String, required: false})
    mother_hability: string
    
    @Prop({type: String, required: false})
    delivery_type: string
    
    @Prop({type: String, required: false})
    observation: string
}

export const ParturitionSchema = SchemaFactory.createForClass(Parturition)
