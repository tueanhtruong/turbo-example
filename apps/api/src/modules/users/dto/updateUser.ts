import { OmitType } from '@nestjs/swagger';
import { CreateUserDto } from './createUser';

export class UpdateUserDto extends OmitType(CreateUserDto, ['username']) {}
