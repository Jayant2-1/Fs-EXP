/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react'
import { courses, students, attendanceRecords } from '../data/dashboardData'

const DashboardContext = createContext(null)

function DashboardProvider({ children }) {
  const [showSidebar, setShowSidebar] = useState(true)
  const [activeView, setActiveView] = useState('home')

  const value = {
    students,
    courses,
    attendanceRecords,
    showSidebar,
    activeView,
    setActiveView,
    toggleSidebar: () => setShowSidebar(visible => !visible),
  }

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  )
}

function useDashboard() {
  const context = useContext(DashboardContext)
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider')
  }
  return context
}

export { DashboardProvider, useDashboard }