import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateProfessionDto } from "./create-professions.dto";

export class ListProfessionDto extends PartialType(CreateProfessionDto) {
    @ApiProperty({ required: false, example: '543215468'})
    _id: string;
}