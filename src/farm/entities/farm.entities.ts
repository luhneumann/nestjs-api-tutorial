import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { City } from "src/cities/entities/cities.entities";
import { State} from "src/states/entities/states.entities";
import { User } from "src/user/entities/user.entities";

export enum EmbryoEnum {
    'Yes' = 'Yes',
    'No' = 'No'
}

@Schema({versionKey: false})
export class Farm extends Document {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true})
    user: User

    @Prop({ type: String, required: false})
    name: string

    @Prop({ type: String, required: false})
    email: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: State.name, required: false})
    state: State

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: City.name, required: false})
    city: City

    @Prop({ type: String, required: false})
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

    @Prop({type: Number, required: false})
    total_animals: number

}
export const FarmSchema = SchemaFactory.createForClass(Farm)


