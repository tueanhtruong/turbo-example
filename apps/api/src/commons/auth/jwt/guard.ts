import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

export const jwtStrategyName = 'jwt-token';

@Injectable()
export class JwtAuthGuard extends AuthGuard(jwtStrategyName) {}
