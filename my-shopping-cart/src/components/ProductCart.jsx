import { isProductInCart } from "../helperFunctions";

export const ProductCard = (props) => {
  const { product, dispatch, cart } = props;

  return (
    <div className="product-card">
      <img className="product-thumbnail" src={product.thumbnail} />
      <p className="product-title">{product.title}</p>
      {isProductInCart(product.id, cart) ? (
        <button
          className="remove-cart-button"
          onClick={() =>
            dispatch({ type: "REMOVE_FROM_CART", payload: product })
          }
        >
          Remove from Cart
        </button>
      ) : (
        <button
          className="add-cart-button"
          onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};
