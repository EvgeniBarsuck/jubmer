import { Injectable } from '@nestjs/common';
import { verify } from 'crypto';
import { SessionServiceInterface } from '../session/intefaces/session-service';
import { SessionService } from '../session/session.service';
import { UserServiceInterface } from '../user/interfaces/user-service';
import { UserService } from '../user/user.service';
import { WebTokenServiceInterface } from '../web-token/interfaces/web-token-service';
import { WebTokenService } from '../web-token/web-token.service';
import { AuthServiceInterface } from './interfaces/auth-service';
import {
  SignInServiceInputInterface,
  SignUpServiceInputInterface,
} from './interfaces/auth-service-params.inteface';

@Injectable()
export class AuthService implements AuthServiceInterface {
  constructor(
    private readonly userService: UserService,
    private readonly sessionService: SessionService,
    private readonly webTokenService: WebTokenService,
  ) {}

  signIn({ name, password }: SignInServiceInputInterface) {
    const userInfo = this.userService.verifyUser({
      name,
      password,
    });
    
    const token = this.webTokenService.generateWebToken({
      name: userInfo.name,
      userUUID: userInfo.userUUID,
    });

    this.sessionService.addSession({
      accessToken: token,
      userUUID: userInfo.userUUID,
    });

    return token;
  }

  signUp({ name, password }: SignUpServiceInputInterface) {
    this.userService.addUser({ name, password });
  }
}
