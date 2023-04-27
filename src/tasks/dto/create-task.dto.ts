import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString({ message: 'Nome deve ser uma string' })
  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  nome: string;

  @IsString({ message: 'Descrição deve ser uma string' })
  @IsNotEmpty({ message: 'Descrição não pode ser vazio' })
  descricao: string;

  @IsBoolean({ message: 'Status deve ser do tipo boolean' })
  @IsNotEmpty({ message: 'Status não pode ser vazio' })
  status: boolean;
}
