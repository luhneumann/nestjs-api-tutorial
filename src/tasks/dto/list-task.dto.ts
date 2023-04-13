import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTaskDto } from './create-task.dto';

export class ListTaskDto extends PartialType(CreateTaskDto) {
    @ApiProperty({type: String, required: false})
    _id: string
}