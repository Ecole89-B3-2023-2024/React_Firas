import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const [api, setApi] =useState(null);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const navigate = useNavigate();
    const url = `https://swapi.dev/api/`;
    useEffect(() => {axios.get(url)
        .then((response) => {
             setApi(response.data)
             setLoaded(true);
         })
         .catch((error) =>{
             setError(error)
             setLoaded(true);
         })
    }, [url]);
    function handleClick(){
        const id = Math.floor(Math.random() * (898 - 1) + 1);
        const redirection = `swapi.dev/api/${id}`;
        navigate(redirection);
    }
    function handleSubmit(e){
        e.preventDefault();
        const redirectionUrl = `swapi.dev/api/${api}`;
        navigate(redirectionUrl);
    }
    function handleChange(value){
        setApi(value);
    }
    if (!loaded) {
        return (<div className="d-flex justify-content-center mt-5 mb-5 text-white">En cours de chargement...</div>);
    } else if (error) {
        return (<div className="text-white">Vous avez une Erreur : {error.response.status} - {error.response.statusText}</div>);
    } else {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">STAR WARS</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/people/">People</a></li>
                                <li><a className="dropdown-item" href="/planets/">Planets</a></li>
                                <li><a className="dropdown-item" href="/films/">Films</a></li>
                                <li><a className="dropdown-item" href="/species/">Species</a></li>
                                <li><a className="dropdown-item" href="/vehicles/">Vehicles</a></li>
                                <li><a className="dropdown-item" href="starships/">Starships</a></li>
                            </ul>
                        </li>
                    </ul>
                        <form className="d-flex" role="search" onSubmit={handleSubmit}>
                            <input className="form-control me-2" type="search" onChange={(e) => handleChange(e.target.value)}
                            placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit" onClick={handleClick}>Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}