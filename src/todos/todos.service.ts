import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todosRepository: Repository<Todo>,
  ) {}

  // TODO: Create a DTO for CreateTodo
  create(createTodoDto: CreateTodoDto) {
    return 'This action adds a new todo';
  }

  findAll() {
    return `This action returns all todos`;
  }

  findOne(id: number) {
    return `This action returns the todo with ID: #${id}`;
  }

  // TODO: Create a DTO for UpdateTodo
  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates the todo with ID: #${id}`;
  }

  remove(id: number) {
    return `This action removes the todo with ID: #${id}`;
  }
}
