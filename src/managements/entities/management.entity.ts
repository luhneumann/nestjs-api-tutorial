import { Prop, SchemaFactory, Schema} from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Animal } from "src/animals/entities/animal.entity";
import { Document } from "mongoose";
import { User } from "src/user/entities/user.entities";


@Schema({versionKey: false})
export class Management extends Document {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name})
    user: User

    @Prop({type: [mongoose.Schema.Types.ObjectId], ref: Animal.name})
    animal: Animal[]

    @Prop({ type: Date, required: false})
    date: Date
}
export const ManagementSchema = SchemaFactory.createForClass(Management)
    