import getProduct from "@/app/libs/getProduct";
import Image from "next/image";
import React from "react";

export default async function ProductPage({ params: { id } }) {
  const product = await getProduct(id);
  console.log(product);
  return (
    <section className="product-page">
      <h2>Product: {product.title}</h2>
      <p>{product.description}</p>
      <p>price:{product.price}</p>
      <p>Category:{product.category}</p>
      <Image src={product.image} alt={product.title} width={300} height={300} />
    </section>
  );
}
