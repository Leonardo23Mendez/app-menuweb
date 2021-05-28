import React from 'react';
import '../App';

export default function Contenido(){
    
    const menu= [{platillo:"Sopa del día", simbolo:"$", precio:30},{platillo:"Arroz (Blaco/Rojo)", simbolo:"$", precio:30},{platillo:"Alitas a la BBQ", simbolo:"$", precio:65},] 
                 console.log((menu))

    const menu1= [{platillo:"Milanesa con ensalada", simbolo:"$", precio:50},{platillo:"Tacos dorados", simbolo:"$", precio:35},{platillo:"Enchiladas", simbolo:"$", precio:40},{platillo:"Sopa azteca", simbolo:"$", precio:40},
                 {platillo:"Carne asada", simbolo:"$", precio:80},] 
                 console.log((menu1))

     const menu2= [{bebida:"Agua fresca (Horchata,Limon,Jamaica)", simbolo:"$", precio:15},{bebida:"Limonada/Naranjada)", simbolo:"$", precio:20},{bebida:"Sangría", simbolo:"$", precio:25},
                  {bebida:"Coca-Cola/Pepsi", simbolo:"$", precio:25},]             
                 console.log((menu2))

                    return(
                        <article>
                            <div align="center" botton="middle">  
                                <table>
                                    <br></br>
                                    <tr>
                                    <th colspan="2">Entradas</th>
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
                                    <th colspan="2">Plato Fuerte</th>
                                    </tr>
                                    <br></br>
                                        {menu1.map((platillo,i)=>(
                                            <tr>
                                                <td>{platillo.platillo}</td>
                                                <br></br>
                                                <td>{platillo.simbolo}</td>
                                                <td>{platillo.precio}</td>
                                            </tr>
                                        ))}  

                                    <br></br>
                                    <tr>
                                    <th colspan="2">Bebidas</th>
                                    </tr>
                                    <br></br>
                                        {menu2.map((bebida,i)=>(
                                            <tr>
                                                <td>{bebida.bebida}</td>
                                                <br></br>
                                                <td>{bebida.simbolo}</td>
                                                <td>{bebida.precio}</td>
                                            </tr>
                                        ))}       
                                </table>
                            </div>        
                        </article>
                    );
                };