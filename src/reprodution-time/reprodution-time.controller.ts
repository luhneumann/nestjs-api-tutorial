import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReprodutionTimeService } from './reprodution-time.service';
import { CreateReprodutionTimeDto } from './dto/create-reprodution-time.dto';
import { UpdateReprodutionTimeDto } from './dto/update-reprodution-time.dto';

@Controller('reprodution-time')
export class ReprodutionTimeController {
  constructor(private readonly reprodutionTimeService: ReprodutionTimeService) {}

  @Post()
  create(@Body() createReprodutionTimeDto: CreateReprodutionTimeDto) {
    return this.reprodutionTimeService.create(createReprodutionTimeDto);
  }

  @Get()
  findAll() {
    return this.reprodutionTimeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reprodutionTimeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReprodutionTimeDto: UpdateReprodutionTimeDto) {
    return this.reprodutionTimeService.update(+id, updateReprodutionTimeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reprodutionTimeService.remove(+id);
  }
}
