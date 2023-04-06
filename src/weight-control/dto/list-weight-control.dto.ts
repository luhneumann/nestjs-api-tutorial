import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateWeightControlDto } from './create-weight-control.dto';

export class ListWeightControlDto extends PartialType(CreateWeightControlDto) {
   
    @ApiProperty({ required: false, example: '85cd584151cd5' })
    _id: string    
}