import { useDashboard } from '../context/DashboardContext'

function Home() {
  const { students, courses } = useDashboard()
  const totalStudents = students.length
  const totalCourses = courses.length

  console.log('Home rendered')

  return (
    <>
      <h1 className="page-title">Dashboard Overview</h1>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Total Students</div>
          <div className="stat-value">{totalStudents}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Active Courses</div>
          <div className="stat-value">{totalCourses}</div>
        </div>
      </div>

      <div className="overview-section">
        <h2 className="section-title">Recent Students</h2>
        <div className="mini-student-list">
          {students.slice(0, 4).map(student => (
            <div key={student.id} className="mini-student-card">
              <h4>{student.name}</h4>
              <p className="course-badge">{student.course}</p>
              <p className="attendance-text">Attendance: <strong>{student.attendance}%</strong></p>
            </div>
          ))}
        </div>
      </div>

      <div className="overview-section">
        <h2 className="section-title">Course Summary</h2>
        <div className="mini-course-list">
          {courses.slice(0, 3).map(course => (
            <div key={course.id} className="mini-course-card">
              <h4>{course.name}</h4>
              <p><strong>Instructor:</strong> {course.instructor}</p>
              <p><strong>Students Enrolled:</strong> {course.students}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
