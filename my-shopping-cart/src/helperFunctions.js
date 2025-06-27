export const isProductInCart = (id, cart) => {
    const item = cart?.find((i) => i.id == id);
    if (item) return true;
    return false;
  };
