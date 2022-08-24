import { Module } from '@nestjs/common';
import { SessionModule } from '../session/session.module';
import { WebTokenService } from './web-token.service';

@Module({
  providers: [WebTokenService],
  imports: [SessionModule],
  exports: [WebTokenService]
})
export class WebTokenModule {}
