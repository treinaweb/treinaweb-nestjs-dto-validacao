import { Injectable } from '@nestjs/common';
import { TasksRepository } from './tasks.repository';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ResponseTaskDto } from './dto/response-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(private tasks: TasksRepository) {}
  async create(createTaskDto: CreateTaskDto) {
    const { nome, descricao, status } = createTaskDto;
    const task = this.tasks.repository.create({ nome, descricao, status });
    await this.tasks.repository.save(task);
    return this.taskMapper(task);
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    const { nome, descricao, status } = updateTaskDto;
    const task = this.tasks.repository.create({ nome, descricao, status });
    return this.tasks.repository.update(id, task);
  }

  async findAll() {
    const arrayTasks = await this.tasks.repository.find();
    return arrayTasks.map((task) => {
      return this.taskMapper(task);
    });
  }

  findByNameAndStatus(nome: string, status: boolean) {
    return this.tasks.repository.findByNameAndStatus(nome, status);
  }

  findByStatus(status: boolean) {
    return this.tasks.repository.findByStatus(status);
  }

  private taskMapper(task: Task) {
    const response = new ResponseTaskDto();
    response.id = task.id;
    response.nome = task.nome;
    response.descricao = task.descricao;

    if (task.status === true) {
      response.status = 'CONCLUIDO';
    } else {
      response.status = 'EM ABERTO';
    }

    return response;
  }
}
