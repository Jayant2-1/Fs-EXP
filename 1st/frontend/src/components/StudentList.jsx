import { useDashboard } from '../context/DashboardContext'
import StudentCard from './StudentCard'

function StudentList() {
  const { students } = useDashboard()

  if (!students || students.length === 0) {
    return <p className="student-list-empty">No students available.</p>
  }

  return (
    <section className="student-list">
      {students.map(student => (
        <StudentCard key={student.id} student={student} />
      ))}
    </section>
  )
}

export default StudentList
