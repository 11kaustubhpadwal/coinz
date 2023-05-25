export const formatPrice = (price: string) =>
  new Intl.NumberFormat("in", { style: "currency", currency: "USD" }).format(
    parseInt(price)
  );
