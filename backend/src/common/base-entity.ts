//#region Imports

import { ApiProperty } from '@nestjs/swagger';
import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

//#endregion

/**
 * A classe base para toda entidade
 */
export class BaseEntity {

  /**
   * A identificação da entidade
   */
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * A data de quando foi criada essa entidade
   */
  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  /**
   * A data de quando foi atualizado pela ultima vez
   */
  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date;

}
