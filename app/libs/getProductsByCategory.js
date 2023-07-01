export default async function getProductsByCategory(id) {
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/products/?categoryId=${id}`
  );
  return await response.json();
}
