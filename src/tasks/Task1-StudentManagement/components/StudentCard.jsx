function StudentCard({ student, onDelete }) {
  return (
    <article className="group flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-indigo-200 hover:bg-white sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h3 className="font-bold text-slate-900">{student.name}</h3>
        <p className="mt-1 text-sm text-slate-500">{student.email}</p>
        <p className="mt-2 inline-flex rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-bold text-indigo-600">{student.department}</p>
      </div>
      <button className="rounded-lg border border-rose-200 bg-white px-3 py-2 text-xs font-bold text-rose-600 transition hover:bg-rose-50" type="button" onClick={() => onDelete(student.id)}>
        Remove
      </button>
    </article>
  );
}
export default StudentCard;
