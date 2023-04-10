import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateMedicineDto } from './create-medicine.dto';

export class UpdateMedicineDto extends PartialType(CreateMedicineDto) {
    @ApiProperty({type: String, required: false})
    _id: string
}
