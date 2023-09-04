import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';


function App() {
  return (
      <body>
        <Header/>
    <h1>My App in React</h1>
    <main>
      <Switch>
        <Route path="/" component={Home} />
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
