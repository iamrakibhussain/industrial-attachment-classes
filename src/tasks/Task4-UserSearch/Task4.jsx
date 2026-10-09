import { useEffect, useState } from "react";
import { AlertCircle, LoaderCircle, Search, Users } from "lucide-react";
import UserCard from "./components/UserCard";

const USERS_API = "https://jsonplaceholder.typicode.com/users";

function Task4() {
  const [users, setUsers] = useState([]);
  const [nameQuery, setNameQuery] = useState("");
  const [emailQuery, setEmailQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchUsers() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(USERS_API, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Could not load users.");
        }

        const data = await response.json();
        setUsers(data);
      } catch (fetchError) {
        if (fetchError.name !== "AbortError") {
          setError("Users could not be loaded. Please try again.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchUsers();

    return () => controller.abort();
  }, []);

  const filteredUsers = users.filter((user) => {
    const matchesName = user.name
      .toLowerCase()
      .includes(nameQuery.toLowerCase());

    const matchesEmail = user.email
      .toLowerCase()
      .includes(emailQuery.toLowerCase());

    return matchesName && matchesEmail;
  });

  return (
    <section className="space-y-8">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">Task 04 · Async practice</p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">User Search &amp; Filter</h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-500">Fetch real user data, handle async states, and narrow the directory with controlled search fields.</p>
        </div>
        <div className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-500 shadow-sm sm:self-auto">
          <Users size={16} className="text-indigo-600" />
          {users.length} users loaded
        </div>
      </div>

      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="relative block">
            <span className="mb-2 block text-sm font-bold text-slate-700">Search by name</span>
            <Search className="pointer-events-none absolute left-4 top-[42px] text-slate-400" size={17} />
            <input className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100" type="search" value={nameQuery} onChange={(event) => setNameQuery(event.target.value)} placeholder="e.g. Leanne Graham" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-bold text-slate-700">Filter by email</span>
            <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100" type="email" value={emailQuery} onChange={(event) => setEmailQuery(event.target.value)} placeholder="e.g. .com" />
          </label>
        </div>
      </section>

      {loading && (
        <div className="flex flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
          <LoaderCircle className="animate-spin text-indigo-600" size={28} />
          <p className="mt-4 font-bold text-slate-800">Loading users...</p>
          <p className="mt-1 text-sm text-slate-500">Getting the latest directory data.</p>
        </div>
      )}

      {!loading && error && (
        <div className="flex items-start gap-3 rounded-3xl border border-rose-200 bg-rose-50 p-5 text-rose-700">
          <AlertCircle className="mt-0.5 shrink-0" size={19} />
          <div><p className="font-bold">Something went wrong</p><p className="mt-1 text-sm">{error}</p></div>
        </div>
      )}

      {!loading && !error && filteredUsers.length === 0 && (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm">
          <p className="font-bold text-slate-800">No users found</p>
          <p className="mt-1 text-sm text-slate-500">Try a different name or email search.</p>
        </div>
      )}

      {!loading && !error && filteredUsers.length > 0 && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Task4;
