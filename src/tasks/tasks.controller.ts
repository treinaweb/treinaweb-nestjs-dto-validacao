import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
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

  @Patch('update/:id')
  update(@Body() updateTaskDto: UpdateTaskDto, @Param('id') id: number) {
    return this.tasksService.update(id, updateTaskDto);
  }
}
