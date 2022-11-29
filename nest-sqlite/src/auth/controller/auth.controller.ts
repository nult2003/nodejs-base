import { Body, Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../service/auth.service';
import { UserEntity } from '../user.entity';

@Controller('api/v1/auth/')
export class AuthController {
    constructor(private usersService: AuthService) { }
  
   @Post('signup')
   async signup(@Body() user: UserEntity): Promise<UserEntity> {
       return this.usersService.signup(user);
   }

   @UseGuards(AuthGuard('local'))
   @Post('login')
   async login(@Request() req) {
       return this.usersService.login(req.user)
   }
}
