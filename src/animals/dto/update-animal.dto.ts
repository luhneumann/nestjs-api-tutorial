import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAnimalDto } from './create-animal.dto';

export class UpdateAnimalDto extends PartialType(CreateAnimalDto) {
    @ApiProperty({ required: false, example: '543215468'})
    _id: string;
}
