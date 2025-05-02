import { Link } from "react-router-dom"
import './Erro.css'

const Erro = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-80">
      <div className="text-center">
        <h1>404</h1>
        <h2 className="mb-3">Página Não Encontrada</h2>
        <Link to='/' className="text-decoration-none">
          <h5>Veja os filmes</h5>
        </Link>
      </div>
    </div>
  );
};

export default Erro