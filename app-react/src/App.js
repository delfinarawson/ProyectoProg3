import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Route, Switch} from 'react-router-dom';
import Detalle from "./screens/Detalle/Detalle";
import Favoritos from "./screens/Favoritos/Favoritos";
import Home from "./screens/Home/Home";
import Popular from "./screens/Popular/Popular";
import Upcoming from "./screens/Upcoming/Upcoming";


function App() {
  return (
      <body>
        <Header/>
    <h1>My App in React</h1>
    <main>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/favoritos" component={Favoritos} />
        <Route path="/detalle" component={Detalle} />
        <Route path="/popular" component={Popular} />
        <Route path="/upcoming" component={Upcoming} />
      </Switch>
    </main>
  <Footer/>
    </body>
  );
}

export default App;
