import React from "react";

function Home() {
    return (
        <div>
            {/*- Strona główna -*/}
            <section className="header">
                <div className="text-box">
                    <h1>Wypożyczalnia samochodów sportowych FAST CARS</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor.
                    </p>
                    <a href="#more" className="hero-btn">Dowiedz się więcej</a>
                </div>
            </section>
            {/*- Dodatkowe informacje -*/}
            <section id="more">
                <section className="mb-5">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-md-4 more">
                                <i className="fa fa-unlock-alt"/>
                                <h2>Wypożyczenie bez formalności</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor.</p>
                            </div>
                            <div className="col-md-4 more">
                                <i className="fa fa-map-o"/>
                                <h2>Dostawa na terenie całego kraju</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor.</p>
                            </div>
                            <div className="col-md-4 more">
                                <i className="fa fa-clock-o"/>
                                <h2>Całodobowa obsługa klienta</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/*- Dlaczego warto -*/}
                <section className="mt-5">
                    <div className="container">
                        <div className="text-box-why">
                            <h1>Dlaczego warto wypożyczyć auto z FAST CARS?</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor.
                            </p>
                        </div>
                        <div className="row row-cols-1 row-cols-md-2 g-4">
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Minimum formalności</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Brak ukrytych kosztów</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Ubezpieczenie w cenie</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Zniżki przy wynajmie długoterminowym</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Home