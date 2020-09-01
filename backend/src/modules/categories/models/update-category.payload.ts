//#region Imports

import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsHexColor, IsOptional, IsString, MaxLength } from 'class-validator';

//#endregion

/**
 * A classe que representa o payload enviado para atualizar uma categoria
 */
export class UpdateCategoryPayload {

  /**
   * O nome dessa categoria
   */
  @ApiPropertyOptional()
  @IsOptional()
  @IsString({ message: 'É necessário enviar um texto válido para o nome da categoria.' })
  @MaxLength(64, { message: 'O nome da categoria não pode exceder 64 caracteres.' })
  name?: string;

  /**
   * A cor dessa categoria
   */
  @ApiPropertyOptional()
  @IsOptional()
  @IsString({ message: 'É necessário enviar um texto válido para a cor dessa categoria.' })
  @IsHexColor({ message: 'É necessário enviar um HEX válido para a cor da categoria.' })
  color?: string;

}
