import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateGestationDto } from './create-gestation.dto';

export class ListGestationDto extends PartialType(CreateGestationDto) {
    @ApiProperty({type: String, required: false})
    _id: string
}