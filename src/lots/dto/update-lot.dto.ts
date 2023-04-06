import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateLotDto } from './create-lot.dto';

export class UpdateLotDto extends PartialType(CreateLotDto) {
    @ApiProperty({ required: false, example: '85cd584151cd5' })
    _id: string
}
