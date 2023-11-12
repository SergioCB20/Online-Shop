// Definición del nodo
class Nodo {
    constructor(valor) {
      this.valor = valor;
      this.siguiente = null;
      this.anterior = null;
    }
  }
  
  // Definición de la lista circular
  export class ListaCircular {
    constructor() {
      this.primero = null;
      this.ultimo = null;
      this.tamanio = 0;
    }
  
    // Método para agregar un nodo al final de la lista
    agregar(valor) {
      const nuevoNodo = new Nodo(valor);
  
      if (!this.primero) {
        // Si la lista está vacía, el nuevo nodo será el primero y el último
        this.primero = nuevoNodo;
        this.ultimo = nuevoNodo;
      } else {
        // Si la lista no está vacía, el nuevo nodo se enlaza al último y se convierte en el nuevo último
        this.primero.anterior = nuevoNodo
        this.ultimo.siguiente = nuevoNodo;
        nuevoNodo.anterior = this.ultimo;
        this.ultimo = nuevoNodo;
      }

      // Enlaza el último nodo al primero para formar la lista circular
      this.ultimo.siguiente = this.primero;
      //aumenta el tamaño de la lista
      this.tamanio++;
    }
  
    //Método para buscar agregar un arreglo elemento por elemento a la lista
    agregarArreglo(arr){
      arr.forEach(categorie => {
        this.agregar(categorie)
      });
    }
  }
  
