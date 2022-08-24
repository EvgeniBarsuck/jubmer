import { Module } from '@nestjs/common';
import { SessionModule } from '../session/session.module';
import { UserModule } from '../user/user.module';
import { WebTokenModule } from '../web-token/web-token.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [UserModule, SessionModule, WebTokenModule],
  exports: [AuthService],
})
export class AuthModule {}
