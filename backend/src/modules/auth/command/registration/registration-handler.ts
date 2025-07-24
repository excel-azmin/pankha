import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { JsonWebTokenService } from 'src/common/lib/jwt-token/jsonwebtoken.service';
import { RedisCacheService } from 'src/common/shared/cache/redis-cache.service';
import { UserService } from 'src/modules/user/service/user.service';
import { RegistrationCommand } from './registration-command';

@CommandHandler(RegistrationCommand)
export class RegistrationHandler
  implements ICommandHandler<RegistrationCommand>
{
  constructor(
    private readonly jsonWebTokenService: JsonWebTokenService,
    private readonly redisCacheService: RedisCacheService,
    private readonly userService: UserService,
  ) {}
  async execute(command: RegistrationCommand): Promise<any> {
    const { firstName, lastName, email } = command.registrationAuthDto;
  }
}
