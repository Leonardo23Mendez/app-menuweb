import React from 'react';
import '../App';

export default function Contenido(){
    return(
        <article>
           <table>
                    <tr>
                    <th colspan="2">Platillos</th>
                    </tr>
                    <tr>
                        <td>Chilaquiles</td>
                        <td>$149.00</td>
                    </tr>
                    <tr>
                        <td>Birria</td>
                        <td>$199.00</td>
                    </tr>
                    <tr>
                        <td>Coctel de frutas</td>
                        <td>$99.00</td>
                    </tr>
                    <tr>
                        <td>Huevos a la mexicana</td>
                        <td>$139.00</td>
                    </tr>
                    <tr>
                        <td>Huevos ahogados</td>
                        <td>$129.00</td>
                    </tr>
                    <tr>
                        <td>Molletes</td>
                        <td>$89.00</td>
                    </tr>
                    <tr>
                        <td colspan="2">Bebidas</td>
                    </tr>
                    <tr>
                        <td>Café de olla</td>
                        <td>$69.00</td>
                    </tr>
                    <tr>
                        <td>Jugos (naranja, limon, mandarina)</td>
                        <td>$65.00</td>
                    </tr>
                    <tr>
                        <td>Atole</td>
                        <td>$25.00</td>
                    </tr>
                </table>     
        </article>
    );
};