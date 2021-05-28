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
                <img src={qr} alt=""/>
                <p>CHECA NUESTRAS PROMOCIONES</p>
                <p>Y DESCUENTOS</p>
            </center>
        </div>
    );
};
export default Publicidad;