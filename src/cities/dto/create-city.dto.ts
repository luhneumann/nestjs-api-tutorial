import { ApiProperty } from "@nestjs/swagger";

export class CreateCityDto {
    @ApiProperty({
        type: String,
        required: true
    })
    name: string
}