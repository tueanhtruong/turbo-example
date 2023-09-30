import { GenerateTokenService, JwtConfig } from '@commons/auth/jwt';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthModule, PrismaModule } from 'src/commons';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, GenerateTokenService, JwtService, JwtConfig],
  imports: [PrismaModule, AuthModule],
})
export class UsersModule {}
