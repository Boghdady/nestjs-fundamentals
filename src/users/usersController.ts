import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';

@Controller('users')
export class UsersController {
  private users: UserEntity[] = [];

  @Get()
  find(): UserEntity[] {
    return this.users;
  }

  @Get(':id')
  findOne(
    @Param('id', ParseUUIDPipe)
    id: string,
  ): UserEntity {
    console.log(typeof id);

    return this.users.find((user) => user.id === id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    const newUser: UserEntity = {
      ...createUserDto,
      id: uuid(),
    };
    this.users.push(newUser);

    return newUser;
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    // 1) find the element index that we want to update
    const index = this.users.findIndex((user) => user.id === id);
    // 2) update the element
    this.users[index] = { ...this.users[index], ...updateUserDto };

    return this.users[index];
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
