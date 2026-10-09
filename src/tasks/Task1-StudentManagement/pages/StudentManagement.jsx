import { useEffect, useState } from "react";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";

function StudentManagement() {
  const [students, setStudents] = useState(() => {
    try {
      const savedStudents = localStorage.getItem("iac-students");
      return savedStudents ? JSON.parse(savedStudents) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("iac-students", JSON.stringify(students));
  }, [students]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
  });

  const [errors, setErrors] = useState({});
  

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
    }));
  }

  function validateForm() {
    const nextErrors = {};
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();

    if (!trimmedName) {
      nextErrors.name = "Name is required.";
    } else if (trimmedName.length < 2) {
      nextErrors.name = "Name must be at least 2 characters.";
    }

    if (!trimmedEmail) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.department) {
      nextErrors.department = "Please select a department.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleAddStudent(event) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: formData.name.trim(),
      email: formData.email.trim(),
      department: formData.department,
    };

    setStudents((previousStudents) => [...previousStudents, newStudent]);

    setFormData({
      name: "",
      email: "",
      department: "",
    });

    setErrors({});
  }

  function handleDeleteStudent(studentId) {
    setStudents((previousStudents) =>
      previousStudents.filter((student) => student.id !== studentId),
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
      <StudentForm
        formData={formData}
        errors={errors}
        onChange={handleInputChange}
        onSubmit={handleAddStudent}
      />

      <StudentList
        students={students}
        onDelete={handleDeleteStudent}
      />
    </div>
  );
}

export default StudentManagement;
