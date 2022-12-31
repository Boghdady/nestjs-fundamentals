import {
  Body,
  Controller,
  Delete,
  Get, HttpCode, HttpStatus,
  Param,
  Patch,
  Post, Res
} from "@nestjs/common";
import { CreateUserDto } from "./dtos/createUser.dto";


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
  create(@Body() userData: CreateUserDto) {
    return userData;
  }

 @Patch(":username")
  update(@Param("username") username: string, @Body() input) {
    return input;
  }

  @Delete(":username")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param("username", ) username: string) {
}
}
