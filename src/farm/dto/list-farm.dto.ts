import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateFarmDto } from "./create-farm.dto";

export class ListFarmDto extends PartialType(CreateFarmDto) {
    @ApiProperty({ required: false, example: '543215468' })
    _id: string;
}