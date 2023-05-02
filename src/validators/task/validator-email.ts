import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
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
