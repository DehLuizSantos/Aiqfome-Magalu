export function formatCurrency(value: number): string {
  return value === 0 ? 'grátis' : `R$ ${value?.toFixed(2)?.replace('.', ',')}`;
}
