export default async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products?limit=10");
  return await response.json();
}
