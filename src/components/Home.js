import React from "react";

export default function Home() {
    
        return(
        <div className="container-lg mt-5">
                
                <h1 className="text-center text-dark fw-bold">Star Wars</h1>
                {/* <div className="d-flex justify-content-center">
                    <div><a className="d-inline p-3 mx-5 rounded text-bg-dark text-decoration-none" href="/people/">People</a></div>
                    <div><a className="d-inline p-3 mx-5 rounded text-bg-dark text-decoration-none" href="/planets/">Planets</a></div>
                    <div><a className="d-inline p-3 mx-5 rounded text-bg-dark text-decoration-none" href="/films/">Films</a></div>
                    <div><a className="d-inline p-3 mx-5 rounded text-bg-dark text-decoration-none" href="/species/">Species</a></div>
                    <div><a className="d-inline p-3 mx-5 rounded text-bg-dark text-decoration-none" href="/vehicles/">Vehicules</a></div>
                    <div><a className="d-inline p-3 mx-5 rounded text-bg-dark text-decoration-none" href="/starships/">Starships</a></div>
                </div> */}
            <div className="d-flex justify-content-center">    
                    <div className="row col-12 col-xl-6 g-5">
                        <div className="col-6  col-xl-4">
                            <div className="card bg-dark h-80">
                                <a href="/people/" className="text-decoration-none">
                                <img src="./img/sw.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title text-white">People</h5>
                                </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-6 col-xl-4">
                            <div className="card bg-dark h-80">
                                <a href="/planets/" className="text-decoration-none">
                                <img src="./img/star_wars_planet.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title text-white">Planets</h5>
                                </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-6 col-xl-4">
                            <div className="card bg-dark h-80">
                                <a href="/films/" className="text-decoration-none">
                                <img src="./img/films.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title text-white">Films</h5>
                                </div>
                                </a>    
                            </div>
                        </div>
                        <div className="col-6  col-xl-4">
                            <div className="card bg-dark h-80">
                                <a href="/species/" className="text-decoration-none">
                                <img src="./img/Species.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title text-white">Species</h5>
                                </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-6  col-xl-4">
                            <div className="card bg-dark h-80">
                                <a href="/vehicles/" className="text-decoration-none">
                                <img src="./img/Vehicules.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title text-white">Vehicles</h5>
                                </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-6  col-xl-4">
                            <div className="card bg-dark h-80">
                                <a href="/starships/" className="text-decoration-none">
                                <img src="./img/ships.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title text-white">Starships</h5>
                                </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
            
        )
}