import { ApiProperty } from "@nestjs/swagger";

export class CreateReprodutionTimeDto {
    @ApiProperty({type: Date, required: false})
    date: Date

    @ApiProperty({type: String, required: false})
    cycle_number: string

    @ApiProperty({type: Date, required: false})
    days_on_cycle: Date

}
