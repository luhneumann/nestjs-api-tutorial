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

    @Prop({ type: String, required: false})
    medicines: string

    @Prop({ type: String, required: false})
    events: string

    @Prop({ type: String, required: false})
    deworming: string

    @Prop({ type: String, required: false})
    animal_deaths: string

    @Prop({ type: String, required: false})
    vaccination: string

    @Prop({ type: String, required: false})
    weight_control: string
    
}
export const ManagementSchema = SchemaFactory.createForClass(Management)
    