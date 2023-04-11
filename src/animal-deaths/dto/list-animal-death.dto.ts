import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateAnimalDeathDto } from "./create-animal-death.dto";

export class ListAnimalDeathDto extends PartialType(CreateAnimalDeathDto) {
    @ApiProperty({ type: String, required: false})
    _id: string
}