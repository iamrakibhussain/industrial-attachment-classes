import { Activity, ArrowUpRight, CalendarDays, UserRound } from "lucide-react";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import Profile from "./Profile";

function Dashboard() {
  const { user } = useContext(UserContext);

  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] bg-indigo-600 p-8 text-white shadow-xl shadow-indigo-200 sm:p-10">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold text-indigo-200">Good to see you again</p>
            <h1 className="mt-3 text-4xl font-black tracking-[-0.05em] sm:text-5xl">Hello, {user.name}.</h1>
            <p className="mt-4 max-w-xl leading-7 text-indigo-100">Your dashboard is ready. This screen demonstrates shared user state, conditional rendering, and reusable components.</p>
          </div>
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15"><UserRound size={25} /></span>
        </div>
      </section>

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard icon={Activity} label="Account status" value="Active" />
        <StatCard icon={CalendarDays} label="Member since" value="Today" />
        <StatCard icon={ArrowUpRight} label="Profile setup" value="100%" />
      </div>

      <Profile />
    </div>
  );
}

function StatCard({ icon: Icon, label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <Icon size={18} className="text-indigo-600" />
      <p className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-slate-400">{label}</p>
      <p className="mt-1 text-xl font-black text-slate-950">{value}</p>
    </div>
  );
}

export default Dashboard;
