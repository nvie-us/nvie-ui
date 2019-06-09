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
        },

        viewEnvironment: (req, res) => {
            return res.sendFile(path.join(__dirname, '../views', 'admin', 'view-environment.html'));
        },

        getAvailableStuff: (req, res) => {
            return res.json({
                operatingSystems: [
                    {
                        logo: 'https://assets.ubuntu.com/v1/57a889f6-ubuntu-logo112.png',
                        versions: ['18.04', '17.3.2', '16.3.2', '15.2.2', '19.1.1'],
                        label: 'ubuntu'
                    },
                    {
                        logo: 'https://fontmeme.com/images/Fedora-Logo.jpg',
                        versions: ['18.0.1', '17.3.2', '16.3.2', '15.2.2', '19.1.1'],
                        label: 'fedora'
                    },
                    {
                        logo: 'https://pentagram-production.imgix.net/ea053844-c063-4130-9425-4a193f82e1e3/ps_windows_01.jpg?rect=67%2C364%2C1665%2C1040&w=880&fit=crop&fm=jpg&q=70&auto=format&h=548',
                        versions: ['7', '8', '10', 'XP', '95'],
                        label: 'windows'
                    },
                    {
                        logo: 'https://s24255.pcdn.co/wp-content/uploads/2016/12/centos-logo.png',
                        versions: ['18.0.1', '17.3.2', '16.3.2', '15.2.2', '19.1.1'],
                        label: 'centos'
                    },
                    {
                        logo: 'https://www.ateamsystems.com/wp-content/uploads/2016/11/freebsd-logo.png',
                        versions: ['18.0.1', '17.3.2', '16.3.2', '15.2.2', '19.1.1'],
                        label: 'freebsd'
                    }
                ],
                binaries: [
                    {
                        logo: 'https://ih1.redbubble.net/image.109336634.1604/flat,550x550,075,f.u1.jpg',
                        versions: ['8.10.0', '12.3.1', '7.3.1', '6.10.0'],
                        label: 'nodejs'
                    },
                    {
                        logo: 'https://www.xploreitcorp.com/wp-content/uploads/2017/10/python-logo-310x310.png',
                        versions: ['3.1', '2.7'],
                        label: 'python'
                    },
                    {
                        logo: 'https://authy.com/wp-content/uploads/npm-logo.png',
                        versions: ['6.1', '6.0'],
                        label: 'npm'
                    },
                    {
                        logo: 'https://blog.newrelic.com/wp-content/uploads/redis.png',
                        versions: ['7', '8', '10', 'XP', '95'],
                        label: 'redis'
                    },
                    {
                        logo: 'https://spng.pngfly.com/20180802/afy/kisspng-mysql-logo-database-join-portable-network-graphics-lee-qixian-about-me-5b632d901b3ba4.3877836315332263841116.jpg',
                        versions: ['18.0.1', '17.3.2', '16.3.2', '15.2.2', '19.1.1'],
                        label: 'mysql'
                    },
                    {
                        logo: 'https://dreamlogic.io/img/brands/logos/lamp.png',
                        versions: ['18.0.1', '17.3.2', '16.3.2', '15.2.2', '19.1.1'],
                        label: 'lamp'
                    },
                    {
                        logo: 'https://www.ateamsystems.com/wp-content/uploads/2016/11/freebsd-logo.png',
                        versions: ['18.0.1', '17.3.2', '16.3.2', '15.2.2', '19.1.1'],
                        label: 'phpmyadmin'
                    }
                ]
            })
        }
    },

    member: {
        index: (req, res) => {
            return res.sendFile(path.join(__dirname, '../views', 'member', 'index.html'));
        },

        viewEnvironment: (req, res) => {
            return res.sendFile(path.join(__dirname, '../views', 'member', 'view-environment.html'));
        }
    },

    team: (req, res) => {
        return res.sendFile(path.join(__dirname, '../views', 'team.html'));
    }
}

module.exports = ViewController;