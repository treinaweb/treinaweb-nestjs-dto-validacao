import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { TasksRepository } from './tasks.repository';
import { IsFalse } from 'src/validators/task/validator-is-false';
import { EmailExiste } from 'src/validators/task/validator-email';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TasksController],
  providers: [TasksService, TasksRepository, IsFalse, EmailExiste],
})
export class TasksModule {}
