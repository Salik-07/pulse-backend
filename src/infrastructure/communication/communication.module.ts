import { Module } from '@nestjs/common';
import { NotificationsModule } from './notifications/notifications.module';
import { MessagingModule } from './messaging/messaging.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [NotificationsModule, MessagingModule, EmailModule]
})
export class CommunicationModule {}
