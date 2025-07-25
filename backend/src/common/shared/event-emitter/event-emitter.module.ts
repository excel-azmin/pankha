import { forwardRef, Module } from '@nestjs/common';
import { AuthModule } from 'src/modules/auth/auth.module';
import { RequestEventEmitter } from './event-emitter.service';
import { EventListener } from './event-listener.service';

@Module({
  imports: [forwardRef(() => AuthModule)],
  providers: [RequestEventEmitter, EventListener],
  exports: [RequestEventEmitter],
})
export class RequestEventEmitterModule {}
