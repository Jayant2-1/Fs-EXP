import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const loadStudents = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok) {
          throw new Error('Unable to load student data')
        }
        const data = await response.json()
        setStudents(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadStudents()
  }, [])

  const filtered = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <main className="container">
      <h1>Student List</h1>
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      {loading && (
        <p className="status">
          <span className="spinner" aria-hidden="true"></span>
          Loading students...
        </p>
      )}

      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  )
}

export default App
