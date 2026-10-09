import { useMemo, useState } from "react";
import TaskProvider, { useTasks } from "./components/TaskContext";
import TaskForm from "./components/TaskForm";
import TaskFilter from "./components/TaskFilter";
import TaskList from "./components/TaskList";

function Task5() {
  return (
    <TaskProvider>
      <TaskManagement />
    </TaskProvider>
  );
}

function TaskManagement() {
  const { tasks, addTask, updateTask, toggleTask, deleteTask } = useTasks();
  const [filter, setFilter] = useState("All");
  const [editingTask, setEditingTask] = useState(null);

  const filteredTasks = useMemo(() => {
    if (filter === "Pending") return tasks.filter((task) => !task.completed);
    if (filter === "Completed") return tasks.filter((task) => task.completed);
    return tasks;
  }, [filter, tasks]);

  function handleSaveTask(taskData) {
    if (editingTask) {
      updateTask({ ...editingTask, ...taskData });
      setEditingTask(null);
      return;
    }

    addTask(taskData);
  }

  return (
    <section className="space-y-8">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">Task 05 · Final practice</p>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">Task Management</h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-500">Bring forms, reducers, context, filters, and reusable task cards together in one focused workspace.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
        <TaskForm editingTask={editingTask} onSave={handleSaveTask} onCancel={() => setEditingTask(null)} />

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-600">Your workspace</p>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">Task list</h2>
            </div>
            <TaskFilter activeFilter={filter} onChange={setFilter} />
          </div>

          <TaskList
            tasks={filteredTasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
            onEdit={setEditingTask}
          />
        </section>
      </div>
    </section>
  );
}

export default Task5;
