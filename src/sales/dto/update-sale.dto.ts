import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateSaleDto } from './create-sale.dto';

export class UpdateSaleDto extends PartialType(CreateSaleDto) {
    @ApiProperty({ type: String, required: false})
    _id: string
}
