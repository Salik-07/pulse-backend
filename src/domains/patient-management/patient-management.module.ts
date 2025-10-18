import { Module } from '@nestjs/common';
import { PatientsModule } from './patients/patients.module';
import { InsuranceModule } from './insurance/insurance.module';

@Module({
  imports: [PatientsModule, InsuranceModule]
})
export class PatientManagementModule {}
