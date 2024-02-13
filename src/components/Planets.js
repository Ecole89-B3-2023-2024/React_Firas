import axios from "axios";
import React, {useState, useEffect} from "react";

export default function Planets() {
    const [planets, setPlanets] =useState(null);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [id, setId] = useState(1);
    const [url, setUrl] = useState(`https://swapi.dev/api/planets/${id}`);

    useEffect(() => {axios.get(url)
        .then((response) => {
            console.log(response.data)
            setPlanets(response.data)
            setLoaded(true);
        })
        .catch((error) => {
            console.log(error)
            setError(error)
            setLoaded(true);
        })
    }, [url]);
    function handleSubmit(e){
        e.preventDefault();
        setUrl(`https://swapi.dev/api/planets/${id}`);
    }
    if(!loaded){
        return (<div className="d-flex justify-content-center mt-5 mb-5">
                <div className="spinner-border m-5 text-white mx-5" role="status">
                <span className="visually-hidden">En cours de chargement...</span>
                </div>
                </div>)
    } else if(error){
        return (<h2>{`Vous avez une erreur ${error}`}</h2>)
    } else {
        return (
            <div id="planets.list" className="row">
                <form className="d-flex justify-content-center mt-5 mb-5" action="" onSubmit={handleSubmit}>
                    <input type="text" onChange={(e) => {
                        console.log(e.target.value)
                        setId(e.target.value);
                    }}/>
                    <button className="btn btn-outline-success ms-2">Valider</button>
                </form>
                    <div className="col-3 d-flex flex-column mx-auto p-5 d-block border rounded bg-primary-subtle">
                    <h3 className="text-center">Nom : 
                        <span className="fw-bold"> {planets.name}</span>
                        </h3>
                        <p className="text-center">Période de rotation : 
                        <span className="fw-bold"> {planets.rotation_period}</span>
                        </p>
                        <p className="text-center">Période orbitale :
                        <span className="fw-bold"> {planets.orbital_period}</span>
                        </p>
                        <p className="text-center">Diamètre :
                        <span className="fw-bold"> {planets.diameter}</span>
                        </p>
                        <p className="text-center">climat :
                        <span className="fw-bold"> {planets.climate}</span>
                        </p>
                        <p className="text-center">La gravité :
                        <span className="fw-bold"> {planets.gravity}</span>
                        </p>
                        <p className="text-center">Terrain :
                        <span className="fw-bold"> {planets.terrain}</span>
                        </p>
                        <p className="text-center">Surace de l'eaux :
                        <span className="fw-bold"> {planets.surface_water}</span>
                        </p>
                        <p className="text-center">population :
                        <span className="fw-bold"> {planets.population}</span>
                        </p>
                    </div>
                    <div className="d-flex justify-content-center mt-5 mb-5">
                    <a href="/" className="btn btn-outline-secondary">Retour</a>
                    </div>
            </div>
        )
    }
}