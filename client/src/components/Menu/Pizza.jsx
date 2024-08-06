function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  return (
    <div>
      {" "}
      <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
        <div>
          <h3>{pizzaObj.name}</h3>
          <p>{pizzaObj.ingredients}</p>

          {/* {pizzaObj.soldOut ? (
            <span>SOLD OUT</span>
          ) : (
            <span>{pizzaObj.price}</span>
          )} */}

          <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
        </div>
      </li>
    </div>
  );
}

export default Pizza;
