import { useContext, useState } from "react";
import { ArrowRight, LockKeyhole, Sparkles } from "lucide-react";
import { UserContext } from "./UserContext";

function Login() {
  const { login } = useContext(UserContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((previousData) => ({ ...previousData, [name]: value }));
    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.email.trim() || !formData.password.trim()) {
      setError("Please enter both email and password.");
      return;
    }

    const name = formData.email.split("@")[0];

    login({
      name: name.charAt(0).toUpperCase() + name.slice(1),
      email: formData.email.trim(),
    });
  }

  return (
    <section className="mx-auto grid max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/70 lg:grid-cols-[.85fr_1.15fr]">
      <div className="relative overflow-hidden bg-slate-950 p-8 text-white sm:p-12">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-indigo-500/30 blur-3xl" />
        <div className="relative flex h-full flex-col justify-between">
          <div>
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-indigo-200"><Sparkles size={20} /></span>
            <p className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-indigo-300">Task 03 · Context practice</p>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">Welcome back.</h1>
            <p className="mt-5 max-w-sm leading-7 text-slate-400">Sign in to open your personal React practice dashboard.</p>
          </div>
          <p className="mt-16 text-sm font-medium text-slate-500">A simple login flow powered by Context API.</p>
        </div>
      </div>

      <div className="p-8 sm:p-12">
        <div className="mb-8">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600"><LockKeyhole size={19} /></div>
          <h2 className="mt-6 text-2xl font-black tracking-tight text-slate-950">Sign in to continue</h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">Use any email and password for this practice task.</p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="block text-sm font-bold text-slate-700" htmlFor="dashboard-email">Email address</label>
            <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100" id="dashboard-email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-bold text-slate-700" htmlFor="dashboard-password">Password</label>
            <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100" id="dashboard-password" name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" />
          </div>
          {error && <p className="text-sm font-semibold text-rose-600" role="alert">{error}</p>}
          <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-slate-200 transition hover:-translate-y-0.5 hover:bg-indigo-600" type="submit">Open dashboard <ArrowRight size={16} /></button>
        </form>
      </div>
    </section>
  );
}

export default Login;
