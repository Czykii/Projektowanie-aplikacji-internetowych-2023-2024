import React, {useEffect, useState} from "react";
import axios from "axios";

function Details() {

    const [listOfPrice, setListOfPrice] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/prices").then((response) => {
            setListOfPrice(response.data)
        });
    }, []);

    const [listOfLimit, setListOfLimit] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/limits").then((response) => {
            setListOfLimit(response.data)
        });
    }, []);

    const [listOfAcc, setListOfAcc] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/accs").then((response) => {
            setListOfAcc(response.data)
        });
    }, []);

    const [listOfDep, setListOfDep] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/deps").then((response) => {
            setListOfDep(response.data)
        });
    }, []);

    return(
        <div>
            <section className="details p-5 text-center">
                {/*- Pierwsza tabela (cennik) -*/}
                <section className="first-table mb-5">
                    <div className="container">
                        <h1>Cennik</h1>
                        <table className="table table-bordered">
                            <thead className="thead-dark">
                            <tr>
                                <th scope="col">Model auta</th>
                                <th scope="col">Cena za 1 dzień (PLN)</th>
                                <th scope="col">Cena za 7 dni (PLN)</th>
                                <th scope="col">Cena za 30 dni (PLN)</th>
                            </tr>
                            </thead>
                            <tbody>
                                {listOfPrice.map((price) => {
                                    return(
                                        <tr>
                                            <td>{price.model_auta} </td>
                                            <td>{price.cena_1} brutto</td>
                                            <td>{price.cena_7} brutto</td>
                                            <td>{price.cena_30} brutto</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </section>
                {/*- Druga tabela (Limit km) -*/}
                <section className="second-table">
                    <div className="container ">
                        <div className="flex-row d-flex justify-content-center">
                            <div className="col-12 col-sm-4">
                                <table className="table table-bordered">
                                    <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Okres najmu</th>
                                        <th scope="col">Limit kilometrów na dobę</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {listOfLimit.map((limit) => {
                                        return(
                                            <tr>
                                                <td>{limit.okres}</td>
                                                <td>{limit.kilometry}</td>
                                            </tr>
                                        )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
                {/*- Trzecia tabela (usługi dodatkowe) -*/}
                <section className="third-table">
                    <div className="container">
                        <div className="flex-row d-flex justify-content-center">
                            <div className="col-12 col-sm-4">
                                <table className="table table-bordered">
                                    <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Usługi dodatkowe</th>
                                        <th scope="col">Cena brutto (PLN)</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {listOfAcc.map((acc) =>{
                                            return(
                                                <tr>
                                                    <td>{acc.nazwa}</td>
                                                    <td>{acc.cena}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
                {/*- Czwarta tabela (Kaucja) -*/}
                <section className="fourth-table">
                    <div className="container">
                        <div className="flex-row d-flex justify-content-center">
                            <div className="col-12 col-sm-4">
                                <table className="table table-bordered">
                                    <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Wiek kierowcy</th>
                                        <th scope="col">Kaucja za samochód (PLN)</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {listOfDep.map((dep) => {
                                            return(
                                                <tr>
                                                    <td>{dep.wiek}</td>
                                                    <td>{dep.cena}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Details