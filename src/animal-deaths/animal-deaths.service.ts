import { Injectable } from '@nestjs/common';
import { CreateAnimalDeathDto } from './dto/create-animal-death.dto';
import { UpdateAnimalDeathDto } from './dto/update-animal-death.dto';

@Injectable()
export class AnimalDeathsService {
  create(createAnimalDeathDto: CreateAnimalDeathDto) {
    return 'This action adds a new animalDeath';
  }

  findAll() {
    return `This action returns all animalDeaths`;
  }

  findOne(id: number) {
    return `This action returns a #${id} animalDeath`;
  }

  update(id: number, updateAnimalDeathDto: UpdateAnimalDeathDto) {
    return `This action updates a #${id} animalDeath`;
  }

  remove(id: number) {
    return `This action removes a #${id} animalDeath`;
  }
}
