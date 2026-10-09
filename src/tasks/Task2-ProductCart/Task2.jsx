import { useReducer, useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const initialProducts = [
  { id: 1, name: "Wireless Headphone", price: 2500 },
  { id: 2, name: "Smart Watch", price: 3200 },
  { id: 3, name: "Mechanical Keyboard", price: 4500 },
  { id: 4, name: "Laptop Stand", price: 1800 },
  { id: 5, name: "USB-C Hub", price: 1500 },
  { id: 6, name: "Bluetooth Speaker", price: 2800 },
];

function cartReducer(cart, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = cart.find((item) => item.id === action.payload.id);

      if (existingItem) {
        return cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...cart, { ...action.payload, quantity: 1 }];
    }
    case "INCREASE_QUANTITY":
      return cart.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    case "DECREASE_QUANTITY":
      return cart
        .map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0);
    case "REMOVE_FROM_CART":
      return cart.filter((item) => item.id !== action.payload);
    default:
      return cart;
  }
}

function Task2() {
  const [products] = useState(initialProducts);
  const [cart, dispatch] = useReducer(cartReducer, []);

  function handleAddToCart(product) {
    dispatch({ type: "ADD_TO_CART", payload: product });
  }

  function handleIncrease(productId) {
    dispatch({ type: "INCREASE_QUANTITY", payload: productId });
  }

  function handleDecrease(productId) {
    dispatch({ type: "DECREASE_QUANTITY", payload: productId });
  }

  function handleRemove(productId) {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  }

  return (
    <section className="space-y-8">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
          Task 02 · State practice
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">
          Product Cart
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-500">
          Practice array updates, reducer actions, quantity controls, and
          calculated totals through a small shopping experience.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.25fr_.75fr]">
        <ProductList products={products} onAddToCart={handleAddToCart} />
        <Cart
          cart={cart}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          onRemove={handleRemove}
        />
      </div>
    </section>
  );
}

export default Task2;
