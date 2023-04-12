import { Module } from '@nestjs/common';
import { DiseasesService } from './disease.service';
import { DiseaseController } from './disease.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Disease, DiseaseSchema } from './entities/disease.entity';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name: Disease.name,
        schema: DiseaseSchema
      }
    ])
  ],
  controllers: [DiseaseController],
  providers: [DiseasesService],
  exports:[DiseaseModule, DiseasesService]
})
export class DiseaseModule {}
