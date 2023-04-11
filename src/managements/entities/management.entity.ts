import { Prop, SchemaFactory, Schema} from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Animal } from "src/animals/entities/animal.entity";
import { Document } from "mongoose";
import { User } from "src/user/entities/user.entities";
import { WeightControl } from "src/weight-control/entities/weight-control.entity";
import { Medicine } from "src/medicines/entities/medicine.entity";


@Schema({versionKey: false})
export class Management extends Document {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name})
    user: User

    @Prop({type: [mongoose.Schema.Types.ObjectId], ref: Animal.name})
    animal: Animal[]

    @Prop({ type: Date, required: false})
    date: Date

    @Prop({ type: String, required: false, default: null})
    medicines: string

    @Prop({ type: String, required: false, default: null})
    events: string

    @Prop({ type: String, required: false, default: null})
    deworming: string

    @Prop({ type: String, required: false, default: null})
    animal_deaths: string

    @Prop({ type: String, required: false, default: null})
    vaccination: string

    @Prop({ type: String, required: false, default: null})
    weight_control: string
    
}
export const ManagementSchema = SchemaFactory.createForClass(Management)
    