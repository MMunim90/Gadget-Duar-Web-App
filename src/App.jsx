import { Outlet } from 'react-router'
import './App.css'

function App() {

  return (
    <>
      <h1>navbar</h1>
      <Outlet></Outlet>
      <h1>footer</h1>
    </>
  )
}

export default App
