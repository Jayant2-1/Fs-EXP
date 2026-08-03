import React from 'react'
import { useFamily } from './Grandfather'

const Child = () => {
  const { familyName, wealth, greeting } = useFamily()

  return (
    <div style={{ border: '2px solid #e74c3c', padding: '15px', margin: '10px', borderRadius: '8px' }}>
      <h4>Child Component</h4>
      <p><strong>Message:</strong> {greeting}</p>
      <p><strong>My Family Name:</strong> {familyName}</p>
      <p><strong>My Future Inheritance:</strong> ${(wealth * 0.25).toLocaleString()}</p>
      <p><em>Notice: I accessed all data directly from Grandfather's context without Father passing props to me!</em></p>
    </div>
  )
}

export default Child