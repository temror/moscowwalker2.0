import {Body, Controller, Get, Post, Req} from '@nestjs/common';
import {AuthService} from './auth.service';
import {ApiTags} from '@nestjs/swagger';
import {CreateUserDto} from "../users/dto/CreateUserDto";

@ApiTags('Авторизация')
@Controller('')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  login(@Body() dto: CreateUserDto) {
    return this.authService.login(dto);
  }

  @Get('/userInfo')
  getUserInfo(@Req() req: any){
    return this.authService.getUserInfo(req.headers.authorization)
  }

  @Get('/places')
  getUserPlaces(@Req() req: any){
    return this.authService.getUserPlaces(req.headers.authorization)
  }

  @Post('/auth')
  async registration(@Body() dto: CreateUserDto) {
    return await this.authService.registration(dto)
  }
}
