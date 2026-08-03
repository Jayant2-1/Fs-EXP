import { useDashboard } from '../context/DashboardContext'

function Header() {
  const { toggleSidebar } = useDashboard()

  return (
    <header className="dashboard-header">
      <button
        type="button"
        onClick={toggleSidebar}
        className="hamburger-btn"
        aria-label="Toggle sidebar menu"
      >
        ☰
      </button>
      <h1 className="header-title">Academic Dashboard</h1>
    </header>
  )
}

export default Header
