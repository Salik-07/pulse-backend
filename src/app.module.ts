import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './core/auth/auth.module';
import { UsersModule } from './core/users/users.module';
import { SecurityModule } from './core/security/security.module';
import { PatientManagementModule } from './domains/patient-management/patient-management.module';
import { ClinicalOperationsModule } from './domains/clinical-operations/clinical-operations.module';
import { HealthcareProfessionalsModule } from './domains/healthcare-professionals/healthcare-professionals.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    SecurityModule,
    PatientManagementModule,
    ClinicalOperationsModule,
    HealthcareProfessionalsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
