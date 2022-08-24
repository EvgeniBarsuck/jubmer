import { Injectable } from '@nestjs/common';
import {
    AddSessionPropsInterface,
  CheckIsExpiredPropsInterface,
  GetSessionPropsInterface,
} from './intefaces/session-service-params';
import { Session } from './intefaces/session';
import { SessionStorage } from './storage/session';
import { SessionServiceInterface } from './intefaces/session-service';
import { isExpiredDate } from './helpers/is-expired-date';
import { envConfig } from 'src/config/env';

@Injectable()
export class SessionService implements SessionServiceInterface {
  addSession({ accessToken, userUUID }: AddSessionPropsInterface): void {
    const expiredTime = new Date(new Date().getTime() + envConfig.expiredTime);

    SessionStorage.usersSession[userUUID] = {
        userUUID,
        accessToken,
        expiredTime,
    }
  }

  getSession({ userUUID }: GetSessionPropsInterface): Session {
    const session = SessionStorage.usersSession[userUUID]

    if (!session) {
      return null;
    }

    return session;
  }

  checkIsExpired({ userUUID }: CheckIsExpiredPropsInterface): boolean {
    const session = SessionStorage.usersSession[userUUID];

    if (!session) {
      return true;
    }

    const isExpired = isExpiredDate(session.expiredTime);

    return isExpired;
  }
}
