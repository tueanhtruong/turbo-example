import { Inject, Injectable } from '@nestjs/common';
import { ConfigType, registerAs } from '@nestjs/config';
import Joi from 'joi';

export const jwtSchema = {
  JWT_SECRET: Joi.string().min(16).max(64).alphanum().required(),
};
export const jwtConstants = registerAs('jwtSecret', () => ({
  jwtSecret: process.env.JWT_SECRET,
}));

@Injectable()
export class JwtConfig {
  public readonly jwtSecret: string;

  constructor(
    @Inject(jwtConstants.KEY)
    config: ConfigType<typeof jwtConstants>,
  ) {
    if (config.jwtSecret === undefined) {
      throw new Error('jwtSecret is required');
    }

    this.jwtSecret = config.jwtSecret!;
  }
}
