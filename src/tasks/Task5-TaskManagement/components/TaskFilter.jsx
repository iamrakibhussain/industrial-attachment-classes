const filters = ["All", "Pending", "Completed"];

function TaskFilter({ activeFilter, onChange }) {
  return (
    <div className="flex rounded-xl bg-slate-100 p-1">
      {filters.map((filter) => (
        <button className={`rounded-lg px-3 py-2 text-xs font-bold transition ${activeFilter === filter ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500 hover:text-slate-900"}`} key={filter} type="button" onClick={() => onChange(filter)}>
          {filter}
        </button>
      ))}
    </div>
  );
}

export default TaskFilter;
