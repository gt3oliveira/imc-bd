import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {

    return (
        <div className="nav">
            <Link to="/">
                <i class="fa fa-home"></i>
                Início
            </Link>
            <Link to="/calculadora">
                <i class="fa fa-calculator"></i>
                Calculadora IMC
            </Link>
            <Link to="/registros">
                <i className="fa fa-clipboard"></i>
                Registros IMC
            </Link>
        </div>
    )
}