import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  LayoutDashboard,
  Package,
  Search,
  Sparkles,
} from 'lucide-react';
import Task1 from './tasks/Task1-StudentManagement/Task1';
import Task2 from './tasks/Task2-ProductCart/Task2';
import Task3 from './tasks/Task3-UserDashboard/Task3';
import Task4 from './tasks/Task4-UserSearch/Task4';
import Task5 from './tasks/Task5-TaskManagement/Task5';

const tasks = [
  { path: '/task-1', label: '01', title: 'Student Management', description: 'Build a clean CRUD workflow for student records.', icon: BookOpen, tone: 'bg-indigo-50 text-indigo-600' },
  { path: '/task-2', label: '02', title: 'Product Cart', description: 'Practice cart state, quantities, and calculated totals.', icon: Package, tone: 'bg-amber-50 text-amber-600' },
  { path: '/task-3', label: '03', title: 'User Dashboard', description: 'Create a contextual login and profile experience.', icon: LayoutDashboard, tone: 'bg-emerald-50 text-emerald-600' },
  { path: '/task-4', label: '04', title: 'User Search', description: 'Fetch, filter, and present remote user data.', icon: Search, tone: 'bg-sky-50 text-sky-600' },
  { path: '/task-5', label: '05', title: 'Task Management', description: 'Bring reducers, context, filters, and forms together.', icon: ClipboardList, tone: 'bg-rose-50 text-rose-600' },
];

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-0 h-[520px] app-grid-pattern opacity-45" />

      <header className="relative z-10 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 lg:px-8">
          <NavLink to="/" className="group flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-300 transition-transform group-hover:-rotate-6">
              <Sparkles size={18} />
            </span>
            <span>
              <span className="block text-[11px] font-bold uppercase tracking-[0.24em] text-indigo-600">IAC / Lab</span>
              <span className="block text-sm font-bold tracking-tight text-slate-950">Industrial Attachment Classes</span>
            </span>
          </NavLink>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Task navigation">
            <NavLink to="/" className={({ isActive }) => `rounded-full px-4 py-2 text-sm font-semibold transition ${isActive ? 'bg-slate-950 text-white' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-950'}`}>
              Overview
            </NavLink>
            {tasks.map((task) => (
              <NavLink key={task.path} to={task.path} className={({ isActive }) => `rounded-full px-3 py-2 text-sm font-semibold transition ${isActive ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-950'}`}>
                {task.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-500 sm:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            React practice mode
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 pb-4 md:hidden lg:px-8">
          {tasks.map((task) => (
            <NavLink key={task.path} to={task.path} className={({ isActive }) => `shrink-0 rounded-full px-3 py-2 text-xs font-bold ${isActive ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
              {task.label}
            </NavLink>
          ))}
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task-1" element={<Task1 />} />
          <Route path="/task-2" element={<Task2 />} />
          <Route path="/task-3" element={<Task3 />} />
          <Route path="/task-4" element={<Task4 />} />
          <Route path="/task-5" element={<Task5 />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer className="relative z-10 border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs font-medium text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span>Built for deliberate React practice.</span>
          <span>Five tasks · one focused learning path</span>
        </div>
      </footer>
    </div>
  );
}

function Home() {
  return (
    <div className="space-y-16">
      <section className="grid items-end gap-10 lg:grid-cols-[1.1fr_.9fr]">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-indigo-600 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            React practice &amp; evaluation
          </div>
          <h1 className="text-5xl font-black tracking-[-0.06em] text-slate-950 sm:text-6xl lg:text-7xl">
            Make the fundamentals <span className="text-indigo-600">feel effortless.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-500">
            A focused workspace for building five small React applications—one thoughtful component, state update, and interaction at a time.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <NavLink to="/task-1" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-xl shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-indigo-600">
              Start with Task 1 <ArrowRight size={16} />
            </NavLink>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-500">
              <CheckCircle2 size={16} className="text-emerald-500" />
              5 learning milestones
            </span>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-7 text-white shadow-2xl shadow-slate-200/80 sm:p-9">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-indigo-500/30 blur-3xl" />
          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-300">Your learning path</p>
            <div className="mt-10 space-y-6">
              {['Components & props', 'State & events', 'Effects & data', 'Context & reducers'].map((item, index) => (
                <div key={item} className="flex items-center gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-xs font-bold text-indigo-200">0{index + 1}</span>
                  <span className="text-sm font-semibold text-slate-200">{item}</span>
                  <span className="ml-auto h-px w-8 bg-white/15" />
                </div>
              ))}
            </div>
            <div className="mt-10 border-t border-white/10 pt-5 text-sm leading-6 text-slate-400">Small apps. Real patterns. Clear progress.</div>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">The curriculum</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">Five practical builds</h2>
          </div>
          <span className="hidden text-sm font-medium text-slate-400 sm:block">Choose a card to open a workspace</span>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tasks.map((task) => <TaskCard key={task.path} task={task} />)}
        </div>
      </section>
    </div>
  );
}

function TaskCard({ task }) {
  const Icon = task.icon;

  return (
    <NavLink to={task.path} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50">
      <div className="flex items-start justify-between">
        <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${task.tone}`}><Icon size={21} /></span>
        <span className="text-xs font-black tracking-[0.16em] text-slate-300">{task.label}</span>
      </div>
      <h3 className="mt-7 text-xl font-black tracking-tight text-slate-950">{task.title}</h3>
      <p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">{task.description}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-indigo-600 transition group-hover:gap-3">Open workspace <ArrowRight size={16} /></span>
    </NavLink>
  );
}

export default App;
