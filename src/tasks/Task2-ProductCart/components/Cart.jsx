import { ShoppingBag } from "lucide-react";
import CartItem from "./CartItem";

function Cart({ cart, onIncrease, onDecrease, onRemove }) {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <aside className="h-fit rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl shadow-slate-200 sm:p-8 lg:sticky lg:top-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-300">Your selection</p>
          <h2 className="mt-2 text-2xl font-black tracking-tight">Shopping cart</h2>
        </div>
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-indigo-200"><ShoppingBag size={19} /></span>
      </div>

      {cart.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-white/15 px-5 py-10 text-center">
          <p className="text-sm font-bold text-slate-200">Your cart is empty</p>
          <p className="mt-1 text-sm text-slate-500">Add a product to begin.</p>
        </div>
      ) : (
        <>
          <div className="mt-8 space-y-3">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} onIncrease={onIncrease} onDecrease={onDecrease} onRemove={onRemove} />
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
            <span className="text-sm font-semibold text-slate-400">Total price</span>
            <span className="text-2xl font-black text-white">৳{totalPrice.toLocaleString()}</span>
          </div>
        </>
      )}
    </aside>
  );
}

export default Cart;
