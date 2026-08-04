import { useState } from 'react'
import './App.css'

const emptyStudent = { name: '', email: '', course: '', age: '' }

function App() {
  const [student, setStudent] = useState(emptyStudent)
  const [registered, setRegistered] = useState([])

  const handleChange = (event) => {
    const { name, value } = event.target
    setStudent((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setRegistered((prev) => [...prev, student])
    setStudent(emptyStudent)
  }

  return (
    <main className="container">
      <h1>Student Registration</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" value={student.name} onChange={handleChange} required />
        </label>
        <label>
          Email
          <input name="email" type="email" value={student.email} onChange={handleChange} required />
        </label>
        <label>
          Course
          <input name="course" value={student.course} onChange={handleChange} required />
        </label>
        <label>
          Age
          <input name="age" type="number" min="0" value={student.age} onChange={handleChange} required />
        </label>
        <button type="submit">Register</button>
      </form>

      {registered.length > 0 && (
        <section className="registered">
          <h2>Registered Students</h2>
          {registered.map((student, index) => (
            <p key={index}>
              <strong>{student.name}</strong> &mdash; {student.email} &middot; {student.course}
              &middot; Age {student.age}
            </p>
          ))}
        </section>
      )}
    </main>
  )
}

export default App
