import { useDashboard } from '../context/DashboardContext'

function Sidebar() {
  const { showSidebar, activeView, setActiveView } = useDashboard()

  if (!showSidebar) return null

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'students', label: 'Students' },
    { id: 'courses', label: 'Courses' },
    { id: 'attendance', label: 'Attendance' }
  ]

  return (
    <aside className="dashboard-sidebar">
      <ul>
        {navItems.map(item => (
          <li 
            key={item.id}
            className={`nav-item ${activeView === item.id ? 'active' : ''}`}
            onClick={() => setActiveView(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
