import { ApiProperty } from "@nestjs/swagger";
import { Management } from "src/managements/entities/management.entity";
import { User } from "src/user/entities/user.entities";

export class CreateVaccinationDto {
    @ApiProperty({ type: String, required: false })
    user: User

    @ApiProperty({type: String, required: false})
    vaccine: string

    @ApiProperty({type: String, required: false})
    dose: string

    @ApiProperty({ type: String, required: false})
    management: Management
}
