import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() request) {
    return this.tasksService.create(request);
  }

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get('find/:nome/:status')
  findByNameAndStatus(
    @Param('nome') nome: string,
    @Param('status') status: boolean,
  ) {
    return this.tasksService.findByNameAndStatus(nome, status);
  }

  @Get('status/:status')
  findByStatus(@Param('status') status: boolean) {
    return this.tasksService.findByStatus(status);
  }
}
