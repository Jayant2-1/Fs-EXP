import { useDashboard } from '../context/DashboardContext'

function AttendanceList() {
  const { attendanceRecords: records } = useDashboard()

  console.log(`AttendanceList rendered (${records.length} records)`)

  return (
    <section className="attendance-list">
      {records.map(record => {
        const statusColor = 
          record.status === 'Excellent' ? '#b9966f' : 
          record.status === 'Good' ? '#c7a793' : 
          '#d4847d'
        
        return (
          <article key={record.studentId} className="attendance-card">
            <div className="attendance-header">
              <h3 className="student-name">{record.studentName}</h3>
              <div className="status-badge" style={{ backgroundColor: statusColor + '22', borderColor: statusColor }}>
                {record.status}
              </div>
            </div>
            <p className="attendance-detail"><strong>Course:</strong> {record.course}</p>
            <p className="attendance-detail"><strong>Attendance:</strong> {record.attendancePercentage}%</p>
            <p className="attendance-detail"><strong>Classes Attended:</strong> {record.classesAttended} / {record.classesTotal}</p>
            <p className="attendance-detail"><strong>Last Present:</strong> {record.lastPresent}</p>
            
          </article>
        )
      })}
    </section>
  )
}

export default AttendanceList
