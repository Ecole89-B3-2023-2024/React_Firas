import axios from "axios";
import React, {useState, useEffect} from "react";

export default function Films() {
    const [films, setFilms] =useState(null);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [id, setId] = useState(1);
    const [url, setUrl] = useState(`https://swapi.dev/api/films/${id}`);

    useEffect(() => {axios.get(url)
        .then((response) => {
            console.log(response.data)
            setFilms(response.data)
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
        setUrl(`https://swapi.dev/api/films/${id}`);
    }
    if(!loaded){
        return (<div className="d-flex justify-content-center mt-5 mb-5">
                <div className="justify-content-center spinner-border text-white mx-5" role="status">
                <span className="visually-hidden">En cours de chargement...</span>
                </div>
                </div>)
    } else if(error){
        return (<><h1 className="d-flex justify-content-center text-white">{`Vous avez une erreur ${error}`}</h1>
                <div className="d-flex justify-content-center">
                    <a href="/" className="btn btn-outline-secondary">Retour</a>
                </div></>)
    } else {
        return (
            <div id="films.list" className="row">
                <form className="d-flex justify-content-center mt-5 mb-5" action="" onSubmit={handleSubmit}>
                    <input type="text" onChange={(e) => {
                        console.log(e.target.value)
                        setId(e.target.value);
                    }}/>
                    <button className="btn btn-outline-success ms-2">Valider</button>
                </form>
                    <div className="col-4 d-flex flex-column mx-auto p-5 d-block border rounded bg-primary-subtle">
                    <h3 className="text-center">Titre : 
                        <span className="fw-bold"> {films.title}</span>
                        </h3>
                        <p className="text-center">Id de l'épisode : 
                        <span className="fw-bold"> {films.episode_id}</span>
                        </p>
                        <p className="text-center">Exploration d'ouverture :
                        <span className="fw-bold"> {films.opening_crawl}</span>
                        </p>
                        <p className="text-center">Directeur :
                        <span className="fw-bold"> {films.director}</span>
                        </p>
                        <p className="text-center">Producteur :
                        <span className="fw-bold"> {films.producer}</span>
                        </p>
                        <p className="text-center">Date de sortie :
                        <span className="fw-bold"> {films.release_date}</span>
                        </p>
                    </div>
                    <div className="d-flex justify-content-center mt-5 mb-5">
                    <a href="/" className="btn btn-outline-secondary">Retour</a>
                    </div>
            </div>
        )
    }
}