import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateFarmDto } from './create-farm.dto';

export class UpdateFarmDto extends PartialType(CreateFarmDto) {
    @ApiProperty({ required: false, example: '543215468'})
    _id: string;
}