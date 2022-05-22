
 import './App.css';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


import HomePage from "./pages/HomePage";
import NosotrosPage from "./pages/NosotrosPage";
import ServiciosPage from "./pages/ServiciosPage";
import GaleriaPage from "./pages/GaleriaPage";
import NovedadesPage from "./pages/NovedadesPage";
import ContactoPage from "./pages/ContactoPage";

import Header from "./components/layaout/Header";
import Nav from "./components/layaout/Nav";
import Footer from "./components/layaout/Footer";

function App() {
  return (
    <Router>      
      <Header/>
      <Nav/>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/nosotros" exact component={NosotrosPage}/>
        <Route path="/servicios" exact component={ServiciosPage}/>
        <Route path="/galeria" exact component={GaleriaPage}/>
        <Route path="/novedades" exact component={NovedadesPage}/>
        <Route path="/contacto" exact component={ContactoPage}/>
      </Switch>
      <Footer/>    
    </Router> 
  );
}

export default App;
