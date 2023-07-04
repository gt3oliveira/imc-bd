import React from 'react'
import Header from './Header'
import View from './View'

const HomeProps = {
    icon: "home",
    title: "Início",
    subtitle: "Projeto Calculador IMC com React Next.js"
}

export default function Home() {
    return (
        <>
            <Header {...HomeProps} />
            <View>
                <div className='view-corpo'>
                    <div className='view-header'>
                        <h1>Bem-Vindo!</h1>
                        <div className='view-social-media'>                            
                        <div className="indice">
                            <div className='i1'><a href='#' style={{var:"--i:1"}}><i class='bx bxl-facebook'></i></a></div>
                            <div className="i2"><a href='#'><i class='bx bxl-instagram-alt' ></i></a></div>
                            <div className="i3"><a href='#'><i class='bx bxl-github'></i></a></div>
                            <div className="i4"><a href='#'><i class='bx bxl-linkedin'></i></a></div>                            
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>
                            O projeto apresenta uma calculadora IMC
                            (Índice de Massa Corporal).
                        </p>
                        <p>
                            A Calculadora IMC possui um histórico de todos os cálculos
                            IMC realizado pelo usuário sendo exibido em uma tabela
                            no menu "Registros IMC", onde o usuário terá acesso a todos
                            registros de peso, o índice corporal e o seu grau de peso.
                            Facilitando a observação e comparação de todos os
                            ganhos e perdas de peso diários ou mensal.
                        </p>
                    </div>
                </div>
            </View>
        </>
    )
}
