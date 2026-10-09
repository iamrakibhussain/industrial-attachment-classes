import { useEffect, useState } from "react";
import { Pencil, Plus, X } from "lucide-react";

const emptyForm = { title: "", description: "", priority: "Medium" };

function TaskForm({ editingTask, onSave, onCancel }) {
  const [formData, setFormData] = useState(emptyForm);
  const [error, setError] = useState("");

  useEffect(() => {
    setFormData(editingTask ? {
      title: editingTask.title,
      description: editingTask.description,
      priority: editingTask.priority,
    } : emptyForm);
    setError("");
  }, [editingTask]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((previousData) => ({ ...previousData, [name]: value }));
    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.title.trim() || !formData.description.trim()) {
      setError("Title and description are required.");
      return;
    }

    onSave({
      title: formData.title.trim(),
      description: formData.description.trim(),
      priority: formData.priority,
    });

    if (!editingTask) setFormData(emptyForm);
  }

  return (
    <section className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:sticky lg:top-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-600">{editingTask ? "Edit record" : "New record"}</p>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">{editingTask ? "Update task" : "Add a task"}</h2>
        </div>
        {editingTask ? <Pencil className="text-indigo-600" size={19} /> : <Plus className="text-indigo-600" size={21} />}
      </div>

      <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label className="block text-sm font-bold text-slate-700" htmlFor="task-title">Task title</label>
          <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100" id="task-title" name="title" value={formData.title} onChange={handleChange} placeholder="e.g. Finish React practice" />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-bold text-slate-700" htmlFor="task-description">Description</label>
          <textarea className="min-h-28 w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100" id="task-description" name="description" value={formData.description} onChange={handleChange} placeholder="What needs to be done?" />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-bold text-slate-700" htmlFor="task-priority">Priority</label>
          <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100" id="task-priority" name="priority" value={formData.priority} onChange={handleChange}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        {error && <p className="text-sm font-semibold text-rose-600" role="alert">{error}</p>}

        <div className="flex gap-3">
          <button className="flex-1 rounded-xl bg-slate-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-indigo-600" type="submit">{editingTask ? "Update task" : "Add task"}</button>
          {editingTask && <button className="rounded-xl border border-slate-200 px-4 py-3 text-slate-500 transition hover:bg-slate-50" type="button" aria-label="Cancel editing" onClick={onCancel}><X size={17} /></button>}
        </div>
      </form>
    </section>
  );
}

export default TaskForm;
