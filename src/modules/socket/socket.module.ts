import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { WebTokenModule } from '../web-token/web-token.module';
import { WebTokenService } from '../web-token/web-token.service';
import { SocketGateway } from './socket.gateway';

@Module({
  providers: [SocketGateway],
  imports: [WebTokenModule, UserModule],
})
export class SocketModule {}
