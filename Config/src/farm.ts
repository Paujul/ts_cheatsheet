interface Product {
  price: number;
  name: string;
  qty: number;
}

const printProductSummary = (product: Product): void => {
  console.log(`${product.name} - ${product.price}`);
};
