import { useState } from "react";

export default function App() {
  const [v, setV] = useState("");
  const [lista, setLista] = useState([]);
  const n = Number(v);

  // validación simple
  const esNum = v.trim() !== "" && !isNaN(n);

  const agregar = () => {
    if (!esNum) return alert("Debe ingresar un número");
    setLista([...lista, n]); // agrega el número a la tabla
    setV("");                // limpia el input
  };

  return (
    <div>
      <h1>Hernández Sánchez Steven</h1>

      <input value={v} onChange={e => setV(e.target.value)} />
      <button onClick={agregar}>Agregar</button>

      <p>{esNum ? "Número válido" : "No es un número"}</p>

      {lista.length > 0 && (
        <>
          <p>Último valor: {lista[lista.length - 1]}</p>
          <table border="2" style={{ borderColor: "red" }}>
            <thead>
              <tr>
                <th>#</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {lista.map((x, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{x}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
