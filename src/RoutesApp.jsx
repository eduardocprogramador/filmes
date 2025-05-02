import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Filme from "./pages/Filme"
import Favoritos from "./pages/Favoritos"
import Header from './components/Header'
import Erro from "./pages/Erro"

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/favoritos' element={<Favoritos />}></Route>
        <Route path='/filme/:id' element={<Filme />}></Route>
        <Route path='*' element={<Erro />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp