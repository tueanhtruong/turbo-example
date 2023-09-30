import { Inject, Injectable } from '@nestjs/common';
import { ConfigType, registerAs } from '@nestjs/config';
import Joi from 'joi';

export const apiKeySchema = {
  API_KEY: Joi.string().min(16).max(64).alphanum().required(),
};

export const apiKeyConfig = registerAs('apiKey', () => ({
  apiKey: process.env.API_KEY,
}));

@Injectable()
export class ApiKeyConfig {
  public readonly apiKey: string;

  constructor(
    @Inject(apiKeyConfig.KEY)
    config: ConfigType<typeof apiKeyConfig>,
  ) {
    if (config.apiKey === undefined) {
      throw new Error('apiKey is required');
    }

    this.apiKey = config.apiKey!;
  }
}
