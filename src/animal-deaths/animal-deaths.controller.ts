import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnimalDeathsService } from './animal-deaths.service';
import { CreateAnimalDeathDto } from './dto/create-animal-death.dto';
import { UpdateAnimalDeathDto } from './dto/update-animal-death.dto';

@Controller('animal-deaths')
export class AnimalDeathsController {
  constructor(private readonly animalDeathsService: AnimalDeathsService) {}

  @Post()
  create(@Body() createAnimalDeathDto: CreateAnimalDeathDto) {
    return this.animalDeathsService.create(createAnimalDeathDto);
  }

  @Get()
  findAll() {
    return this.animalDeathsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animalDeathsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnimalDeathDto: UpdateAnimalDeathDto) {
    return this.animalDeathsService.update(+id, updateAnimalDeathDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animalDeathsService.remove(+id);
  }
}
