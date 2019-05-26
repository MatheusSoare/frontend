import React, {
    Component
} from 'react';
import api from '../../services/api';
import sha256 from 'crypto-js/sha256';

import './styles.css';
// import { Container } from './styles';

const CryptoJS = require('crypto-js');

export default class User extends Component {
    state = {
        newUser: '',
        newPassword: '',
        newEmail: ''
    };

    

    handleSubmit = async e => {
        e.preventDefault();

        var username = document.getElementById("username");
        var password = document.getElementById("password");
        var email = document.getElementById("email");

        var hashName = CryptoJS.SHA256(username.value);
        var hashPassword = CryptoJS.SHA256(password.value);
        var hashEmail = CryptoJS.SHA256(email.value);

        var resultName = hashName.toString(CryptoJS.enc.Hex);
        var resultPassword = hashPassword.toString(CryptoJS.enc.Hex);
        var resultEmail = hashEmail.toString(CryptoJS.enc.Hex);
        
        // console.log(this.state.newBox);
        const response = await api.post('users', {
            username: resultName,
            password: resultPassword,
            email: resultEmail,
        });
        console.log(response);
        this.props.history.push(`/users/${response.data._id}`);
    };

    handleInputChange = (e) => {
        this.setState({
            newUser: e.target.value
        });
    }

    handleInputChangePassword = (e) => {
        this.setState({
            newPassword: e.target.value
        })
    }

    handleInputChangeEmail = (e) => {
        this.setState({
            newEmail: e.target.value
        })
    }

    render() {
    return (
        <div id="main-container">
            <form onSubmit={this.handleSubmit}>
                <img src="" alt=""/>
                <input id="username"
                    placeholder="Usuário" 
                    value={this.state.newUser}
                    onChange={this.handleInputChange}
                />
                <input id="password"
                    placeholder="Senha"
                    type="password"
                    value={this.state.newPassword}
                    onChange = {this.handleInputChangePassword}
                /> 
                <input id="email"
                    placeholder="E-mail"
                    type="email"
                    value={this.state.newEmail}
                    onChange={this.handleInputChangeEmail}
                /> 
                
                <button type="submit">Criar</button>
            </form>
        </div>
    );
    
  }
}