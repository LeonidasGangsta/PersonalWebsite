import { formatValue } from "react-currency-input-field";

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

export const formatCurrency = (price: number | string): string => {
  const value = typeof price === 'number' ? price.toFixed(2) : price;

  return formatValue({
    value,
    groupSeparator: ',',
    decimalSeparator: '.',
    prefix: '$',
  });
};
