import { User } from '@clerk/backend';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ApiTags } from '@nestjs/swagger';
import { CurrentUser } from 'src/common/shared/decorator/current-user.decorator';
import { ClerkAuthGuard } from 'src/common/shared/guards/clerk-auth.guard';
import { RegistrationCommand } from '../command/registration/registration-command';

@Controller('auth')
@ApiTags('Authentication and Authorization')
export class AuthController {
  constructor(private readonly commandBus: CommandBus) {}

  @UseGuards(ClerkAuthGuard)
  @Get('v1/sync')
  async authClerk(@CurrentUser() user: User) {
    console.log('Syncing user with backend...', user);
    return await this.commandBus.execute(new RegistrationCommand(user));
  }
}
