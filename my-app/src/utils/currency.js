// Approximate fixed exchange rates for demo purposes (base: RUB, prices in data/products.js are in RUB)
const RUB_PER_USD = 90;
const UZS_PER_RUB = 140;

const groupThousands = (value) => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

export const formatPrice = (priceRub, lang = 'ru') => {
  if (lang === 'en') {
    const usd = (priceRub / RUB_PER_USD).toFixed(2);
    const [intPart, decPart] = usd.split('.');
    return `$${intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}.${decPart}`;
  }

  if (lang === 'uz') {
    const uzs = Math.round((priceRub * UZS_PER_RUB) / 100) * 100;
    return `${groupThousands(uzs)} so'm`;
  }

  return `${groupThousands(Math.round(priceRub))} ₽`;
};
