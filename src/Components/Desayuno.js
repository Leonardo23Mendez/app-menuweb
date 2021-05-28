import React from 'react';
import '../App';

export default function Contenido(){
    
    const menu= [{platillo:"Chilaquiles", simbolo:"$", precio:149},{platillo:"Sandwich", simbolo:"$", precio:35},{platillo:"Birria", simbolo:"$", precio:80},{platillo:"Coctel de frutas", simbolo:"$", precio:40},
                 {platillo:"Huevo a la mexicana", simbolo:"$", precio:35},{platillo:"Huevos ahogados", simbolo:"$", precio:45},{platillo:"Molletes", simbolo:"$", precio:45},] 
                 console.log((menu))

    const menu1= [{bebida:"Café de olla", simbolo:"$", precio:15},{bebida:"Jugo (Naranja,Limon,Mandarina)", simbolo:"$", precio:20},{bebida:"Atole (Chocolate,Cajeta,Galleta)", simbolo:"$", precio:15},
                 {bebida:"Licuado (Chocolate,Platano,Fresa,Mamey,Avena)", simbolo:"$",  precio:25},{bebida:"Té", simbolo:"$", precio:10},]             
                 console.log((menu1))

                    return(
                        <article>
                            <div align="center" botton="middle">  
                                <table>
                                    <br></br><br></br>
                                    <tr>
                                    <th colspan="2">Platillos</th>
                                    </tr>
                                    <br></br>
                                        {menu.map((platillo,i)=>(
                                            <tr>
                                                <td>{platillo.platillo}</td>
                                                <td>{platillo.simbolo}</td>
                                                <td>{platillo.precio}</td>
                                            </tr>
                                         ))}

                                    <br></br>
                                    <tr>
                                        <th colspan="2">Bebidas</th>
                                    </tr>
                                    <br></br>
                                        {menu1.map((bebida,i)=>(
                                            <tr>
                                                <td>{bebida.bebida}</td>
                                                <td>{bebida.simbolo}</td>
                                                <td>{bebida.precio}</td>
                                            </tr>
                                        ))}    
                                </table>
                            </div>        
                        </article>
                    );
                };