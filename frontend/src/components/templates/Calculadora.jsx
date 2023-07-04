import axios from "axios";
import { useState } from "react";
import UserCrud from "../user/UserCrud";
import Header from "./Header"
import View from "./View"

import pesoAbaixo from '../../assets/imgs/abaixo-do-peso.png'
import pesoNormal from '../../assets/imgs/peso-normal.png'
import pesoAcima from '../../assets/imgs/acima-do-peso.png'
import obesidade1 from '../../assets/imgs/obesidade-grau-I.png'
import obesidade2 from '../../assets/imgs/obesidade-grau-II.png'

const CalculadoraProps = {
    icon: "calculator",
    title: "Calculadora IMC",
    subtitle: "Calcule seu índice de massa corporal."
}

export default function Calculadora() {
    const crud = new UserCrud()

    const [peso, setPeso] = useState(null);
    const [altura, setAltura] = useState(null);
    const [resultado, setResultado] = useState(null)
    const [nome, setNome] = useState("")
    const [visivel, setVisivel] = useState(false)

    function zerarSet() {
        setPeso(null)
        setAltura(null)
        setResultado(null)
        setNome("")
        document.getElementById('nome').value = ''
        document.getElementById('peso').value = ''
        document.getElementById('altura').value = ''
    }

    function calcular() {
        const imc = peso / (altura * altura);
        const formatoImc = imc.toFixed(2);
        setResultado(formatoImc)
        setVisivel(true)
        { crud.state.user.name = nome }
        { crud.state.user.peso = peso }
        { crud.state.user.altura = altura }
        { crud.state.user.imc = formatoImc }
    }

    function recalcular() {
        { crud.clear() }
        { zerarSet() }
        return setVisivel(false)
    }

    function salvar() {
        { crud.save() }
        { zerarSet() }
        return setVisivel(false)
    }

    return (
        <>
            <Header {...CalculadoraProps} />
            <View>
                <div className="corpo">
                    <div className="text">
                        <a className="a1">Nome</a>
                        <a className="a2">Peso</a>
                        <a className="a3">Altura</a>
                    </div>
                    <div className="campos">                        
                        <input id="nome" type="text" name="name"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Digite seu nome..." />
                        <input id="peso" type="number" name="peso"
                            value={peso}
                            onChange={(e) => setPeso(e.target.value)}
                            placeholder="Digite seu peso..." />
                        <input id="altura" type="number" name="altura"
                            value={altura}
                            onChange={(e) => setAltura(e.target.value)}
                            placeholder="Digite sua altura (m)..." />
                    </div>
                    <div className="button">
                        <button onClick={calcular}>
                            <strong>Calcular</strong>
                        </button>
                    </div>
                    {visivel === false ? "" :
                        <>
                            <hr />
                            <div className="pesos">
                                <div className="rs">
                                    <h3 className="result">
                                        {nome}, seu IMC é {resultado}
                                    </h3>
                                </div>
                                <div className="exemplo">
                                    {resultado <= 18.5 ? <img src={pesoAbaixo} alt="Abaixo do peso" />
                                    : resultado >= 18.6 && resultado <= 24.9 ? <img src={pesoNormal} alt="Peso Normal" />
                                    : resultado >= 25 && resultado <= 29.9 ? <img src={pesoAcima} alt="Acima do peso" />
                                    : resultado >= 30 && resultado <= 39.9 ? <img src={obesidade1} alt="Obesidade grau I" />
                                    : <img src={obesidade2} alt="Obesidade grau II" />              
                                    }     
                                </div>
                            </div>
                            <div className="btn-crud">
                                    <button onClick={salvar}>
                                        <strong>Salvar</strong>
                                    </button>
                                    <button onClick={recalcular}>
                                        <strong>Recalcular</strong> 
                                    </button>                                
                            </div>
                        </>
                    }
                </div>
            </View>
        </>
    )
}
