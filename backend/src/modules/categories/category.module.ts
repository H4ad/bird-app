import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoryEntity } from '../../typeorm/entities/category.entity';
import { CategoryController } from './controllers/category.controller';
import { CategoryService } from './services/category.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CategoryEntity,
    ]),
  ],
  exports: [
    CategoryService,
  ],
  providers: [
    CategoryService,
  ],
  controllers: [
    CategoryController,
  ],
})
export class CategoryModule {}
