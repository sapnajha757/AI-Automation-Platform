import { BillingCycle, Currency, EXCHANGE_RATES, ANNUAL_DISCOUNT_MULTIPLIER } from '@/constants/pricing';

export function calculatePrice(
  basePriceUSD: number,
  currency: Currency,
  billingCycle: BillingCycle
): { amount: string; symbol: string } {
  // 1. Apply currency conversion
  let convertedPrice = basePriceUSD * EXCHANGE_RATES[currency];

  // 2. Apply annual discount if applicable
  if (billingCycle === 'annually') {
    convertedPrice *= ANNUAL_DISCOUNT_MULTIPLIER;
  }

  // 3. Format based on currency
  const symbolMap: Record<Currency, string> = {
    USD: '$',
    EUR: '€',
    INR: '₹'
  };

  // Rounding logic: we round to nearest whole number for simplicity, except maybe for EUR
  const roundedAmount = Math.round(convertedPrice);

  return {
    amount: roundedAmount.toLocaleString(),
    symbol: symbolMap[currency]
  };
}
