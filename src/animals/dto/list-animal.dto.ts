import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateAnimalDto } from "./create-animal.dto";
import { User } from "src/user/entities/user.entities";
import { IsEnum } from "class-validator";
import { GenderEnum } from "../entities/animal.entity";
import { Transform } from "class-transformer";

export class ListAnimalDto extends PartialType(CreateAnimalDto) {
    @ApiProperty({
        required: true,
        type: Object,
        example: {
            name: 'Maria Silva',
            email: 'maria@email',
            phoneNumber: '5134758652',
            password: '546s6sd63d4',
            profession: 'Administrador'
        }     
    })
    user: User

    @Transform((param) => param.value.toLowerCase())
    @IsEnum(GenderEnum)
    @ApiProperty({type: String, enum: GenderEnum, required: false})
    gender: GenderEnum 
}