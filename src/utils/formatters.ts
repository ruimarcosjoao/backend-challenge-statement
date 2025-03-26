// Função auxiliar para formatar valores monetários
export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "AOA",
  }).format(value);
};

// Função auxiliar para formatar tempo
export const formatDuration = (milliseconds: number) => {
  const hours = Math.floor(milliseconds / (1000 * 60 * 60));
  const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));

  return {
    hours,
    minutes,
    formatted: `${hours}h ${minutes}min`,
  };
};
