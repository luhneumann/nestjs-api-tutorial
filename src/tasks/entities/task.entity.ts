import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Date, Document } from "mongoose";

export enum Reminder{
    'reminderOn'= 'Yes', 
    'reminderOff' = 'No'
}

export enum Repeat{
    'RepeatOn' = 'Yes' ,
    'RepeatOff' = 'No'
}
@Schema({versionKey: false})
export class Task extends Document{
    @Prop({type: Date, required: false})
    date: Date

    @Prop({type: String, required: false})
    task_time: string
    
    @Prop({type: String, enum: Reminder, default: Reminder.reminderOff , required: false})
    reminder: string

    @Prop({type: String, required: false})
    task_title: string

    @Prop({type: String, required: false})
    observation: string

    @Prop({type: String, enum: Repeat, default: Repeat.RepeatOff , required: false})
    repeat: string

    @Prop({type: String, required: false})
    customize: string

}
export const TaskSchema = SchemaFactory.createForClass(Task)
