import { ApiProperty } from "@nestjs/swagger";

export class CreateStateDto {
    @ApiProperty({
        type: String,
        required: true
    })
    name: string
}