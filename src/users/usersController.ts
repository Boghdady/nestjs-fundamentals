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
  SetMetadata,
  UseFilters,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';
import { UserService } from './users.service';
import { retry } from 'rxjs';
import { UserResponseDto } from './dtos/user-response.dto';
import { Request } from 'express';
import { CustomExceptionFilter } from '../common/filters/custom-exception.filter';
import { AuthGuard } from '../common/guards/auth.guard';
import { Public } from '../common/decorators/public.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  // @SetMetadata('IS_Public', true)
  @Public()
  @Get()
  async find(@Req() req: Request): Promise<UserEntity[]> {
    // delay 5 seconds
    // console.log(req.body);

    // await new Promise((resolve) => setTimeout(resolve, 5000));
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

  // @UseGuards(AuthGuard)
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
