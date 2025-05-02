import { useState,useEffect } from "react"
import { useParams,useNavigate } from "react-router-dom"
import Api from "../services/Api"
import { toast } from 'react-toastify'

const Filme = () => {
  const {id}=useParams()
  const [filme,setFilme]=useState({})
  const [loading,setLoading]=useState(true)
  const navigate=useNavigate()
  useEffect(() => {
    async function loadFilme(){
      await Api.get(`/movie/${id}`,{
        params:{
          api_key:'e94a1ec6b4cea3a0e0a513175092e56d',
          language:'pt-br'
        }
      }).then((response) => {
        setFilme(response.data)
        setLoading(false)
      }).catch(() => {
        navigate('/',{replace:true})
      })
    }
    loadFilme()
  },[navigate,id])
  if(loading){
    return(
      <div className="d-flex justify-content-center m-5">
          <h2>Carregando Detalhes...</h2>
      </div>
    )
  }
  const salvar = () => {
    const minhaLista=localStorage.getItem('@primeflix')
    let filmesSalvos=JSON.parse(minhaLista) || []
    const temFilme=filmesSalvos.some((value) => value.id == filme.id)
    if(temFilme){
      toast.warn('Já na Lista')
      return
    }
    filmesSalvos.push(filme)
    localStorage.setItem('@primeflix',JSON.stringify(filmesSalvos))
    toast.success('Filme Salvo')
  }
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2 className="text-center mt-3">{filme.title}</h2>
          <p className="mt-3">{filme.overview}</p>
          <h6 className="my-4">Avaliação: {filme.vote_average.toFixed(1)} / 10</h6>
          <div className="text-center">
            <button className="btn btn-primary fw-bold me-5" onClick={salvar}>Salvar</button>
            <a className="btn btn-info fw-bold" target="blank" href={`https://www.youtube.com/results?search_query=${filme.title} Trailer`}>Trailer</a>
          </div>
        </div>    
      </div>
    </div>
  )
}

export default Filme