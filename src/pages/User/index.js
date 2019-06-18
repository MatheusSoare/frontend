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
    };

    render() {
        return ( 
        <div id = "main-container" >
            <form onSubmit = {this.handleSubmit}>
                <img src = "" alt = "" / >
                
            <button type = "submit" > Login </button> 
            </form > 
            </div>
        );

    }
}