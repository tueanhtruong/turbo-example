import {
  ApiKeyConfig,
  ApiKeyStrategy,
  apiKeyConfig,
  apiKeySchema,
} from '@commons/auth/apiKey';
import {
  GenerateTokenService,
  JwtConfig,
  JwtStrategy,
  jwtConstants,
  jwtSchema,
} from '@commons/auth/jwt';
import { DynamicModule, Module, Provider } from '@nestjs/common';
import {
  ConfigFactory,
  ConfigModule as NestConfigModule,
} from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import Joi from 'joi';

export interface AuthProvider {
  config: ConfigFactory;
  schema: unknown;
  providers: Provider[];
}
export const ApiKeyAuthProvider: AuthProvider = {
  config: apiKeyConfig,
  schema: apiKeySchema,
  providers: [ApiKeyStrategy, ApiKeyConfig],
};

export const JwtAuthProvider: AuthProvider = {
  config: jwtConstants,
  schema: jwtSchema,
  providers: [JwtStrategy, JwtConfig, GenerateTokenService],
};

const getConfigs = (auths: AuthProvider[]) => auths.map((x) => x.config);

const getSchemas = (auths: AuthProvider[]) =>
  auths.reduce((prev, curr) => {
    const schema = curr.schema;
    prev = Object.assign(prev, schema);
    return prev;
  }, {});

const getProviders = (auths: AuthProvider[]) =>
  auths.flatMap((x) => x.providers);

@Module({})
export class AuthModule {
  static register(options: { auths: AuthProvider[] }): DynamicModule {
    return {
      module: AuthModule,
      imports: [
        NestConfigModule.forRoot({
          isGlobal: true,
          load: getConfigs(options.auths),
          validationSchema: Joi.object(getSchemas(options.auths)),
          validationOptions: { abortEarly: true },
        }),
        JwtModule.register({}),
      ],
      providers: getProviders(options.auths),
      exports: [GenerateTokenService],
    };
  }
}

// import { Module } from '@nestjs/common';
// import { UsersModule } from 'src/modules';
// import { AuthService } from './auth.service';

// @Module({
//   imports: [UsersModule],
//   providers: [AuthService],
// })
// export class AuthModule {}
