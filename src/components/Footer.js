import React, { Component } from 'react';
import { FaLinkedin, FaGithub, FaBehance } from 'react-icons/fa';

export default class Footer extends Component {
    render () {
        return (
            <section id="footer">
                <div class="footer-socials">
                    <a href="https://www.linkedin.com/in/kx-shi"><FaLinkedin /></a>
                    <a href="https://www.github.com/kx-shi"><FaGithub /></a>
                    <a href="https://www.behance.net/kxshi"><FaBehance /></a>
                </div>
            </section>
        )
    }
}