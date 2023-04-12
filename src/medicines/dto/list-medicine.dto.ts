import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateMedicineDto } from "./create-medicine.dto";
import { Lot } from "src/lots/entities/lot.entity";
import { User } from "src/user/entities/user.entities";

export class ListMedicineDto extends PartialType(CreateMedicineDto) {
    @ApiProperty({type: String, required: false})
    _id: string       
}
