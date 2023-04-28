import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'isFalse', async: false })
@Injectable()
export class IsFalse implements ValidatorConstraintInterface {
  validate(status: boolean): boolean | Promise<boolean> {
    return status === false ? true : false;
  }
  defaultMessage(): string {
    const error = { status: 'O campo status deve ser false' };
    throw new BadRequestException(error);
  }
}
