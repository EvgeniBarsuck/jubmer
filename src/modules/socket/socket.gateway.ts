import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  } from '@nestjs/websockets';
  import { Logger } from '@nestjs/common';
  import { Socket, Server } from 'socket.io';
import { envConfig } from 'src/config/env';
import { UserService } from '../user/user.service';
import { WebTokenService } from '../web-token/web-token.service';
  
  @WebSocketGateway(envConfig.SOCKET_PORT)
  export class SocketGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    constructor (private readonly userService: UserService, private readonly webTokenService: WebTokenService) {}

    @WebSocketServer() 
    server: Server;
  
    private logger: Logger = new Logger('SocketGateway');
    
    @SubscribeMessage('create-room')
    handleMessage(client: Socket, payload: { sender }): void {
      // this.server.emit('msgToClient', payload);
    }
  
    afterInit(server: Server) {
      this.logger.log('Init');
    }
  
    handleDisconnect(client: Socket) {
      this.logger.log(`Client disconnected: ${client.id}`);
    }
  
    handleConnection(client: Socket, ...args: any[]) {
      this.logger.log(`Client connected: ${client.id}`);
    }
  }