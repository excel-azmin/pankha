import { LoginHandler } from '../command/login/login-handler';
import { RegistrationHandler } from '../command/registration/registration-handler';
import { VerifyRegistrationHandler } from '../command/verification/verify-registration-handler';

export const authHandlers = [
  LoginHandler,
  RegistrationHandler,
  VerifyRegistrationHandler,
];
