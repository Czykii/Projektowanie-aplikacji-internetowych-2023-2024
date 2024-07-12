import React, {useEffect, useState} from "react";
import axios from "axios";

function AudiR8() {

    const [listOfCars, setListOfCars] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/cars").then((response) => {
            setListOfCars(response.data)
        });
    }, []);

    const [price, setOfPrice] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/prices", {
            params: {
                auto: "Audi R8"
            }
        }).then((response) => {
            setOfPrice(response.data)
        })
    }, []);

    return (
        <div>
            { listOfCars.map((value, key) => {
                if(value.car === "Audi R8"){
                return (
                    <div>

                        <section className="audir8 py-5">
                            {/*- Sekcja tytułowa -*/}
                            <section className="header-audir8 bg-image">
                                <h1>AUDI R8</h1>
                            </section>
                            {/*- Zdjęcia i opis auta -*/}
                            <section className="audir8-opis">
                                <div className="container mt-5">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                                                <div className="carousel-indicators">
                                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
                                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={3} aria-label="Slide 4" />
                                                </div>
                                                <div className="carousel-inner">
                                                    <div className="carousel-item active">
                                                        <img src={require("./images/audi/audi1.png")} className="d-block w-100" alt="..." />
                                                        <div className="carousel-caption d-none d-md-block">
                                                        </div>
                                                    </div>
                                                    <div className="carousel-item">
                                                        <img src={require("./images/audi/audi2.png")} className="d-block w-100" alt="..." />
                                                        <div className="carousel-caption d-none d-md-block">
                                                        </div>
                                                    </div>
                                                    <div className="carousel-item">
                                                        <img src={require("./images/audi/audi3.png")} className="d-block w-100" alt="..." />
                                                        <div className="carousel-caption d-none d-md-block">
                                                        </div>
                                                    </div>
                                                    <div className="carousel-item">
                                                        <img src={require("./images/audi/audi4.png")} className="d-block w-100" alt="..." />
                                                        <div className="carousel-caption d-none d-md-block">
                                                        </div>
                                                    </div>
                                                </div>
                                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                                    <span className="visually-hidden">Previous</span>
                                                </button>
                                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                                    <span className="visually-hidden">Next</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{value.car}</p>
                                            <p>Rodzaj paliwa: {value.fuel}</p>
                                            <p>Moc: {value.power} koni mechanicznych</p>
                                            <p>Skrzynia biegów: {value.gearbox} biegów</p>
                                            <p>Ilość miejsc: {value.seats}</p>
                                            <p>Przyspieszenie 0-100 km/h: {value.acceleration}s</p>
                                            <p>Limit kilometrów: {value.limit} km/24h</p>
                                            <p>Napęd: {value.drive}</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/*- Tabela z cennikiem wypożyczenia -*/}
                            <section className="audir8-cennik mt-3">
                                <h1>Cennik wypożyczenia</h1>
                                <p>Regularna cena za dobę: {price.cena_1} zł</p>
                                <div className="container">
                                    <table className="table table-bordered">
                                        <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Długość najmu (doby)</th>
                                            <th scope="col">Cena za dobę (PLN)</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>{price.cena_1}</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>{price.cena_7}</td>
                                        </tr>
                                        <tr>
                                            <td>30</td>
                                            <td>{price.cena_30}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        </section>

                    </div>

                )}
            })}
        </div>
    );
}

export default AudiR8;