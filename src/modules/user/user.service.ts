import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { UserInterface } from './interfaces/user';
import { UserServiceInterface } from './interfaces/user-service';
import { UserStorage } from './storage/users';
import * as crypto from 'crypto-js';
import { envConfig } from 'src/config/env';
import { v4 as uuidv4 } from 'uuid';
import { AddSocketIdPropsInterface, AddUserPropsInterface, VerifyUserPropsInterface } from './interfaces/user-service-params';

@Injectable()
export class UserService implements UserServiceInterface {
  verifyUser(props: VerifyUserPropsInterface): UserInterface {
    const user = UserStorage.users[props.name];

    if (!user) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const decodedPassword =  crypto.enc.Base64.parse(crypto.hmacSHA512.decode(
      user.password,
      envConfig.secretKey,
    ));

    if (props.password !== decodedPassword.password) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return user;
  }

  addUser ({ name, password }: AddUserPropsInterface): void {
    console.log(UserStorage)
    const checkIfExists = UserStorage.users[name];
    
    if (checkIfExists) {
      throw new HttpException('User is existed', HttpStatus.BAD_REQUEST);
    }
    
    const encodedPassword = crypto.enc.Base64.stringify(crypto.HmacSHA512(password, envConfig.secretKey));

    UserStorage.users[name] = { 
        name,
        password: encodedPassword,
        userUUID: uuidv4(),
        socketId: null,
    }
  };

  addSocketId ({ socketId, name }: AddSocketIdPropsInterface) {
    const user = UserStorage.users[name];

    if (!user) {
      return UserStorage.users.test_user;
    }

    user.socketId = socketId;
  }
}
