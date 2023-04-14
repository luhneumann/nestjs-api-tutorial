import { ApiProperty } from "@nestjs/swagger"

export class CreateTaskDto {
    @ApiProperty({type: Date, required: false})
    date: Date

    @ApiProperty({type: String, required: false})
    task_time: string
    
    @ApiProperty({type: String, required: false})
    reminder: string

    @ApiProperty({type: String, required: false})
    task_title: string

    @ApiProperty({type: String, required: false})
    observation: string

    @ApiProperty({type: String, required: false})
    repeat: string

    @ApiProperty({type: String, required: false})
    customize: string


}
