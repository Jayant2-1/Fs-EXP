import React from 'react'
import { useFamily } from './Grandfather'
import Child from './Child'

const Father = () => {
  const { familyName, wealth } = useFamily()

  return (
    <div style={{ border: '2px solid #3498db', padding: '15px', margin: '10px', borderRadius: '8px' }}>
      <h3>Father Component</h3>
      <p><strong>My Family:</strong> {familyName}</p>
      <p><strong>Inheritance:</strong> ${(wealth * 0.5).toLocaleString()}</p>
      <hr />
      <Child />
    </div>
  )
}

export default Father