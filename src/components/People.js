import axios from "axios";
import React, {useState, useEffect} from "react";

export default function People() {
    const [people, setPeople] =useState(null);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [id, setId] = useState(1);
    const [url, setUrl] = useState(`https://swapi.dev/api/people/${id}`);

    useEffect(() => {axios.get(url)
        .then((response) => {
            console.log(response.data)
            setPeople(response.data)
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
        setUrl(`https://swapi.dev/api/people/${id}`);
    }
    if(!loaded){
        return (<div className="d-flex justify-content-center mt-5 mb-5">
                <div className="justify-content-center spinner-border text-white mx-5" role="status">
                <span className="visually-hidden">En cours de chargement...</span>
                </div>
                </div>)
    } else if(error){
        return (<h2>{`Vous avez une erreur ${error}`}</h2>)
    } else {
        return (
            <div id="people.list" className="row">
                <form className="d-flex justify-content-center mt-5 mb-5" action="" onSubmit={handleSubmit}>
                    <input type="text" onChange={(e) => {
                        console.log(e.target.value)
                        setId(e.target.value);
                    }}/>
                    <button className="btn btn-outline-success ms-2">Valider</button>
                </form>
                    <div className="col-3 d-flex flex-column mx-auto p-5 d-block border rounded bg-primary-subtle">
                        <h3 className="text-center">Nom : 
                        <span className="fw-bold"> {people.name}</span>
                        </h3>
                        <p className="text-center">Taile : 
                        <span className="fw-bold"> {people.height/100} m</span>
                        </p>
                        <p className="text-center">Poids :
                        <span className="fw-bold"> {people.mass} kg</span>
                        </p>
                        <p className="text-center">Date de naissance :
                        <span className="fw-bold"> {people.birth_year}</span>
                        </p>
                        <p className="text-center">Genre :
                        <span className="fw-bold"> {people.gender}</span>
                        </p>
                        <p className="text-center">Couleur de cheveux :
                        <span className="fw-bold"> {people.hair_color}</span>
                        </p>
                        <p className="text-center">Couleur de peau :
                        <span className="fw-bold"> {people.skin_color}</span>
                        </p>
                        <p className="text-center">Couleur des yeux :
                        <span className="fw-bold"> {people.eye_color}</span>
                        </p>
                    </div>
                    <div className="d-flex justify-content-center mt-5 mb-5">
                    <a href="/" className="btn btn-outline-secondary">Retour</a>
                    </div>
            </div>
        )
    }
}