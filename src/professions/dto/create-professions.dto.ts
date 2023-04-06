import { ApiProperty } from "@nestjs/swagger";

export class CreateProfessionDto {
    @ApiProperty({
        type: String,
        required: true
    })
    profession: string
}