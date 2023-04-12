import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAbortionDto } from './create-abortion.dto';

export class UpdateAbortionDto extends PartialType(CreateAbortionDto) {
    @ApiProperty({ type: String, required: false})
    _id: string
}
