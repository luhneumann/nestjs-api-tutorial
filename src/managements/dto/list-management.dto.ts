import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateManagementDto } from "./create-management.dto";

export class ListManagementDto extends PartialType(CreateManagementDto) {
    @ApiProperty({ required: false, example: '85cd584151cd5' })
    _id: string
}
