import { Prop, Schema } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { Cities } from "src/cities/entities/cities.entities";
import { States } from "src/states/entities/states.entities";
import { User } from "src/user/entities/user.entities";

export enum EmbryoEnum {
    'Yes' = 'Yes',
    'No' = 'No'
}

@Schema({versionKey: false})
export class Farms extends Document {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true})
    user: User

    @Prop({ type: String, required: true})
    name: string

    @Prop({ type: String, required: false})
    email: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: States.name, required: true})
    state: States

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: Cities.name, required: true})
    city: Cities

    @Prop({ type: String, required: true})
    address: string

    @Prop({ type: Number, required: false})
    milking_animals: number

    @Prop({ type: String, required: false})
    first_milking: string

    @Prop({ type: String, required: false})
    second_milking: string

    @Prop({ type: String, required: false})
    third_milking: string

    @Prop({ type: String,  enum: EmbryoEnum, default: EmbryoEnum.Yes })
    embryo_transfer: string

}



