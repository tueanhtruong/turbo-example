import {
  ApiKeyAuthGuard,
  ApiKeyTag,
  JwtAuthGuard,
  ReqUser,
  ResponseInterceptor,
  UserInfo,
} from '@commons';
import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { CreateUserDto, GetUsersRequestQuery, LoginUserDto } from './dto';
import { UsersService } from './users.service';

@ApiTags('Users')
@UseInterceptors(ResponseInterceptor)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post('/login')
  login(@Body() payload: LoginUserDto) {
    return this.usersService.login(payload);
  }

  @ApiSecurity(ApiKeyTag)
  @UseGuards(ApiKeyAuthGuard)
  @Get()
  findAll(@Query() query: GetUsersRequestQuery) {
    return this.usersService.findAll(query);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('/me')
  findMe(@ReqUser() user: UserInfo) {
    return this.usersService.findMe(user);
  }

  // @Put(':id')
  // updateOne(@Param('id') id: string, @Body() _updateUserDto: UpdateUserDto) {
  //   return this.usersService.findOne(+id);
  // }
}
