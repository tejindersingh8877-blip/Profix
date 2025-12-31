export function calculateCommission(amount: number): {
  commission: number;
  providerAmount: number;
} {
  const commissionRate = parseFloat(process.env.COMMISSION_RATE || '0.15');
  const commission = amount * commissionRate;
  const providerAmount = amount - commission;
  
  return {
    commission: Number(commission.toFixed(2)),
    providerAmount: Number(providerAmount.toFixed(2)),
  };
}

export function getCommissionRate(): number {
  return parseFloat(process.env.COMMISSION_RATE || '0.15');
}
