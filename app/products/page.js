import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import getProducts from "../libs/getProducts";
import getCategories from "../libs/getCategories";

export default async function Products() {
  const products = await getProducts();
  const categories = await getCategories();
  return (
    <>
      <section>
        <h2 className="section-title">Categories</h2>
        <div className="products">
          {categories.map((category) => {
            return (
              <CategoryCard
                key={category.id}
                id={category.id}
                title={category.name}
                src={category.image}
              />
            );
          })}
        </div>
      </section>
      <section>
        <h2 className="section-title">Products</h2>
        <div className="products">
          {products.splice(0, 12).map((product) => {
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
    </>
  );
}
