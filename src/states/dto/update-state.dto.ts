import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateStateDto } from "./create-state.dto";


export class UpdateStatesDto extends PartialType(CreateStateDto) {
    @ApiProperty({ required: false, example: '543215468'})
    _id: string;
}