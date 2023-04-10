import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateEventDto } from './create-event.dto';

export class ListEventDto extends PartialType(CreateEventDto) {    
    @ApiProperty({ type: String, required: false })
    _id: string
}