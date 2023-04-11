import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateDiseaseDto } from './create-disease.dto';

export class UpdateDiseaseDto extends PartialType(CreateDiseaseDto) {
   
    @ApiProperty({ required: false, example: '85cd584151cd5' })
    _id: string
}
