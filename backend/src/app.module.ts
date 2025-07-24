import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvConfigModule } from './common/config/env/env-config.module';
import { LibModule } from './common/lib/lib.module';
import { ClerkClientProvider } from './common/shared/ providers/clerk-client.provider';
import { ClerkAuthGuard } from './common/shared/guards/clerk-auth.guard';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [LibModule, AuthModule, EnvConfigModule, UserModule],
  controllers: [AppController],
  providers: [
    AppService,

    ClerkClientProvider,
    {
      provide: APP_GUARD,
      useClass: ClerkAuthGuard,
    },
  ],
})
export class AppModule {}
