import ProductCard from "@/components/ProductCard";
import getProducts from "../libs/getProducts";

export default async function Products() {
  const products = await getProducts();

  return (
    <section>
      <div className="products">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              title={product.title}
              desc={product.description}
              id={product.id}
            />
          );
        })}
      </div>
    </section>
  );
}
