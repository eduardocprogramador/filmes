import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = () => {
  return (
    <header className="bg-primary">
        <div className="container py-3 d-flex justify-content-between ">
            <Link to='/' className="text-white text-decoration-none">
                <h3>PrimeFilx</h3>
            </Link>
            <Link to='/favoritos' className="text-white text-decoration-none fw-bold">Meus Filmes</Link>
        </div>
    </header>
  )
}

export default Header