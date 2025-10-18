import { Module } from '@nestjs/common';
import { BillingModule } from './billing/billing.module';
import { PaymentsModule } from './payments/payments.module';
import { InsuranceClaimsModule } from './insurance-claims/claims.module';

@Module({
  imports: [BillingModule, PaymentsModule, InsuranceClaimsModule],
})
export class FinancialModule {}
