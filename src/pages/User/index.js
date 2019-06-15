import React, {
    Component
} from 'react';
import api from '../../services/api';
import sha256 from 'crypto-js/sha256';

import './styles.css';
// import { Container } from './styles';

const CryptoJS = require('crypto-js');
const NodeRSA = require('node-rsa');
const key = new NodeRSA({b: 512});

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

        var encryptedName = key.encrypt(username.value, 'base64');
        var encryptedEmail = key.encrypt(email.value, 'base64');

        var hashPassword = CryptoJS.SHA256(email.value+password.value);
        var resultPassword = hashPassword.toString(CryptoJS.enc.Hex);

        var encryptedPass = key.encrypt(resultPassword, 'base64');

        // var decrypted = key.decrypt(encrypted, 'utf8');

        

        
        
        // console.log(this.state.newBox);
        const response = await api.post('users', {
            username: encryptedName,
            password: encryptedPass,
            email: encryptedEmail,
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