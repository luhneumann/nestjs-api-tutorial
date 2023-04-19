import { ApiProperty } from "@nestjs/swagger";
import { IsEnum } from "class-validator";
import { Date } from "mongoose";
import { User } from "src/user/entities/user.entities";
import { FatherEnum } from "../entities/parturition.entity";

export class CreateParturitionDto {

    @ApiProperty({ type: String, required: false})
    user: User

    @ApiProperty({ type: String , required: false})
    date: Date

    @ApiProperty({ type: String, required: false})
    matrix: string

    @IsEnum(FatherEnum)
    @ApiProperty({ type: String, enum: FatherEnum, example:'Próprio', required: false})
    father_owner: FatherEnum

    @ApiProperty({ type: String, example:'Bode1', required: false})
    father_name: string

    @ApiProperty({ type: String, example:'duplo(gemelar)', required: false})
    birth: string
    
    @ApiProperty({ type: String, example:'bom', required: false})
    udder: string
    
    @ApiProperty({ type: String, example:'regular', required: false})
    mother_hability: string
    
    @ApiProperty({ type: String, example:'Normal', required: false})
    delivery_type: string
    
    @ApiProperty({ type: String, required: false})
    observation: string
}
