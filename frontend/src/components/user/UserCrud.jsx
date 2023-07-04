import React, { Component } from "react";
import axios from 'axios';
import Header from "../templates/Header";
import View from "../templates/View";

const headerProps = {
    icon: 'clipboard',
    title: 'Registros IMC',
    subtitle: 'Histórico de índice de massa corporal.'
}

const baseUrl = 'http://localhost:3001/users'

const initialState = {
    user: { name: '', peso: null, altura: null, imc: null },
    list: []
}

export default class UserCrud extends Component {

    state = { ...initialState }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({ user: initialState.user });
    }

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list })
            })
    }

    getUpdateList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id)
        if (add) list.unshift(user)
        return list
    }

    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdateList(user, false)
            this.setState({ list })                   
        })        
    }

    renderTable() {
        return (
            <table className="table">
                <thead>
                    <tr>                        
                        <th>Nome</th>
                        <th>Peso</th>
                        <th>Altura</th>
                        <th>IMC</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>                    
                    <td>{user.name}</td>
                    <td>{user.peso}</td>
                    <td>{user.altura}</td>
                    <td>{user.imc}</td>
                    <td>                      
                        <button className="btn btn-danger"
                            onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {        
        console.log(this.state.list)
        return (
            <>
                <Header {...headerProps} />
                <View>                    
                    <div className="usercrud">
                        {this.renderTable()}                        
                    </div>
                </View>
            </>
        )
    }
}
