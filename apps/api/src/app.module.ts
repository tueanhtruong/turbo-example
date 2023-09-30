import {
  ApiKeyAuthProvider,
  AuthModule,
  JwtAuthProvider,
  PrismaModule,
} from '@commons';
import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { UsersModule } from 'src/modules';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    PrismaModule,
    LoggerModule.forRoot(),
    UsersModule,
    AuthModule.register({ auths: [ApiKeyAuthProvider, JwtAuthProvider] }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
