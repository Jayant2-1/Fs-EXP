import { useDashboard } from '../context/DashboardContext'

function CourseList() {
  const { courses, students } = useDashboard()

  console.log(`CourseList rendered (${courses.length} courses)`)

  return (
    <section className="course-list">
      {courses.map(course => {
        const courseStudents = students.filter(s => s.course === course.name)
        return (
          <article key={course.id} className="course-card">
            <h3 className="course-name">{course.name}</h3>
            <p className="course-detail"><strong>Instructor:</strong> {course.instructor}</p>
            <p className="course-detail"><strong>Credits:</strong> {course.credits}</p>
            <p className="course-detail"><strong>Enrolled Students:</strong> {courseStudents.length || course.students}</p>
            <div className="enrolled-students">
              <p style={{ fontSize: '0.9rem', color: '#8e7f7a', marginTop: '12px' }}>
                {courseStudents.length > 0 ? 
                  `Students: ${courseStudents.map(s => s.name).join(', ')}` : 
                  'No students currently enrolled'
                }
              </p>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default CourseList
