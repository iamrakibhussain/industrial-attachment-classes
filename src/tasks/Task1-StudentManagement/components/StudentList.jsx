import StudentCard from "./StudentCard";

function StudentList({ students, onDelete }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-600">Directory</p>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">Student list</h2>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">{students.length} student{students.length === 1 ? "" : "s"}</span>
      </div>

      {students.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center">
          <p className="text-sm font-bold text-slate-700">No students yet</p>
          <p className="mt-1 text-sm text-slate-400">Add your first student using the form.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {students.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default StudentList;
