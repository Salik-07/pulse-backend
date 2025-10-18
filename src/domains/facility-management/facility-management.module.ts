import { Module } from '@nestjs/common';
import { HospitalsModule } from './hospitals/hospitals.module';
import { DepartmentsModule } from './departments/departments.module';
import { RoomsModule } from './rooms/rooms.module';

@Module({
  imports: [HospitalsModule, DepartmentsModule, RoomsModule]
})
export class FacilityManagementModule {}
