import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateReprodutionTimeDto } from './create-reprodution-time.dto';

export class ListReprodutionTimeDto extends PartialType(CreateReprodutionTimeDto) {
    @ApiProperty({type: String, required: false})
    _id: string
}
