import { ArrowUpRight } from "lucide-react";

function ProductCard({ product, onAddToCart }) {
  return (
    <article className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50">
      <div>
        <div className="flex h-32 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-slate-100">
          <span className="text-4xl font-black tracking-[-0.08em] text-indigo-200">{product.name.slice(0, 2).toUpperCase()}</span>
        </div>
        <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-indigo-600">Product {String(product.id).padStart(2, "0")}</p>
        <h3 className="mt-2 text-lg font-black tracking-tight text-slate-950">{product.name}</h3>
        <p className="mt-2 text-xl font-black text-slate-900">৳{product.price.toLocaleString()}</p>
      </div>
      <button className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-indigo-600" type="button" onClick={() => onAddToCart(product)}>
        Add to cart <ArrowUpRight size={16} />
      </button>
    </article>
  );
}

export default ProductCard;
