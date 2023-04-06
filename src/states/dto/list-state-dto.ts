import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateStateDto } from "./create-state.dto";


export class ListStateDto extends PartialType(CreateStateDto) {
    @ApiProperty({ required: false, example: '543215468' })
    _id: string;
}