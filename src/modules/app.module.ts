import { Module } from '@nestjs/common';
import { WebTokenModule } from './web-token/web-token.module';
import { SessionModule } from './session/session.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { SocketModule } from './socket/socket.module';

@Module({
  controllers: [],
  exports: [],
  imports: [
    WebTokenModule,
    SessionModule,
    UserModule,
    SocketModule,
    AuthModule,
  ],
  providers: [],
})
export class AppModule {}
