import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { JsonWebTokenService } from 'src/common/lib/jwt-token/jsonwebtoken.service';
import { UserService } from 'src/modules/user/service/user.service';
import { LoginCommand } from './login-command';

@CommandHandler(LoginCommand)
export class LoginHandler implements ICommandHandler<LoginCommand> {
  constructor(
    private readonly userService: UserService,
    private readonly jsonWebTokenService: JsonWebTokenService,
  ) {}
  async execute(command: LoginCommand): Promise<any> {
    const { email, password } = command.loginAuthDto;
  }
}
