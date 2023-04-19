import { ApiProperty } from "@nestjs/swagger"
import { IsEnum } from "class-validator"
import { User } from "src/user/entities/user.entities"
import { AnimalProperty, GenderEnum } from "../entities/animal.entity"

export class CreateAnimalDto {
    @ApiProperty({type: String, required: false })
    user: User

    @ApiProperty({type: String, required: false})
    identification_number: string

    @ApiProperty({type: String, required: false})
    name: string

    @ApiProperty({type: String, required: false})
    email: string

    @IsEnum(GenderEnum)
    @ApiProperty({type: String, enum: GenderEnum, required: false})
    gender: GenderEnum   

    @ApiProperty({type: String, required: false})
    category: string

    @ApiProperty({type: String, required: false})
    animal_photo: string

    @ApiProperty({type: String, required: false})
    birth_date: string

    @ApiProperty({type: String, required: false})
    race: string

    @ApiProperty({type: String, required: false})
    dentition: string

    @ApiProperty({type: String, required: false})
    observation: string

    @ApiProperty({type: String, required: false})
    attach_document: string
    
    @ApiProperty({type: String, required: false})
    father_name: string

    @IsEnum(AnimalProperty)
    @ApiProperty({type: String, enum: AnimalProperty, required: false})
    father_proper_animal: string

    @ApiProperty({type: String, required: false})
    mother_name: string

    @IsEnum(AnimalProperty)
    @ApiProperty({type: String, enum: AnimalProperty ,required: false})
    mother_proper_animal: AnimalProperty

    @ApiProperty({type: String, required: false})
    register_name: string

    @ApiProperty({type: String, required: false})
    register_number: string

    @ApiProperty({type: String, required: false})
    tattoo: string

    @ApiProperty({type: String, required: false})
    service: string 
}



