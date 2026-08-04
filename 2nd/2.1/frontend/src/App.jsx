import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="container">
      <h1>Counter</h1>
      <p className={count < 0 ? 'count negative' : 'count'}>Count: {count}</p>
      <div className="controls">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </main>
  )
}

export default App
