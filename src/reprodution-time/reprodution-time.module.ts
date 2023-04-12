import { Module } from '@nestjs/common';
import { ReprodutionTimeService } from './reprodution-time.service';
import { ReprodutionTimeController } from './reprodution-time.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ReprodutionTime, ReprodutionTimeSchema } from './entities/reprodution-time.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: ReprodutionTime.name,
        schema: ReprodutionTimeSchema
      }
    ]),
  ],
  controllers: [ReprodutionTimeController],
  providers: [ReprodutionTimeService],
  exports: [ReprodutionTimeService, ReprodutionTimeModule]
})
export class ReprodutionTimeModule {}
