const formatValue = (value: number): string => {
  const formatedValue = new Intl.NumberFormat('br-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
  return formatedValue;
};
export default formatValue;
