import { Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";


@Controller('users')
export class UsersController {
  @Get()
  find(): string[] {
    return ['Ahmed', 'khaled', 'fatma'];
  }

  @Get(":username")
  findOne(@Param("username") username: string): string {
    return username;
  }
  @Post()
  create(): string {
    return 'Create new users';
  }

 @Patch(":username")
  update(@Param("username") username: string): string {
    return username;
  }

  @Delete(":username")
  remove(@Param("username") username: string): string {
    return  username;
}
}
