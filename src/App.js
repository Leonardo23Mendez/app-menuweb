import logo from './logo.svg';
import './App.css';
import './Socialbar.css';
import Head from './Components/Head';
import Contenido from './Components/Contenido';
import Foot from './Components/Foot';
import Publicidad from './Components/Publicidad';
import Comida from './Components/Comida';
import Desayuno from './Components/Desayuno';
import Inicio from './Components/Inicio';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function App() {
  return (
<html>
    <head>
        <title>HOME</title>
    </head>
    <body>
        <div id="contenedor">

            <Head></Head>
                    <Router>
                        <div>
                            <nav>
                            <div id="header">
                                <ul class="nav logo-nav-container">
                                    <li><Link to="/INICIO">INICIO</Link></li>
                                    <li><Link to="/DESAYUNO">DESAYUNO</Link></li>
                                    <li><Link to="/COMIDA">COMIDA</Link></li>
                                </ul>
                                </div>
                            </nav>
                            <Switch>
                            <Route path="/INICIO">
                                    <section id="contenido1"><Inicio></Inicio></section>
                                </Route>
                                <Route path="/DESAYUNO">
                                    <section id="contenido"><Desayuno></Desayuno></section>
                                </Route>
                                <Route path="/COMIDA">
                                    <section id="contenido"><Comida></Comida></section>
                                </Route>
                            </Switch>
                        </div>
                    </Router>

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
