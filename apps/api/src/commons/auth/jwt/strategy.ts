import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtConfig } from './config';
import { UserInfo } from './generateToken.service';
import { jwtStrategyName } from './guard';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, jwtStrategyName) {
  constructor(jwtConfig: JwtConfig) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConfig.jwtSecret,
    });
  }

  async validate(payload: UserInfo) {
    return payload;
  }
}
