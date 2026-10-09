import StudentManagement from "./pages/StudentManagement";
function Task1() {
  return (
    <section className="space-y-8">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">Task 01 · Fundamentals</p>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">Student Management System</h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-500">Practice forms, controlled inputs, validation, props, list rendering, and state updates in one focused workspace.</p>
      </div>
      <StudentManagement />
    </section>
  );
}

export default Task1;
