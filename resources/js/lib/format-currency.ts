export function formatCurrency(amount: number): string {
  const formatter = new Intl.NumberFormat("pt-BR", {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 1,
  });

  return formatter.format(amount);
}
