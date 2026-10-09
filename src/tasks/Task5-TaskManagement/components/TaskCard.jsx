import { Check, Pencil, Trash2 } from "lucide-react";

const priorityStyles = {
  Low: "bg-emerald-50 text-emerald-700",
  Medium: "bg-amber-50 text-amber-700",
  High: "bg-rose-50 text-rose-700",
};

function TaskCard({ task, onToggle, onDelete, onEdit }) {
  return (
    <article className={`rounded-2xl border p-5 transition ${task.completed ? "border-emerald-200 bg-emerald-50/40" : "border-slate-200 bg-slate-50 hover:border-indigo-200 hover:bg-white"}`}>
      <div className="flex items-start gap-3">
        <button className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition ${task.completed ? "border-emerald-500 bg-emerald-500 text-white" : "border-slate-300 text-transparent hover:border-indigo-500"}`} type="button" aria-label={`Mark ${task.title} as ${task.completed ? "pending" : "completed"}`} onClick={() => onToggle(task.id)}><Check size={13} /></button>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className={`font-black text-slate-900 ${task.completed ? "line-through text-slate-400" : ""}`}>{task.title}</h3>
              <p className={`mt-1 text-sm leading-6 ${task.completed ? "text-slate-400" : "text-slate-500"}`}>{task.description}</p>
            </div>
            <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${priorityStyles[task.priority]}`}>{task.priority}</span>
          </div>
          <div className="mt-4 flex gap-2">
            <button className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-500 transition hover:border-indigo-200 hover:text-indigo-600" type="button" onClick={() => onEdit(task)}><Pencil size={13} /> Edit</button>
            <button className="inline-flex items-center gap-1.5 rounded-lg border border-rose-200 bg-white px-3 py-2 text-xs font-bold text-rose-600 transition hover:bg-rose-50" type="button" onClick={() => onDelete(task.id)}><Trash2 size={13} /> Delete</button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default TaskCard;
