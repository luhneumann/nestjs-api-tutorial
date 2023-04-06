import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateCityDto } from "./create-city.dto";


export class ListCityDto extends PartialType(CreateCityDto) {
    @ApiProperty({ required: false, example: '543215468' })
    _id: string;
}