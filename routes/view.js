const express = require('express'),
    router = express.Router(),
    path = require('path');

const ViewController = {
    login: (req, res) => {
        return res.sendFile(path.join(__dirname, '../views', 'login.html'));
    },

    signup: (req, res) => {
        return res.sendFile(path.join(__dirname, '../views', 'signup.html'));
    },

    admin: {
        index: (req, res) => {
            return res.sendFile(path.join(__dirname, '../views', 'admin', 'index.html'));
        },

        newEnvironment: (req, res) => {
            return res.sendFile(path.join(__dirname, '../views', 'admin', 'new-environment.html'));
        }
    }
}

module.exports = ViewController;