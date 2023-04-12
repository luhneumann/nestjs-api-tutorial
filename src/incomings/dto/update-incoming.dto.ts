import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateIncomingDto } from './create-incoming.dto';

export class UpdateIncomingDto extends PartialType(CreateIncomingDto) {
    @ApiProperty({type: String, required: false})
    _id: string
}
