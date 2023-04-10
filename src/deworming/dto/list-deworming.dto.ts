import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateDewormingDto } from "./create-deworming.dto";

export class ListDewormingDto extends PartialType (CreateDewormingDto)  {
    
    @ApiProperty({ type: String, required: false })
    _id: string
}