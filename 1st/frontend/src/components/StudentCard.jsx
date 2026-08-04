function StudentCard({ student }) {
  console.log(`StudentCard rendered — ${student.name}`)

  return (
    <article className="student-card">
      <h3 className="student-name">{student.name}</h3>
      <p className="student-field"><strong>Email:</strong> {student.email}</p>
      <p className="student-field"><strong>Course:</strong> {student.course}</p>
      <p className="student-field"><strong>Age:</strong> {student.age}</p>
      <p className="attendance-mini-text">Attendance: <strong>{student.attendance}%</strong></p>
    </article>
  )
}

export default StudentCard
