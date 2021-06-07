export const getPaymentAmount = (totalPaymentAmount: number): { Aleja: number, Oscar: number } => {
  const oscarSalary = 6500000;
  const alejaSalary = 2000000;

  const salarySums = oscarSalary + alejaSalary;

  const constant = totalPaymentAmount / salarySums;

  const response = {
    Aleja: alejaSalary * constant,
    Oscar: oscarSalary * constant,
  };

  return response;
};

export const formatCurrency = (price: number): string => {
  return price.toLocaleString(undefined, { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 })
}
