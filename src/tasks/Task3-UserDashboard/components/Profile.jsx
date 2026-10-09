import { Mail, ShieldCheck, UserRound } from "lucide-react";
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600"><UserRound size={18} /></span>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-600">Profile</p>
          <h2 className="mt-1 text-xl font-black tracking-tight text-slate-950">Your information</h2>
        </div>
      </div>
      <div className="grid gap-4 pt-6 sm:grid-cols-2">
        <InfoRow icon={UserRound} label="Name" value={user.name} />
        <InfoRow icon={Mail} label="Email" value={user.email} />
        <InfoRow icon={ShieldCheck} label="Access" value="Standard member" />
      </div>
    </section>
  );
}

function InfoRow({ icon: Icon, label, value }) {
  return <div className="rounded-2xl bg-slate-50 p-4"><div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-400"><Icon size={14} />{label}</div><p className="mt-2 font-bold text-slate-900">{value}</p></div>;
}

export default Profile;
