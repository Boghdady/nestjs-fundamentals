import {
  Body,
  Controller,
  Delete,
  Get, HttpCode, HttpStatus,
  Param,
  Patch,
  Post, Res
} from "@nestjs/common";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";


@Controller('users')
export class UsersController {
  @Get()
  find(): string[] {
    return ['Ahmed', 'khaled', 'fatma'];
  }

  @Get(":username")
  findOne(@Param("username") username: string) {
    return { username, email: "ahmed@gmail.com"  };
  }
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return createUserDto;
  }

 @Patch(":username")
  update(@Param("username") username: string, @Body() updateUserDto: UpdateUserDto) {
    return updateUserDto;
  }

  @Delete(":username")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param("username", ) username: string) {}
}
