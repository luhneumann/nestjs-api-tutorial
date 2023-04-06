import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateVaccinationDto } from './create-vaccination.dto';

export class UpdateVaccinationDto extends PartialType(CreateVaccinationDto) {
    
    @ApiProperty({ required: false, example: '85cd584151cd5' })
    _id: string    
}



   

