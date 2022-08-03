// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let suma = [];
  for (const key in objeto) {
    x = [key, objeto[key]];
    suma.push(x);
  }
  return suma;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí
  x = Array.from(string);

  repetidos = {};
  x.forEach(function (letra) {
    repetidos[letra] = (repetidos[letra] || 0) + 1;
  });
  return repetidos;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayuscula = "";
  var minuscula = "";
  for (i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      mayuscula = mayuscula + s[i];
    } else {
      minuscula = minuscula + s[i];
    }
  }
  return mayuscula + minuscula;
}

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  string = str.split(" ");
  alReves = "";
  for (let index = 0; index < string.length; index++) {
    var separarCadena = string[index].split("");
    var invertirArreglo = separarCadena.reverse();
    var unirArreglo = invertirArreglo.join("");
    alReves = alReves + " " + unirArreglo;
  }
  return alReves.trim();
}

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  num = numero + "";
  var separarCadena = num.split("");
  var invertirArreglo = separarCadena.reverse();
  var unirArreglo = invertirArreglo.join("");
  result = parseInt(unirArreglo);
  if (result === numero) {
    return "Es capicua";
  }
  return "No es capicua";
}

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  nuevaCadena = "";
  for (let index = 0; index < cadena.length; index++) {
    if (cadena[index] != "a" && cadena[index] != "b" && cadena[index] != "c") {
      nuevaCadena = nuevaCadena + cadena[index];
    }
  }
  return nuevaCadena;
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  array = arr.sort((a, b) => a.length - b.length);
  return array;
}

function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  function comparar(a, b) {
    return a - b;
  }
  result = [];
  arr1 = arreglo1.sort(comparar);
  arr2 = arreglo2.sort(comparar);
  if (arr1.length > arr2.length) {
    for (let index = 0; index < arr1.length; index++) {
      if (arr2.includes(arr1[index])) {
        result.push(arr1[index]);
      }
    }
  } else {
    for (let index = 0; index < arr2.length; index++) {
      if (arr1.includes(arr2[index])) {
        result.push(arr2[index]);
      }
    }
  }

  return result;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
