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
  Req,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';
import { UserService } from './users.service';
import { retry } from 'rxjs';
import { UserResponseDto } from './dtos/user-response.dto';
import { Request } from 'express';
import { Public } from '../common/decorators/public.decorator';
import { ConfigService } from '@nestjs/config';

interface EnvironmentVariables {
  PORT: number;
  EMAIL: string;
}

@Controller('users')
export class UsersController {
  constructor(
    private readonly configService: ConfigService<EnvironmentVariables>,
    private readonly userService: UserService,
  ) {
    console.log(this.configService.get('EMAIL', { infer: true }));
  }

  @Public()
  @Get()
  async find(@Req() req: Request): Promise<UserEntity[]> {
    return this.userService.findUsers();
  }

  @Public()
  @Get(':id')
  findOne(
    @Param('id', ParseUUIDPipe)
    id: string,
  ): UserResponseDto {
    return this.userService.findUserById(id);
  }

  @Post()
  create(
    @Body()
    createUserDto: CreateUserDto,
  ): UserResponseDto {
    return this.userService.createUser(createUserDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body()
    updateUserDto: UpdateUserDto,
  ) {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    this.userService.deleteUser(id);
  }
}
