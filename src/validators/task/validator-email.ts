import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import { Task } from 'src/tasks/entities/task.entity';
import { Repository } from 'typeorm';

@ValidatorConstraint({ name: 'emailExiste', async: true })
@Injectable()
export class EmailExiste implements ValidatorConstraintInterface {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}
  async validate(email: string): Promise<boolean> {
    const task = await this.taskRepository.findOneBy({ email: email });
    return task ? false : true;
  }
  defaultMessage(): string {
    return 'Email já existe';
  }
}

export function IsEmailAreadyExist(validationOptions?: ValidationOptions) {
  return function (object: unknown, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: EmailExiste,
    });
  };
}
