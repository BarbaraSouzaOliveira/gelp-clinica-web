import React, { useState } from "react";

function Exemple() {
  const [valorInput, setValorInput] = useState("");
  const [contador, setContador] = useState(0);

  const handleInputChange = (event) => {
    setValorInput(event.target.value);
  };

  const handleButtonClick = () => {
    setContador(contador + 1);
  };

  return (
    <div className="left-ajust-menu">
      <label>
        Input:
        <input type="text" value={valorInput} onChange={handleInputChange} />
      </label>
      <br />
      <label>Valor do Input: {valorInput}</label>
      <br />
      <button onClick={handleButtonClick}>Clique-me</button>
      <br />
      <label>Contador: {contador}</label>
    </div>
  );
}

export default Exemple;
