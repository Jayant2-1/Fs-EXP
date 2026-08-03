import './App.css'
import Counter from './components/Counter'
import FetchApi from './components/FetchApi'
import Grandfather from './components/Grandfather'
import Father from './components/Father'

function App() {
  return (
    <div>
      <h1>useContext Demo - Reducing Prop Drilling</h1>
      <Grandfather>
        <Father />
      </Grandfather>
      <hr />
      <h1>Counter App</h1>
      <Counter />
      <hr />
      <FetchApi />
    </div>
  )
}

export default App
