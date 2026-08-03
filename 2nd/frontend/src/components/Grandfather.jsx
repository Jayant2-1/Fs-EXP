import React, { createContext, useContext, useState } from 'react'

// Create a Context
const FamilyContext = createContext()

// Custom hook to use the FamilyContext
export const useFamily = () => {
  const context = useContext(FamilyContext)
  if (!context) {
    throw new Error('useFamily must be used within a Grandfather provider')
  }
  return context
}

const Grandfather = ({ children }) => {
  const [familyName] = useState('Sharma')
  const [wealth] = useState(1000000)
  const [greeting] = useState('Welcome to the family!')

  const value = {
    familyName,
    wealth,
    greeting,
  }

  return (
    <FamilyContext.Provider value={value}>
      <div style={{ border: '3px solid #2c3e50', padding: '20px', margin: '10px', borderRadius: '8px' }}>
        <h2>Grandfather Component</h2>
        <p><strong>Family Name:</strong> {familyName}</p>
        <p><strong>Total Wealth:</strong> ${wealth.toLocaleString()}</p>
        <hr />
        {children}
      </div>
    </FamilyContext.Provider>
  )
}

export default Grandfather