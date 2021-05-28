import React from 'react';
import '../App';

export default function Foot(){
    return(
        <footer>
            <section class="ft-legal">
                <ul class="ft-legal-list">
                    <img src= 'https://image.flaticon.com/icons/png/512/2817/2817912.png' width="30" height="30"></img>
                    <li><a href="https://www.patrimoniocultural.gob.cl/614/w3-article-29742.html?_noredirect=1">Terminos y Condiciones</a></li>
                    <li><a href="https://www.ilo.org/global/privacy-policy/lang--es/index.htm">Politica de Privacidad</a></li>
                    <li>&copy; RATATOUILLE 2021</li>
                </ul>
            </section>        
        </footer>
    );
};