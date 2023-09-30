import { GenerateTokenService, UserInfo } from '@commons/auth/jwt';
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/commons';
import {
  CreateUserDto,
  GetUsersRequestQuery,
  LoginUserDto,
  UpdateUserDto,
} from './dto';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private tokenService: GenerateTokenService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const [userWithUserName] = await this.findAll({
      username: createUserDto.username,
    });

    if (userWithUserName)
      throw new BadRequestException(
        `A user with the user name ${userWithUserName.username} already exists.`,
      );
    const user = await this.prisma.user.create({
      data: createUserDto,
    });
    return {
      id: user.id,
    };
  }

  async findAll(query: GetUsersRequestQuery) {
    const { username } = query;
    const users = await this.prisma.user.findMany({
      where: {
        username: username,
      },
    });
    return users;
  }

  async login(payload: LoginUserDto) {
    const validUser = await this.prisma.user.findFirst({
      where: {
        username: payload.username,
      },
    });

    if (!validUser) throw new UnauthorizedException(`Username is not valid.`);

    const tokens = await this.tokenService.gen({
      username: validUser.username,
      id: validUser.id,
    });
    return tokens;
  }

  async findMe(user: UserInfo) {
    const validUser = await this.prisma.user.findFirst({
      where: {
        username: user.username,
      },
    });

    if (!validUser) throw new UnauthorizedException(`User is not exists.`);
    return validUser;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, _updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
