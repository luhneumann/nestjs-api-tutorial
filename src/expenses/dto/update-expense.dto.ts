import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateExpenseDto } from './create-expense.dto';

export class UpdateExpenseDto extends PartialType(CreateExpenseDto) {
    @ApiProperty({type: String, required: false})
    _id: string
}
