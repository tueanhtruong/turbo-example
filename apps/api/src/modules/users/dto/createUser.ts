import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'user name of user account',
    example: 'tue_truong',
  })
  @IsString()
  @MaxLength(50)
  username: string;

  @ApiProperty({
    description: 'display name of user account',
    example: 'Tue Truong',
  })
  @IsString()
  @MaxLength(50)
  displayName: string;
}
