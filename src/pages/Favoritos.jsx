import { useState,useEffect } from "react"
import { toast } from "react-toastify"

const Favoritos = () => {
  const [filmes,setFilmes]=useState([])
  useEffect(() => {
    const minhaLista=localStorage.getItem('@primeflix')
    setFilmes(JSON.parse(minhaLista) || [])
  },[])
  function remover(id){
    let filtroFilmes=filmes.filter((value) => (value.id != id))
    setFilmes(filtroFilmes)
    localStorage.setItem('@primeflix',JSON.stringify(filtroFilmes))
    toast.success('Filme Removido')
  }
  return (
    <div className="container">
      <h2 className="my-5 text-center">Filmes Salvos</h2>
        {filmes.length == 0 && <h5>Sua Lista Está Vazia :(</h5>}
        {filmes.map((value) => {
          return(
            <div className="row">
              <div className="col-md-6">
                <img src={`https://image.tmdb.org/t/p/original/${value.backdrop_path}`} className="img-fluid" />
              </div>
              <div className="col-md-6">
                <h2 className="text-center mt-3">{value.title}</h2>
                <p className="mt-3">{value.overview}</p>
                <h6 className="my-4">Avaliação: {value.vote_average.toFixed(1)} / 10</h6>
                <div className="text-center">
                  <button className="btn btn-danger fw-bold" onClick={() => remover(value.id)}>Remover</button>
                </div>
              </div>    
              <hr className="my-4"/>
            </div>
          )
        })}
    </div>
  )
}

export default Favoritos