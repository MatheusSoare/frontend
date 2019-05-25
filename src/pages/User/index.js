import React, {
    Component
} from 'react';
import api from '../../services/api';
import sha256 from 'crypto-js/sha256';

import './styles.css';
// import { Container } from './styles';

export default class User extends Component {
    state = {
        newUser: '',
        newPassword: '',
        newEmail: ''
    };

    

    handleSubmit = async e => {
        e.preventDefault();
        // console.log(this.state.newBox);
        const response = await api.post('users', {
            username: this.state.newUser,
            password: this.state.newPassword,
            email: this.state.newEmail
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
                <input
                    placeholder="Usuário" 
                    value={this.state.newUser}
                    onChange={this.handleInputChange}
                />
                <input
                    placeholder="Senha"
                    type="password"
                    value={this.state.newPassword}
                    onChange = {this.handleInputChangePassword}
                /> 
                <input
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

  teste() {
      sha256(this.newPassword);
      console.log(this.newPassword)
  }
}