import { Prop, Schema } from "@nestjs/mongoose";
import mongoose, { Document, Mongoose } from "mongoose";
import { Animal } from "src/animals/entities/animal.entity";

@Schema({versionKey: false})
export class Abortion extends Document{
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Animal.name, required: false})
    animal: Animal

    @Prop({ type: Date, required: false})
    date: Date

    @Prop({ type: String, required: false})
    observation: string
}
