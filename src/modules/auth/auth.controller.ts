import { Body, Controller, Post } from '@nestjs/common';
import { apiConfig } from 'src/config/api';
import { AuthService } from './auth.service';
import {
  SignInBodyInterface,
  SignUpBodyInterface,
} from './interfaces/auth-service-params.inteface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post(apiConfig.auth.signIn)
  async signIn(@Body() body: SignInBodyInterface) {
    return this.authService.signIn(body);
  }

  @Post(apiConfig.auth.signUp)
  async signUp(@Body() body: SignUpBodyInterface) {
    return this.authService.signUp(body);
  }
}
