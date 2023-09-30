import { OmitType } from '@nestjs/swagger';
import { CreateUserDto } from './createUser';

export class LoginUserDto extends OmitType(CreateUserDto, ['displayName']) {}
