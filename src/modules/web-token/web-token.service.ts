import { Injectable } from '@nestjs/common';
import { envConfig } from 'src/config/env';
import { WebTokenServiceInterface } from './interfaces/web-token-service';
import {
  GenerateWebTokenPropsInterface,
  GetUserInfoFromTokenPropsInterface,
  GetUserInfoFromTokenResultInterface,
} from './interfaces/web-token-service-params';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';
import { WebTokenDecodedInterface } from './interfaces/web-token';
import { SessionService } from '../session/session.service';

@Injectable()
export class WebTokenService implements WebTokenServiceInterface {
  constructor(private readonly sessionService: SessionService) {}

  generateWebToken({ name, userUUID }: GenerateWebTokenPropsInterface): string {
    const expiredDate = new Date(new Date().getTime() + envConfig.expiredTime);

    const payload: WebTokenDecodedInterface = {
      name,
      userUUID,
      expiredDate,
    };

    const unsignedToken = Base64(payload);

    const accessToken = hmacSHA512(unsignedToken, envConfig.secretKey);

    return accessToken;
  }

  getUserInfoFromToken({
    accessToken,
  }: GetUserInfoFromTokenPropsInterface): GetUserInfoFromTokenResultInterface {
    const base64Token: string = hmacSHA512.decode(
      accessToken,
      envConfig.secretKey,
    );
    const decodedToken: WebTokenDecodedInterface = Base64.decode(base64Token);

    const isExpired = this.sessionService.checkIsExpired({
      userUUID: decodedToken.userUUID,
    });

    if (isExpired) {
        return null
    }

    return {
        name: decodedToken.name,
        userUUID: decodedToken.userUUID,
    }
  }
}
