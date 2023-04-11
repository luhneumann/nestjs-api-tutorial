import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import mongoose from "mongoose"
import { Animal } from "src/animals/entities/animal.entity"
import { Management } from "src/managements/entities/management.entity"
import { Document } from "mongoose"
import { User } from "src/user/entities/user.entities"


@Schema({versionKey: false})
export class WeightControl extends Document {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name})
    user: User

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Animal.name, required: false})
    animal: Animal

    @Prop({ type: Date, required: false})
    date: Date   

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Management.name, required: false})
    management_id: Management    

    @Prop({ type: String, required: false})
    animal_weight: string[]          
  
}
export const WeightControlSchema = SchemaFactory.createForClass(WeightControl)
    
