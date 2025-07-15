export function formatCurrency(value: number): string {
  return value === 0 ? 'grátis' : `R$ ${value?.toFixed(2)?.replace('.', ',')}`;
}
export function normalizeText(text: string) {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}
