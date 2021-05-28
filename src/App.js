import logo from './logo.svg';
import './App.css';
import './Socialbar.css';
import Head from './Components/Head';
import Contenido from './Components/Contenido';
import Menu from './Components/Menu';
import Foot from './Components/Foot';
import Publicidad from './Components/Publicidad';

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
                <Publicidad></Publicidad>
                
                <div class="social-bar">
                  <a href="https://www.facebook.com" class="icon icon-facebook" target="_blank"><img src= 'https://image.flaticon.com/icons/png/512/747/747374.png' width="20" height="20"></img></a>
                  <a href="https://twitter.com" class="icon icon-twitter" target="_blank"><img src= 'https://image.flaticon.com/icons/png/512/2111/2111819.png' width="20" height="20"></img></a>
                  <a href="https://www.youtube.com" class="icon icon-youtube" target="_blank"><img src= 'https://image.flaticon.com/icons/png/512/1077/1077046.png' width="20" height="20"></img></a>
                  <a href="https://www.instagram.com" class="icon icon-instagram" target="_blank"><img src= 'https://image.flaticon.com/icons/png/512/1384/1384031.png' width="20" height="20"></img></a>
                </div>
            </aside>
            <Foot></Foot>
        </div>
    </body>
</html>
);
}

export default App;
