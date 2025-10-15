import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './core/auth/auth.module';
import { UsersModule } from './core/users/users.module';
import { SecurityModule } from './core/security/security.module';

@Module({
  imports: [AuthModule, UsersModule, SecurityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
