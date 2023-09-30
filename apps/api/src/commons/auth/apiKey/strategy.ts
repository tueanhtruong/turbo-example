import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { timingSafeEqual } from 'crypto';
import Strategy from 'passport-headerapikey';
import { ApiKeyConfig } from './config';
import { ApiKeyStrategyName } from './guard';

@Injectable()
export class ApiKeyStrategy extends PassportStrategy(
  Strategy,
  ApiKeyStrategyName,
) {
  private readonly keyBin: Buffer;

  constructor(apiConfig: ApiKeyConfig) {
    super(
      { header: 'X-API-KEY', prefix: '' },
      true,
      async (
        apiKey: string,
        done: (
          error: Error | undefined | null,
          data: boolean,
        ) => Record<string, unknown>,
      ) => this.validate(apiKey, done),
    );

    this.keyBin = Buffer.from(apiConfig.apiKey);
  }

  public validate = (apiKey: string, done: any) => {
    const actualApiKeyBuffer = Buffer.from(apiKey);

    if (
      actualApiKeyBuffer.length !== this.keyBin.length ||
      !timingSafeEqual(actualApiKeyBuffer, this.keyBin)
    ) {
      done(new UnauthorizedException('API KEY is not valid.'), false);
    }

    return done(null, true);
  };
}
