export function addItemToCart(cartItems: Sweet[], itemToAdd: Sweet) {
  const findItem = cartItems.find((item) => item.name === itemToAdd.name)

  if (findItem) {
    return cartItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, qty: item.qty + 1 } : item,
    )
  }
  return [...cartItems, { ...itemToAdd, qty: 1 }]
}

export const removeFromCart = (cartItems: Sweet[], cartItemToRemove: Sweet) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === cartItemToRemove.id,
  )

  if (existingCartItem?.qty === 1) {
    return cartItems.filter((item) => item.id !== cartItemToRemove.id)
  }

  return cartItems.map((item) =>
    item.id === cartItemToRemove.id ? { ...item, qty: item.qty - 1 } : item,
  )
}
