import { ProductCard } from "./ProductCart";

export const MainPage = (props) => {
  const { products, cart, dispatch } = props;

  if (!products || products.length === 0) return "No products available.";

  return (
    <div className="product-container">
      {products.map((product) => {
        return (
          <ProductCard key={product.id} product={product} dispatch={dispatch} cart={cart} />
        );
      })}
    </div>
  );
};
