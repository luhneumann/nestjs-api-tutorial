import { ApiProperty } from "@nestjs/swagger";

export class CreateStateDto {
    @ApiProperty({
        type: String,
        example: 'RS',
        required: true
    })
    abbreviation: string

    @ApiProperty({
        type: String,
        example: 'Rio Grande do Sul',
        required: true
    })
    name: string
}