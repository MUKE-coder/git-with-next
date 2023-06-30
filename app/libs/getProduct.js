export default async function getProduct(id) {
  const response=await fetch(`https://fakestoreapi.com/products/${id}`);
  return await response.json();
}
