import { createContext } from "react";

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {}, // for better autocompletion
});
