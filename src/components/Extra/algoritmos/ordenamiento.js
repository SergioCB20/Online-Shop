export function bubbleSortProd(arrProd, n = arrProd.length, campo, dir = true) {
  if (n === 1) {
    return arrProd;
  }

  dir
    ? (arrProd = ordenarAsc(arrProd, campo, n))
    : (arrProd = ordenarDes(arrProd, campo, n));

  // Llamar recursivamente con un tamaño de arreglo reducido
  return bubbleSortProd(arrProd, n - 1, campo,dir);
}

function ordenarAsc(arrProd, campo, n) {
  for (let i = 0; i < n - 1; i++) {
    if (arrProd[i][campo] > arrProd[i + 1][campo]) {
      // Realizar el intercambio
      console.log("ordenando ascendentemente")
      let temp = arrProd[i];
      arrProd[i] = arrProd[i + 1];
      arrProd[i + 1] = temp;
    }
  }
  return arrProd;
}

function ordenarDes(arrProd, campo, n) {
  for (let i = 0; i < n - 1; i++) {
    if (arrProd[i][campo] < arrProd[i + 1][campo]) {
      // Realizar el intercambio
      console.log("Ordenando descendente");
      let temp = arrProd[i];
      arrProd[i] = arrProd[i + 1];
      arrProd[i + 1] = temp;
    }
  }
  return arrProd;
}
