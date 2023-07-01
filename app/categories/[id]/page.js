import Image from "next/image";
import React from "react";
import ProductCard from "@/components/ProductCard";
import getProductsByCategory from "@/app/libs/getProductsByCategory";
export default async function ProductPage({ params: { id } }) {
  const products = await getProductsByCategory(id);
  console.log(products);
  return (
    <section>
      <h2 className="section-title">Products Category</h2>
      <div className="products">
        {products.splice(0, 5).map((product) => {
          return (
            <ProductCard
              key={product.id}
              title={product.title}
              desc={product.description}
              id={product.id}
              price={product.price}
              src={product.images[0]}
            />
          );
        })}
      </div>
    </section>
  );
}
