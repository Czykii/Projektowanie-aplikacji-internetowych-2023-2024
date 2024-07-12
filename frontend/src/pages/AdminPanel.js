import React, {useEffect} from "react";
import {Formik, Form, Field} from "formik";
import * as Yup from "yup";
import axios from "axios";

function AdminPanel(){

    useEffect(() => {
        const password = prompt("Enter in the password");
        if(password === "1234"){
            document.querySelector(".adminpanel").style.display = "block";
        }
        else {
            alert("Błędne hasło!");
            window.location.href="/home";
        }
    },[])

        const initialValues1 = {
            car: "",
            fuel: "",
            power: "",
            gearbox: "",
            seats: "",
            acceleration: "",
            limit: "",
            drive: "",
            cena_1: "",
            cena_7: "",
            cena_30: ""
        }

        const initialValues2 = {
            nazwa: "",
            cena: ""
        }

        const validationSchema1 = Yup.object().shape({
            car: Yup.string().required(),
            fuel: Yup.string().required(),
            power: Yup.number().required(),
            gearbox: Yup.number().required(),
            seats: Yup.number().required(),
            acceleration: Yup.number().required(),
            limit: Yup.number().required(),
            drive: Yup.string().required(),
            cena_1: Yup.number().required(),
            cena_7: Yup.number().required(),
            cena_30: Yup.number().required()
        });

        const validationSchema2 = Yup.object().shape({
            nazwa: Yup.string().required(),
            cena: Yup.number().required()
        });

        const onSubmit1 = (data) => {
            axios.post("http://localhost:3001/cars", {
                car: data.car,
                fuel: data.fuel,
                power: data.power,
                gearbox: data.gearbox,
                seats: data.seats,
                acceleration: data.acceleration,
                limit: data.limit,
                drive: data.drive
            }).then((response) => {
                console.log(response.data)
            });

            axios.post("http://localhost:3001/prices", {
                model_auta: data.car,
                cena_1: data.cena_1,
                cena_7: data.cena_7,
                cena_30: data.cena_30
            }).then((response) => {
                console.log(response.data)
            });

           // window.location.reload();
        }

    const onSubmit2 = (data) => {
        axios.post("http://localhost:3001/accs", data).then((response) => {
            console.log(response.data)
        });

        //window.location.reload();
    }

        return(
            <section className="adminpanel p-5" style={{display: "none"}}>
                <div className="container">
                    <h1>Dodaj nowe auto</h1>
                    <Formik initialValues={initialValues1} onSubmit={onSubmit1} validationSchema={validationSchema1}>
                    <Form>
                        <div className="form-group">
                            <label htmlFor="InputAuto">Nazwa auta</label>
                            <br></br>
                                    <Field
                                        autocomplete="off"
                                        id="InputAuto"
                                        name="car"
                                        placeholder="Podaj nazwę marki i model auta" />

                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="InputPaliwo">Rodzaj paliwa</label>
                            <br></br>
                                    <Field
                                        autocomplete="off"
                                        id="InputPaliwo"
                                        name="fuel"
                                        placeholder="Paliwo" />

                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="InputMoc">Moc auta w koniach mechanicznych</label>
                            <br></br>
                                    <Field
                                        autocomplete="off"
                                        id="InputMoc"
                                        name="power"
                                        placeholder="Moc" />

                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="InputBiegi">Ilość biegów</label>
                            <br></br>
                                    <Field
                                        autocomplete="off"
                                        id="InputBiegi"
                                        name="gearbox"
                                        placeholder="Ilość biegów" />

                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="InputMiejsca">Ilość miejsc</label>
                            <br></br>
                                    <Field
                                        autocomplete="off"
                                        id="InputMiejsca"
                                        name="seats"
                                        placeholder="Ilośc miejsc" />

                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="InputSeta">Przyspieszenie do 100km/h</label>
                            <br></br>
                                    <Field
                                        autocomplete="off"
                                        id="InputSeta"
                                        name="acceleration"
                                        placeholder="Przyspieszenie do 100km/h w sekundach" />

                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="InputLimit">Dzienny limit kilometrów</label>
                            <br></br>
                                    <Field
                                        autocomplete="off"
                                        id="InputLimit"
                                        name="limit"
                                        placeholder="Dzienny limit kilometrów" />

                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="InputNapęd">Rodzaj napędu</label>
                            <br></br>
                                    <Field
                                        autocomplete="off"
                                        id="InputNapęd"
                                        name="drive"
                                        placeholder="Rodzaj napędu" />

                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="InputCena1">Cena za 1 dzień wypożyczenia</label>
                            <br></br>
                                    <Field
                                        autocomplete="off"
                                        id="InputCena1"
                                        name="cena_1"
                                        placeholder="Cena" />

                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="InputCena7">Cena za 7 dni wypożyczenia</label>
                            <br></br>
                                    <Field
                                        autocomplete="off"
                                        id="InputCena7"
                                        name="cena_7"
                                        placeholder="Cena" />

                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="InputCena30">Cena za 30 dni wypożyczenia</label>
                            <br></br>
                                    <Field
                                        autocomplete="off"
                                        id="InputCena30"
                                        name="cena_30"
                                        placeholder="Cena" />
                        </div>
                        <button type="submit" className="btn btn-primary mt-2">Zatwierdź</button>
                    </Form>
                </Formik>

                </div>
                <div className="container mt-5">
                    <h1>Dodaj nową usługę</h1>
                    <Formik initialValues={initialValues2} onSubmit={onSubmit2} validationSchema={validationSchema2}>
                    <Form>
                        <div className="form-group">
                            <label htmlFor="InputUsluga">Nazwa usługi</label>
                            <br></br>
                                    <Field
                                        autocomplete="off"
                                        id="InputUsluga"
                                        name="nazwa"
                                        placeholder="Podaj nazwę usługi" />

                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="InputCenaUsl">Cena brutto</label>
                            <br></br>
                                    <Field
                                        autocomplete="off"
                                        id="InputCenaUsl"
                                        name="cena"
                                        placeholder="Cena" />

                        </div>
                        <button type="submit" className="btn btn-primary mt-2">Zatwierdź</button>
                    </Form>
                    </Formik>
                </div>
            </section>
        );

}

export default AdminPanel