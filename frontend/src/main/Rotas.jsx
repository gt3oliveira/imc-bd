import React from "react";
import { Routes, Route } from "react-router";
import Calculadora from "../components/templates/Calculadora";
import Home from "../components/templates/Home";
import UserCrud from "../components/user/UserCrud";

export default function Rotas(){
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />            
            <Route path="/calculadora" element={<Calculadora />} />            
            <Route path="/registros" element={<UserCrud />} />            
            <Route path="*" element={<Home />} />            
        </Routes>
    )
}