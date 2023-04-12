import { Module } from '@nestjs/common';
import { ReprodutionTimeService } from './reprodution-time.service';
import { ReprodutionTimeController } from './reprodution-time.controller';

@Module({
  controllers: [ReprodutionTimeController],
  providers: [ReprodutionTimeService]
})
export class ReprodutionTimeModule {}
