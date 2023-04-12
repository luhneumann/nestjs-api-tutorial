import { Injectable } from '@nestjs/common';
import { CreateReprodutionTimeDto } from './dto/create-reprodution-time.dto';
import { UpdateReprodutionTimeDto } from './dto/update-reprodution-time.dto';

@Injectable()
export class ReprodutionTimeService {
  create(createReprodutionTimeDto: CreateReprodutionTimeDto) {
    return 'This action adds a new reprodutionTime';
  }

  findAll() {
    return `This action returns all reprodutionTime`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reprodutionTime`;
  }

  update(id: number, updateReprodutionTimeDto: UpdateReprodutionTimeDto) {
    return `This action updates a #${id} reprodutionTime`;
  }

  remove(id: number) {
    return `This action removes a #${id} reprodutionTime`;
  }
}
