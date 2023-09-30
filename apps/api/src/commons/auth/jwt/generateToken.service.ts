import { JwtConfig } from '@commons/auth/jwt/config';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

export type UserInfo = { username: string; id: string };

@Injectable()
export class GenerateTokenService {
  constructor(private jwtService: JwtService, private jwtConfig: JwtConfig) {}

  async gen(user: UserInfo) {
    const payload = { username: user.username, id: user.id };
    return {
      access_token: this.jwtService.sign(payload, {
        secret: this.jwtConfig.jwtSecret,
        expiresIn: '1d',
      }),
    };
  }
}
