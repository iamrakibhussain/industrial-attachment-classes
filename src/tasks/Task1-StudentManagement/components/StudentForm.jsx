function StudentForm({ formData, errors, onChange, onSubmit }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-7 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-600">New record</p>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">Add a student</h2>
        </div>
        <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-600">Required</span>
      </div>

      <form className="space-y-5" onSubmit={onSubmit} noValidate>
        <div className="space-y-2">
          <label className="block text-sm font-bold text-slate-700" htmlFor="student-name">Full name</label>
          <input
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
            id="student-name"
            name="name"
            type="text"
            value={formData.name}
            onChange={onChange}
            placeholder="Enter student name"
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <p className="text-xs font-semibold text-rose-600" role="alert">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-bold text-slate-700" htmlFor="student-email">Email address</label>
          <input
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
            id="student-email"
            name="email"
            type="email"
            value={formData.email}
            onChange={onChange}
            placeholder="student@example.com"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <p className="text-xs font-semibold text-rose-600" role="alert">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-bold text-slate-700" htmlFor="student-department">Department</label>
          <select
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
            id="student-department"
            name="department"
            value={formData.department}
            onChange={onChange}
            aria-invalid={Boolean(errors.department)}
          >
            <option value="">Select department</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Electrical Engineering">Electrical Engineering</option>
            <option value="Mechanical Engineering">Mechanical Engineering</option>
            <option value="Business Administration">Business Administration</option>
          </select>
          {errors.department && (
            <p className="text-xs font-semibold text-rose-600" role="alert">{errors.department}</p>
          )}
        </div>

        <button className="inline-flex w-full items-center justify-center rounded-xl bg-slate-950 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-slate-200 transition hover:-translate-y-0.5 hover:bg-indigo-600" type="submit">Add Student</button>
      </form>
    </section>
  );
}

export default StudentForm;
