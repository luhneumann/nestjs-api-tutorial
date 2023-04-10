import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DewormingService } from './deworming.service';
import { CreateDewormingDto } from './dto/create-deworming.dto';
import { UpdateDewormingDto } from './dto/update-deworming.dto';

@Controller('deworming')
export class DewormingController {
  constructor(private readonly dewormingService: DewormingService) {}

  @Post()
  create(@Body() createDewormingDto: CreateDewormingDto) {
    return this.dewormingService.create(createDewormingDto);
  }

  @Get()
  findAll() {
    return this.dewormingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dewormingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDewormingDto: UpdateDewormingDto) {
    return this.dewormingService.update(+id, updateDewormingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dewormingService.remove(+id);
  }
}
