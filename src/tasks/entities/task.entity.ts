import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Date, Document } from "mongoose";

export enum Reminder{
    'Yes' = 'reminderOn',
    'No' = 'reminderOff'
}

export enum Repeat{
    'Yes' = 'RepeatOn',
    'No' = 'RepeatOff'
}
@Schema({versionKey: false})
export class Task extends Document{
    @Prop({type: Date, required: false})
    date: Date

    @Prop({type: String, required: false})
    time: string
    
    @Prop({type: String, enum: Reminder, default: Reminder.No , required: false})
    reminder: string

    @Prop({type: String, required: false})
    task_title: string

    @Prop({type: String, required: false})
    observation: string

    @Prop({type: String, enum: Repeat, default: Repeat.No , required: false})
    repeat: string

}
export const TaskSchema = SchemaFactory.createForClass(Task)
