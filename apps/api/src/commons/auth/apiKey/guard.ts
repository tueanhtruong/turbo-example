import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

export const ApiKeyStrategyName = 'api-key';

@Injectable()
export class ApiKeyAuthGuard extends AuthGuard(ApiKeyStrategyName) {}
