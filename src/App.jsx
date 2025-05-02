import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import RoutesApp from './RoutesApp'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
      <ToastContainer autoClose={3000}/>
      <RoutesApp />
    </>
  )
}

export default App
