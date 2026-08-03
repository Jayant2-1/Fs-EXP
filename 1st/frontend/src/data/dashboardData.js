const courses = [
  { id: 1, name: 'Biology 101', instructor: 'Dr. Sarah Mitchell', credits: 3, students: 15 },
  { id: 2, name: 'Computer Science 201', instructor: 'Prof. James Chen', credits: 4, students: 12 },
  { id: 3, name: 'Mathematics 150', instructor: 'Dr. Emma Rodriguez', credits: 3, students: 18 },
  { id: 4, name: 'Physics 202', instructor: 'Prof. Michael Brown', credits: 4, students: 10 },
  { id: 5, name: 'Chemistry 101', instructor: 'Dr. Lisa Anderson', credits: 3, students: 14 }
]

const students = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', course: 'Biology 101', age: 20, attendance: 92, lastPresent: '2026-07-21' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', course: 'Computer Science 201', age: 22, attendance: 88, lastPresent: '2026-07-22' },
  { id: 3, name: 'Carol Lee', email: 'carol@example.com', course: 'Mathematics 150', age: 21, attendance: 95, lastPresent: '2026-07-21' },
  { id: 4, name: 'David Kim', email: 'david@example.com', course: 'Physics 202', age: 23, attendance: 85, lastPresent: '2026-07-20' },
  { id: 5, name: 'Eve Martinez', email: 'eve@example.com', course: 'Chemistry 101', age: 20, attendance: 90, lastPresent: '2026-07-22' },
  { id: 6, name: 'Frank Wilson', email: 'frank@example.com', course: 'Biology 101', age: 21, attendance: 87, lastPresent: '2026-07-21' },
  { id: 7, name: 'Grace Liu', email: 'grace@example.com', course: 'Computer Science 201', age: 22, attendance: 93, lastPresent: '2026-07-22' },
  { id: 8, name: 'Henry Johnson', email: 'henry@example.com', course: 'Mathematics 150', age: 20, attendance: 89, lastPresent: '2026-07-21' },
]

const attendanceRecords = students.map(student => ({
  studentId: student.id,
  studentName: student.name,
  course: student.course,
  attendancePercentage: student.attendance,
  classesAttended: Math.round(student.attendance * 0.3),
  classesTotal: 30,
  lastPresent: student.lastPresent,
  status: student.attendance >= 90 ? 'Excellent' : student.attendance >= 80 ? 'Good' : 'Needs Attention'
}))

export { courses, students, attendanceRecords }