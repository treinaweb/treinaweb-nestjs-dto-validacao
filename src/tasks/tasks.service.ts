import { Injectable } from '@nestjs/common';
import { TasksRepository } from './tasks.repository';

@Injectable()
export class TasksService {
  constructor(private tasks: TasksRepository) {}
  create(request) {
    const { nome, descricao, status } = request;
    const task = this.tasks.repository.create({ nome, descricao, status });
    return this.tasks.repository.save(task);
  }

  findAll() {
    return this.tasks.repository.find();
  }

  findByNameAndStatus(nome: string, status: boolean) {
    return this.tasks.repository.findByNameAndStatus(nome, status);
  }

  findByStatus(status: boolean) {
    return this.tasks.repository.findByStatus(status);
  }
}
