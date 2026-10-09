import { Minus, Plus, Trash2 } from "lucide-react";

function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-bold text-slate-900">{item.name}</h3>
          <p className="mt-1 text-sm text-slate-500">৳{item.price.toLocaleString()} each</p>
        </div>
        <button className="rounded-lg p-2 text-slate-400 transition hover:bg-rose-50 hover:text-rose-600" type="button" aria-label={`Remove ${item.name}`} onClick={() => onRemove(item.id)}>
          <Trash2 size={16} />
        </button>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="inline-flex items-center rounded-lg border border-slate-200 bg-white">
          <button className="p-2 text-slate-500 transition hover:text-indigo-600" type="button" aria-label={`Decrease ${item.name}`} onClick={() => onDecrease(item.id)}><Minus size={14} /></button>
          <span className="min-w-8 text-center text-sm font-bold text-slate-900">{item.quantity}</span>
          <button className="p-2 text-slate-500 transition hover:text-indigo-600" type="button" aria-label={`Increase ${item.name}`} onClick={() => onIncrease(item.id)}><Plus size={14} /></button>
        </div>
        <p className="font-black text-slate-900">৳{(item.price * item.quantity).toLocaleString()}</p>
      </div>
    </div>
  );
}

export default CartItem;
