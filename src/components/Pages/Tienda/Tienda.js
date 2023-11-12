import React, { useState, useEffect } from "react";
import "./Tienda.css";
import { helpHttp } from "../../helpers/helpHttp";
import { ListaCircular } from "../../Extra/ListaCircular";
import { bubbleSortProd } from "../../Extra/algoritmos/ordenamiento";

export function Tienda() {
  let categoriesArr = [
    {
      title: "Tecnología",
      name: "/tecnology",
    },
    {
      title: "Celulares",
      name: "/phones",
    },
    {
      title: "Moda",
      name: "/fashion",
    },
    {
      title: "Cosas del hogar",
      name: "/house",
    },
  ];
  let categories = new ListaCircular();
  categories.agregarArreglo(categoriesArr);
  const [db, setDb] = useState([]);
  const [currentCat, setCat] = useState(categories.primero);
  const [ordenAscendente, setOrdenAscendente] = useState(true);
  const [campo,setCampo] = useState("price");

  let api = helpHttp();
  let url = `http://localhost:5000${currentCat.valor.name}`;

  //peticion fetch cada que cambia la url
  useEffect(() => {
    api.get(url).then((res) => {
      console.log(res);
      if (!res.err) setDb(res);
      else setDb(null);
    });
  }, [url]);

  const moverSigCategoria = () => {
    setCat((currentCat) => currentCat.siguiente);
  };

  const moverAntCategoria = () => {
    setCat((currentCat) => currentCat.anterior);
  };

  const ordenarProd = () => {
    console.log("el boton funciona");
    let tam = db.length;
    let newDb = bubbleSortProd(db, tam, campo, ordenAscendente);
    setDb([...newDb]);
    console.log(db);
  };

  return (
    <div className="container pt-5 pb-5">
      <div className="row">
        <div className="col-12 border col-md-2">
          <h2 className="text-center">Filtros</h2>
          <div>
            <h4>Ordenar:</h4>
            <fieldset>
              <h5>De manera:</h5>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="dirOrdenamiento"
                  id="dirOrdenamiento1"
                  onChange={() => setOrdenAscendente(true)}
                  checked={ordenAscendente}
                />
                <label className="form-check-label" htmlFor="dirOrdenamiento1">
                  Ascendente
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="dirOrdenamiento"
                  id="dirOrdenamiento2"
                  onChange={() => setOrdenAscendente(false)}
                />
                <label className="form-check-label" htmlFor="dirOrdenamiento2">
                  Descendente
                </label>
              </div>
              <h5>Por:</h5>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="campoOrdenamiento"
                  id="campoOrdenamiento1"
                  onChange={() => setCampo("price")}
                  checked={campo === "price"}
                />
                <label className="form-check-label" htmlFor="dirOrdenamiento1">
                  Precio
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="campoOrdenamiento"
                  id="campoOrdenamiento2"
                  onChange={() => setCampo("name")}
                />
                <label className="form-check-label" htmlFor="dirOrdenamiento2">
                  Nombre
                </label>
              </div>
            </fieldset>
            <button onClick={ordenarProd}>Ordenar</button>
          </div>
        </div>
        <div className="col-12 col-md-10 ps-sm-5 ps-1">
          <h2>Catalogo: {currentCat.valor.title}</h2>
          <div className="d-flex justify-content-center">
            <button
              onClick={moverSigCategoria}
              type="button"
              className="btn btn-primary me-3"
            >
              siguiente
            </button>
            <button
              onClick={moverAntCategoria}
              type="button"
              className="btn btn-primary"
            >
              anterior
            </button>
          </div>
          <div className="catalogo text-center mt-5">
            {db.map((articulo) => (
              <div className="card" key={articulo.idProd}>
                <img
                  src={articulo.image}
                  className="card-img-top"
                  alt={articulo.name}
                  style={{ height: "80%" }}
                />
                <div className="card-body">
                  <p className="card-text">{articulo.name}</p>
                  <span>Precio: S/.{articulo.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
