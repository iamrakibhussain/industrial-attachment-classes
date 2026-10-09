import { Mail, MapPin } from "lucide-react";

function UserCard({ user }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-lg font-black text-indigo-600">
          {user.name.charAt(0)}
        </div>
        <div className="min-w-0">
          <h2 className="truncate font-black text-slate-950">{user.name}</h2>
          <p className="truncate text-sm text-slate-500">@{user.username}</p>
        </div>
      </div>
      <div className="mt-6 space-y-3 border-t border-slate-100 pt-5 text-sm text-slate-500">
        <p className="flex items-center gap-2"><Mail size={15} className="shrink-0 text-indigo-500" /> <span className="truncate">{user.email}</span></p>
        <p className="flex items-center gap-2"><MapPin size={15} className="shrink-0 text-indigo-500" /> <span className="truncate">{user.address.city}</span></p>
      </div>
    </article>
  );
}

export default UserCard;
