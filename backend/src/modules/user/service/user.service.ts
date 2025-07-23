import { Injectable } from '@nestjs/common';
import { BcryptService } from 'src/common/lib/bcrypt/bcypt.service';
import { JsonWebTokenService } from 'src/common/lib/jwt-token/jsonwebtoken.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class UserService {
  constructor(
    readonly userRepository: UserRepository,
    private readonly bcryptService: BcryptService,
    private readonly jsonWebTokenService: JsonWebTokenService,
  ) {}

  async createUser(createUser: CreateUserDto) {
    return createUser;
  }
}
