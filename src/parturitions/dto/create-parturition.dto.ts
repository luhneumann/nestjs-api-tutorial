import { ApiProperty } from "@nestjs/swagger";

export class CreateParturitionDto {
    @ApiProperty({ type: String, example: '10/04/2023' , required: false})
    date: Date

    @ApiProperty({ type: String, required: false})
    matrix: string

    @ApiProperty({ type: String, example:'Próprio', required: false})
    father_property: string

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
