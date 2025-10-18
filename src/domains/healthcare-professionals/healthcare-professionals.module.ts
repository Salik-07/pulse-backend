import { Module } from '@nestjs/common';
import { DoctorsModule } from './doctors/doctors.module';
import { NursesModule } from './nurses/nurses.module';
import { SchedulesModule } from './schedules/schedules.module';

@Module({
  imports: [DoctorsModule, NursesModule, SchedulesModule]
})
export class HealthcareProfessionalsModule {}
