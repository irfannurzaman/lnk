import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: { username: string; password: string }) {
    console.log("username");
    return this.userService.create(createUserDto.username, createUserDto.password);
  }
}
