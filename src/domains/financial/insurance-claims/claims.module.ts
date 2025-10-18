import { Module } from '@nestjs/common';
import { InsuranceClaimsController } from './claims.controller';
import { InsuranceClaimsService } from './claims.service';

@Module({
  controllers: [InsuranceClaimsController],
  providers: [InsuranceClaimsService],
})
export class InsuranceClaimsModule {}
