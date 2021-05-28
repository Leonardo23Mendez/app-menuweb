import React, { useState, useEffect } from 'react';
import '../App';
import '../App.css';
import '../Socialbar.css';

function Publicidad() {
    const[qr, setQr] = useState(null)
    const[menuUrl, setMenuUrl] = useState('https://www.vips.com.mx')

    useEffect(() => {

    async function FetchQrCode() {
      const response = await fetch('http://api.qrserver.com/v1/create-qr-code/?data=' + menuUrl + '&size=100x100')
      const body = await response.body
      const stream = await body.getReader();
      const data = await stream.read()
      const done = await data.value
      const blob = new Blob([done.buffer], { type: 'image/png' } /* (1) */)
      const img = URL.createObjectURL(blob)
      setQr(img)
    }
    // Antes de montarse el componente
    FetchQrCode()
  }, [])
    return (
        <div className="App">
            <center>
                <br></br>
                <img src={qr} alt=""/>
                <p>CHECA NUESTRAS PROMOCIONES</p>
                <p>Y DESCUENTOS</p>
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <a href="https://www.cocinafacil.com.mx/" class="icon icon-revista" target="_blank">VISITA NUESTRA REVISTA DE RECETAS</a><img src= 'https://image.flaticon.com/icons/png/512/858/858929.png' width="100" height="100"></img>
            </center>
        </div>
    );
};
export default Publicidad;