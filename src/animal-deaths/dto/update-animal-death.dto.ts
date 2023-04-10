import { PartialType } from '@nestjs/swagger';
import { CreateAnimalDeathDto } from './create-animal-death.dto';

export class UpdateAnimalDeathDto extends PartialType(CreateAnimalDeathDto) {}
