import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateParturitionDto } from './create-parturition.dto';

export class UpdateParturitionDto extends PartialType(CreateParturitionDto) {
    
    @ApiProperty({ type: String, required: false})
    _id: string
}