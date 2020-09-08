//#region Imports

import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsHexColor, IsInt, IsString, MaxLength } from 'class-validator';

//#endregion

/**
 * A classe que representa o payload enviado para criar um novo comentário para uma categoria
 */
export class CreateCommentPayload {

  /**
   * A mensagem desse comentário
   */
  @ApiProperty()
  @IsDefined({ message: 'É necessário enviar a mensagem do comentário que você está criando.' })
  @IsString({ message: 'A mensagem do seu comentário precisa ser um texto válido.' })
  @MaxLength(1024, { message: 'A mensagem do comentário não pode exceder 1024 caracteres.' })
  public message: string;

  /**
   * O nome do autor desse comentário
   */
  @ApiProperty()
  @IsDefined({ message: 'É necessário enviar o nome de quem está criando esse comentário.' })
  @IsString({ message: 'O nome do criador precisa ser um texto válido.' })
  @MaxLength(64, { message: 'O nome do criador do comentário não pode exceder 64 caracteres.' })
  public personName: string;

  /**
   * O emoji que representa esse autor
   */
  @ApiProperty()
  @IsDefined({ message: 'É necessário enviar o emoji de quem está criando esse comentário.' })
  @IsString({ message: 'O emoji do criador precisa ser um texto válido.' })
  @MaxLength(124, { message: 'O emoji do criador do comentário não pode exceder 124 caracteres.' })
  public personEmoji: string;

  /**
   * A cor de fundo da foto dessa pessoa
   */
  @ApiProperty()
  @IsDefined({ message: 'É necessário enviar a cor de fundo da imagem de quem está criando esse comentário.' })
  @IsString({ message: 'A cor de fundo da imagem do criador precisa ser um texto válido.' })
  @MaxLength(7, { message: 'A cor de fundo da imagem do comentário não pode exceder 7 caracteres.' })
  @IsHexColor({ message: 'É necessário enviar um HEX válido para a cor de fundo da imagem do criador do comentário.' })
  public personColor: string;

  /**
   * A identificação da categoria
   */
  @ApiProperty()
  @IsDefined({ message: 'É necessário enviar a identificação da categoria na qual está sendo criado esse comentário.' })
  @IsInt({ message: 'É necessário que a identificação da categoria seja um número inteiro válido.' })
  public categoryId: number;

}
