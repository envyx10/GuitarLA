
import { useState} from "react";

import "./App.css";
import Header from "./Components/Header";
import Guitar from "./Components/Guitar";
import { db } from './data/db';

function App() {

  const [data, setData] = useState(db);

  /*
  · Inicializa varaible de estado llamada cart
  · Su valor iniciar es un array vacio, lo que significa que de base comienza sin ningún elemento
  · cart contendrá los elementos que están actualmente en el carrito de compras del usuario, y setCart es la función utilizada para actualizar cart
  */
  const [cart, setCart] = useState([]);

  /**
   * Funcion diseñada para agregar un item al cart
   * · Usa la función setCart (de useState) para actualizar el estado de cart.
   * · prevCart => ... es una función de callback que recibe el estado anterior del cart (prevCart) como argumento. Esta es la forma recomendada de actualizar 
   *   el estado cuando el nuevo estado depende del estado anterior.
   * · [...prevCart, item] usa la sintaxis de propagación (...) para crear un nuevo array. 
   *   Este nuevo array contiene todos los elementos que estaban previamente en prevCart, más el nuevo item que se pasó a la función addToCart.
   * · Al crear un nuevo array, React detecta que el estado ha cambiado y volverá a renderizar el componente para reflejar el carrito actualizado.
   * @param {*} item 
   */
  function addToCard(item){
    setCart( prevCart => [...prevCart, item])
  }


  return (
    <>
      <Header />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">

          { data.map((guitar) => ( 
            <Guitar 
              key={guitar.id}
              guitar={guitar}
              addToCard={addToCard} // props de la funcion
              setCart={setCart}
            /> 
          ))}

        </div>

      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
