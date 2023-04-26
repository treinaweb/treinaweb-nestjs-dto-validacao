import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';

export class TasksRepository {
  constructor(
    @InjectRepository(Task) private tasksRepository: Repository<Task>,
  ) {}

  repository = this.tasksRepository.extend({
    findByNameAndStatus(nome: string, status: boolean) {
      return this.createQueryBuilder('task')
        .select('task')
        .where('task.nome = :nome', { nome: nome })
        .andWhere('task.status = :status', { status: status })
        .getMany();
    },
    findByStatus(status: boolean) {
      return this.createQueryBuilder('task')
        .select('task')
        .where('task.status = :status', { status: status })
        .getMany();
    },
  });
}
