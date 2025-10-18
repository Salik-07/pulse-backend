import { Module } from '@nestjs/common';
import { AppointmentsModule } from './appointments/appointments.module';
import { MedicalRecordsModule } from './medical-records/medical-records.module';
import { LabServicesModule } from './lab-services/lab-services.module';

@Module({
  imports: [AppointmentsModule, MedicalRecordsModule, LabServicesModule]
})
export class ClinicalOperationsModule {}
