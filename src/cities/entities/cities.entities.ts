import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { State } from "src/states/entities/states.entities";

@Schema({versionKey: false})
export class City extends Document {
    @Prop({type: String, required: true})
    name: string;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: State.name,
        required: true
    })
    state: State
}

export const CitiesSchema = SchemaFactory.createForClass(City)