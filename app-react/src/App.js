import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Fichas from "./components/Fichas/Fichas";
import Categorias from "./components/Categorias/Categorias";
import Footer from "./components/Footer/Footer";
import Cards from "./components/Cards/Cards"


function App() {
  const personajes = [
    {
        img: 'ahsoka.jpg',
        name: 'Ashoka',
        description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
        extra: 'StarWars',
    }, 
    {
        img: 'anakin.jpg',
        name: 'Anakin',
        description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
        extra: 'StarWars',
    },  {
      img: 'batman.jpg',
      name: 'Batman',
      description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
      extra: 'DC Comics',
    },
    {
        img: 'hulkSmall.jpg',
        name: 'Hulk',
        description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
        extra: 'Marvel',
    },
    {
        img: 'kyloRen.jpg',
        name: 'Kylo Ren',
        description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia ', 
        extra: 'DC Comics',
      },
      {
          img: 'hulkSmall.jpg',
          name: 'Hulk',
          description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
          extra: 'Marvel',
      },
      {
          img: 'kyloRen.jpg',
          name: 'Kylo Ren',
          description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
          extra: 'StarWars',
      },       
  ]; 
  
  

  return (

   <body>
    
    <Navbar/>
    <h1>My App in React</h1>
    <main>
        <section className="top-data">
        <Fichas/>
        <Fichas/>
        <Fichas/>
        </section>
        <h2>Categories in database</h2>
        <section class="general-data">
          <Categorias/>
          <Categorias/>
          <Categorias/>
         
        </section>
        <h1>Personajes</h1>
        <section  className="card-container">
      {personajes.map((personaje, idx)=> <Cards name={personaje.name} descripcion={personaje.description} imagen={personaje.img}/>)}
      </section>
        </main>
        <Footer/>
   </body>
  );
}

export default App;


