function StudentCard({ student }) {
  const attendanceColor = 
    student.attendance >= 90 ? '#b9966f' : 
    student.attendance >= 80 ? '#c7a793' : 
    '#d4847d'

  return (
    <article className="student-card">
      <h3 className="student-name">{student.name}</h3>
      <p className="student-field"><strong>Email:</strong> {student.email}</p>
      <p className="student-field"><strong>Course:</strong> {student.course}</p>
      <p className="student-field"><strong>Age:</strong> {student.age}</p>
      <div className="attendance-mini">
        <div className="attendance-mini-bar">
          <div 
            className="attendance-mini-fill" 
            style={{ width: `${student.attendance}%`, backgroundColor: attendanceColor }}
          ></div>
        </div>
        <p className="attendance-mini-text">Attendance: <strong>{student.attendance}%</strong></p>
      </div>
    </article>
  )
}

export default StudentCard
