import { ApiProperty } from "@nestjs/swagger"

export class CreateAnimalDto {
    @ApiProperty({
        type: String,
        required: true
    })
    name: string

}



