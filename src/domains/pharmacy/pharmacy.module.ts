import { Module } from '@nestjs/common';
import { PrescriptionsModule } from './prescriptions/prescriptions.module';
import { MedicationsModule } from './medications/medications.module';

@Module({
  imports: [PrescriptionsModule, MedicationsModule]
})
export class PharmacyModule {}
