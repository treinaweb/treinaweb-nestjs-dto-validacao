import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsString,
  Validate,
} from 'class-validator';
import { EmailExiste } from 'src/validators/task/validator-email';
import { IsFalse } from 'src/validators/task/validator-is-false';

export class CreateTaskDto {
  @IsString({ message: 'Nome deve ser uma string' })
  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  nome: string;

  @IsString({ message: 'Descrição deve ser uma string' })
  @IsNotEmpty({ message: 'Descrição não pode ser vazio' })
  descricao: string;

  @IsBoolean({ message: 'Status deve ser do tipo boolean' })
  @IsNotEmpty({ message: 'Status não pode ser vazio' })
  @Validate(IsFalse)
  status: boolean;

  @IsEmail()
  @Validate(EmailExiste)
  email: string;
}
