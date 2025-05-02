import { useEffect,useState } from "react"
import Api from "../services/Api"
import { Link } from "react-router-dom"

const Home = () => {
    const [filmes,setFilmes]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(() => {
        async function loadFilmes(){
            const response=await Api.get('movie/now_playing',{
                params:{
                    api_key:'e94a1ec6b4cea3a0e0a513175092e56d',
                    language:'pt-br',
                    page:1
                }
            })
            setFilmes(response.data.results.slice(0,10))
            setLoading(false)
        }
        loadFilmes()
    },[])
    if(loading){
        return(
            <div className="d-flex justify-content-center m-5">
                <h2>Carregando Filmes...</h2>
            </div>
        )
    }
    return (
        <div className="container">
            {filmes.map((value) => {
                return(
                    <div key={value.id} className="my-4">
                        <h4 className="text-center mb-3">{value.title}</h4>
                        <div className="col-md-4 offset-md-4 col-8 offset-2">
                            <img src={`https://image.tmdb.org/t/p/original/${value.poster_path}`} className="img-fluid rounded-top" />
                            <Link to={`/filme/${value.id}`} className="btn btn-primary w-100 fw-bold">Acessar</Link>
                        </div>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}

export default Home