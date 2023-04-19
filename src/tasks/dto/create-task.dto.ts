import { ApiProperty } from "@nestjs/swagger"
import { IsEnum } from "class-validator"
import { Reminder, Repeat } from "../entities/task.entity"

export class CreateTaskDto {
    @ApiProperty({type: Date, required: false})
    date: Date

    @ApiProperty({type: String, required: false})
    task_time: string
    
    @IsEnum(Reminder)
    @ApiProperty({type: String, enum: Reminder, required: false})
    reminder: Reminder

    @ApiProperty({type: String, required: false})
    task_title: string

    @ApiProperty({type: String, required: false})
    observation: string
    
    @IsEnum(Repeat)
    @ApiProperty({type: String, enum: Repeat, required: false})
    repeat: Repeat

    @ApiProperty({type: String, required: false})
    customize: string


}
