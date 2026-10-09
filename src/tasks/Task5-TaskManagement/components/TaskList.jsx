import TaskCard from "./TaskCard";

function TaskList({ tasks, onToggle, onDelete, onEdit }) {
  if (tasks.length === 0) {
    return <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-14 text-center"><p className="font-bold text-slate-800">No tasks available</p><p className="mt-1 text-sm text-slate-500">Add a task to start managing your work.</p></div>;
  }

  return <div className="mt-6 space-y-3">{tasks.map((task) => <TaskCard key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />)}</div>;
}

export default TaskList;
