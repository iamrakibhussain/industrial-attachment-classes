import { LogOut, Sparkles } from "lucide-react";
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Navbar() {
  const { user, logout } = useContext(UserContext);

  return (
    <header className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-6">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600"><Sparkles size={18} /></span>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-600">Member area</p>
          <h2 className="font-black tracking-tight text-slate-950">Personal Dashboard</h2>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 sm:justify-end">
        <div className="text-left sm:text-right">
          <p className="text-sm font-bold text-slate-900">{user.name}</p>
          <p className="text-xs text-slate-500">{user.email}</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold text-slate-600 transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600" type="button" onClick={logout}><LogOut size={14} /> Logout</button>
      </div>
    </header>
  );
}

export default Navbar;
