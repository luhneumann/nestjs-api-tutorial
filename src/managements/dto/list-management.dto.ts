import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateManagementDto } from "./create-management.dto";
import { Medicine } from "src/medicines/entities/medicine.entity";

export class ListManagementDto extends PartialType(CreateManagementDto) {
    @ApiProperty({ required: false, example: '85cd584151cd5' })
    _id: string

    @ApiProperty({ type: Object, required: false, example: '85cd584151cd5' })
    medicine: Medicine

}
