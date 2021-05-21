import logo from './logo.svg';
import './App.css';
import './Socialbar.css';
import Head from './Components/Head';
import Contenido from './Components/Contenido';
import Menu from './Components/Menu';
import Foot from './Components/Foot';

function App() {
  return (
<html>
    <head>
        <title>HOME</title>
    </head>
    <body>
        <div id="contenedor">
            <Head></Head>
            <Menu></Menu>
            <section id="contenido">
                <Contenido></Contenido>
            </section>
            <aside>
                <h2>PUBLICIDAD</h2>

                <div class="social-bar">
                  <a href="https://www.facebook.com" class="icon icon-facebook" target="_blank"><img src= 'https://img-premium.flaticon.com/png/512/747/747374.png?token=exp=1620999070~hmac=6faaee245b33871f6f6a9da7ee73b329' width="20" height="20"></img></a>
                  <a href="https://twitter.com" class="icon icon-twitter" target="_blank"><img src= 'https://img-premium.flaticon.com/png/512/747/747453.png?token=exp=1620999062~hmac=acead89585b49c1046adc3d0f5f882a8' width="20" height="20"></img></a>
                  <a href="https://www.youtube.com" class="icon icon-youtube" target="_blank"><img src= 'https://img-premium.flaticon.com/png/512/747/747458.png?token=exp=1620999070~hmac=5100175640f6f18d7b82e5daad315fd7' width="20" height="20"></img></a>
                  <a href="https://www.instagram.com" class="icon icon-instagram" target="_blank"><img src= 'https://img-premium.flaticon.com/png/512/747/747393.png?token=exp=1620999070~hmac=3df3e859923ce213eea5e0ad2c34e58f' width="20" height="20"></img></a>
                </div>
            </aside>
            <Foot></Foot>
        </div>
    </body>
</html>
);
}

export default App;
