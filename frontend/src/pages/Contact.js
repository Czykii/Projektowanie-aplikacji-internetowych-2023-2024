import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import 'font-awesome/css/font-awesome.min.css'

function Contact() {
    return(
        <div>

            <section className="contact p-5">
                {/*- Dane kontaktowe -*/}
                <section>
                    <div className="row container-fluid">
                        <div className="col-12 col-md-4">
                            <div className="card-contact border-info mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width={90} height={90} fill="currentColor" className="bi bi-alarm" viewBox="0 0 16 16">
                                    <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                                    <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                                </svg>
                                <div className="card-body">
                                    <h5 className="card-title-work">Godziny pracy w biurze</h5>
                                    <p className="card-text">Pn-sob: 10:00 do 20:00</p>
                                    <p className="card-text">Niedz: 10:00 do 16:00</p>
                                    <p />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="card-contact border-info mb-3">
                                <i className="fa fa-map-marker" />
                                <div className="card-body">
                                    <h5 className="card-title-contact">Adres</h5>
                                    <p className="card-text">ul. Gronostajowa 1</p>
                                    <p className="card-text">30-387 Kraków</p>
                                    <p />
                                    <p />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="card-contact border-info mb-3">
                                <i className="fa fa-phone" />
                                <div className="card-body">
                                    <h5 className="card-title-contact">Kontakt</h5>
                                    <p className="card-text text-break">fastcars.kontakt@gmail.com</p>
                                    <p className="card-text">123 456 789</p>
                                    <p />
                                    <p />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*- Pin z google maps -*/}
                <section id="mapa">
                    <div className="container">
                        <div className="ratio ratio-16x9">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.138658844251!2d19.902754115662226!3d50.02749757941919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165c88d4fb40d7%3A0xb88ab08389aea2da!2sGronostajowa%201%2C%2030-387%20Krak%C3%B3w%2C%20Polska!5e0!3m2!1spl!2sus!4v1668601550041!5m2!1spl!2sus" width={1300} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        </div>
                    </div>
                </section>
            </section>

        </div>
    )
}

export default Contact