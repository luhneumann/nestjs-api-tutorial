import { Injectable } from '@nestjs/common';
import { CreateDewormingDto } from './dto/create-deworming.dto';
import { UpdateDewormingDto } from './dto/update-deworming.dto';

@Injectable()
export class DewormingService {
  create(createDewormingDto: CreateDewormingDto) {
    return 'This action adds a new deworming';
  }

  findAll() {
    return `This action returns all deworming`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deworming`;
  }

  update(id: number, updateDewormingDto: UpdateDewormingDto) {
    return `This action updates a #${id} deworming`;
  }

  remove(id: number) {
    return `This action removes a #${id} deworming`;
  }
}
