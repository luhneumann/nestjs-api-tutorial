import { ApiProperty } from "@nestjs/swagger";
import { Date } from "mongoose";

export class CreateExpenseDto {
    @ApiProperty({type: String, required: false})
    date: Date

    @ApiProperty({type: String, required: false})
    expense_title: string

    @ApiProperty({type: String, required: false})
    expense_type: string

    @ApiProperty({type: String, required: false})
    expense_value: string

    @ApiProperty({type: String, required: false})
    observation: string
}
