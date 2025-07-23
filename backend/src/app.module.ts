import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvConfigModule } from './common/config/env/env-config.module';
import { LibModule } from './common/lib/lib.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [LibModule, AuthModule, EnvConfigModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
