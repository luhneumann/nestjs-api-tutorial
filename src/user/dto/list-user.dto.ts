import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateUserDto } from "./create-user.dto";

export class ListUserDto extends PartialType(CreateUserDto) {
    @ApiProperty({ required: false, example: '543215468'})
    _id: string;

    @ApiProperty({
        type: String,
        required: true,
        example: '4cab2a2db6a3c31b01d804def28276e6',
      })
      password: string;
}
