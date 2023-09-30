import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class GetUsersRequestQuery {
  @ApiPropertyOptional({
    description: 'user name of user account',
    example: 'tue_truong',
  })
  @IsOptional()
  @IsString()
  username?: string;
}

export class GetUsersQuery {
  constructor(public readonly option: GetUsersRequestQuery) {}
}
