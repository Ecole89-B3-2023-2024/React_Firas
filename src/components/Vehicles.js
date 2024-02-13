import axios from "axios";
import React, {useState, useEffect} from "react";

export default function Vehicles() {
    const [vehicles, setVehicles] =useState(null);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [id, setId] = useState(1);
    const [url, setUrl] = useState(`https://swapi.dev/api/vehicles/${id}`);

    useEffect(() => {axios.get(url)
        .then((response) => {
            console.log(response.data)
            setVehicles(response.data)
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
        setUrl(`https://swapi.dev/api/vehicles/${id}`);
    }
    if(!loaded){
        return (<div className="d-flex justify-content-center mt-5 mb-5">
                <div className="justify-content-center spinner-border text-white mx-5" role="status">
                <span className="visually-hidden">En cours de chargement...</span>
                </div>
                </div>)
    } else if(error){
        return (<><h2 className="d-flex justify-content-center text-white">{`Vous avez une erreur ${error}`}</h2>
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
                    <h3 className="text-center">Nom : 
                    <span className="fw-bold"> {vehicles.name}</span>
                    </h3>
                    <p className="text-center">Modèle : 
                    <span className="fw-bold"> {vehicles.model}</span>
                    </p>
                    <p className="text-center">Fabricante :
                    <span className="fw-bold"> {vehicles.manufacturer}</span>
                    </p>
                    <p className="text-center">Coût en crédits :
                    <span className="fw-bold"> {vehicles.cost_in_credits}</span>
                    </p>
                    <p className="text-center">Longueur :
                    <span className="fw-bold"> {vehicles.length}</span>
                    </p>
                    <p className="text-center">Vitesse atmosphérique maximale :
                    <span className="fw-bold"> {vehicles.max_atmosphering_speed}</span>
                    </p>
                    <p className="text-center">Equipage :
                    <span className="fw-bold"> {vehicles.crew}</span>
                    </p>
                    <p className="text-center">Passagères :
                    <span className="fw-bold"> {vehicles.passengers}</span>
                    </p>
                    <p className="text-center">Capacité de chargement :
                    <span className="fw-bold"> {vehicles.cargo_capacity}</span>
                    </p>
                    <p className="text-center">Consommables :
                    <span className="fw-bold"> {vehicles.consumables}</span>
                    </p>
                    <p className="text-center">Cote d'hyperdrive :
                    <span className="fw-bold"> {vehicles.hyperdrive_rating}</span>
                    </p>
                    <p className="text-center">MGLT :
                    <span className="fw-bold"> {vehicles.MGLT}</span>
                    </p>
                    <p className="text-center">Classe de vaisseau :
                    <span className="fw-bold"> {vehicles.starship_class}</span>
                    </p>
                </div>
                <div className="d-flex justify-content-center mt-5 mb-5">
                <a href="/" className="btn btn-outline-secondary">Retour</a>
                </div>
            </div>
        )
    }
}