import { DashboardProvider } from './context/DashboardContext'
import { useDashboard } from './context/DashboardContext'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import StudentList from './components/StudentList'
import CourseList from './components/CourseList'
import AttendanceList from './components/AttendanceList'
import Home from './components/Home'
import Footer from './components/Footer'

function AppContent() {
  const { activeView } = useDashboard()

  return (
    <div className="dashboard-root">
      <Header />
      <div className="dashboard-main">
        <Sidebar />
        <main className="dashboard-content">
          {activeView === 'home' && <Home />}
          {activeView === 'students' && (
            <>
              <h1 className="page-title">Students in Courses</h1>
              <StudentList />
            </>
          )}
          {activeView === 'courses' && (
            <>
              <h1 className="page-title">Courses</h1>
              <CourseList />
            </>
          )}
          {activeView === 'attendance' && (
            <>
              <h1 className="page-title">Attendance Records</h1>
              <AttendanceList />
            </>
          )}
        </main>
      </div>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <DashboardProvider>
      <AppContent />
    </DashboardProvider>
  )
}

export default App
