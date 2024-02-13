import axios from "axios";
import React, {useState, useEffect} from "react";

export default function Species() {
    const [species, setSpecies] =useState(null);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [id, setId] = useState(1);
    const [url, setUrl] = useState(`https://swapi.dev/api/species/${id}`);

    useEffect(() => {axios.get(url)
        .then((response) => {
            console.log(response.data)
            setSpecies(response.data)
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
        setUrl(`https://swapi.dev/api/species/${id}`);
    }
    if(!loaded){
        return (<div className="d-flex justify-content-center mt-5 mb-5">
                <div className="justify-content-center spinner-border text-white mx-5" role="status">
                <span className="visually-hidden">En cours de chargement...</span>
                </div></div>)
    } else if(error){
        return (<h2>{`Vous avez une erreur ${error}`}</h2>)
    } else {
        return (
            <div id="species.list" className="row">
                <form className="d-flex justify-content-center mt-5 mb-5" action="" onSubmit={handleSubmit}>
                    <input type="text" onChange={(e) => {
                        console.log(e.target.value)
                        setId(e.target.value);
                    }}/>
                    <button className="btn btn-outline-success ms-2">Valider</button>
                </form>
                    <div className="col-4 d-flex flex-column mx-auto p-5 d-block border rounded bg-primary-subtle">
                    <h3 className="text-center">Nom : 
                        <span className="fw-bold"> {species.name}</span>
                        </h3>
                        <p className="text-center">Classification : 
                        <span className="fw-bold"> {species.classification}</span>
                        </p>
                        <p className="text-center">Désignation :
                        <span className="fw-bold"> {species.designation}</span>
                        </p>
                        <p className="text-center">Taille moyenne :
                        <span className="fw-bold"> {species.average_height}</span>
                        </p>
                        <p className="text-center">Couleurs de peau :
                        <span className="fw-bold"> {species.skin_colors}</span>
                        </p>
                        <p className="text-center">Couleur de cheveux :
                        <span className="fw-bold"> {species.hair_colors}</span>
                        </p>
                        <p className="text-center">Couleur des yeux :
                        <span className="fw-bold"> {species.eye_colors}</span>
                        </p>
                        <p className="text-center">Durée de vie moyenne :
                        <span className="fw-bold"> {species.average_lifespan}</span>
                        </p>
                        <p className="text-center">Langue :
                        <span className="fw-bold"> {species.language}</span>
                        </p>
                    </div>
                    <div className="d-flex justify-content-center mt-5 mb-5">
                    <a href="/" className="btn btn-outline-secondary">Retour</a>
                    </div>
            </div>
        )
    }
}