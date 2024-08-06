import axios from "axios";
import { useEffect, useState } from "react";
import Pizza from "./Pizza";

function Menu() {
  const [pizzas, setPizzas] = useState([]);
  const numPizza = pizzas.length;

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/pizza")
      .then((pizzas) => setPizzas(pizzas.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizza > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. {numPizza} creative dishes to choose
            from. All from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizzaData) => (
              <Pizza pizzaObj={pizzaData} key={pizzaData._id} />
            ))}
          </ul>
        </>
      ) : (
        0
      )}
      <p>We're still working on our menu. Please come back later :)</p>
    </main>
  );
}

export default Menu;
