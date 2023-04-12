import { ApiProperty } from "@nestjs/swagger";
import { Date } from "mongoose";

export class CreateIncomingDto {
    @ApiProperty({type: String, required: false})
    id_title: string

    @ApiProperty({type: String, required: false})
    date: Date

    @ApiProperty({type: String, required: false})
    income_value: string

    @ApiProperty({type: String, required: false})
    observation: string

}
