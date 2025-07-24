import { LoginCommand } from './login/login-command';
import { LoginHandler } from './login/login-handler';
import { RegistrationCommand } from './registration/registration-command';
import { RegistrationHandler } from './registration/registration-handler';
import { VerifyRegistrationHandler } from './verification/verify-registration-handler';

export const authCommands = [RegistrationCommand, LoginCommand];

export const authHandlers = [
  LoginHandler,
  RegistrationHandler,
  VerifyRegistrationHandler,
];
