import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  //State
  const [products, setProducts] = useState([
    {
      id: 6,
      title: "Arete con Visos Cruzado",
      price: 120000,
      description:
        "Aretes en 2 oros de 18 kilates con visos satinado, rombo, 0.50 mm. de ancho",
      category: "Aretes",
      image: "https://kevins.com.co/img/productos/zoom/5247701034.jpg",
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
    {
      id: 170000,
      title: "Anillo Mapa Brujula ",
      price: 180000,
      description: "Anillo en oro amarillo de 18 kilates",
      category: "Anillos",
      image: "https://kevins.com.co/img/productos/0110001116.jpg",
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
    {
      id: 2,
      title: "Dije Gota con Zircones",
      price: 200000,
      description:
        "Dije en plata ley 925, onda, con cristal central y decoración en zircones, 18 mm. de ancho, de la coleccion sueños",
      category: "Dijes",
      image: "https://kevins.com.co/img/productos/zoom/0870026018.jpg",
      rating: {
        rate: 3.9,
        count: 70,
      },
    },

    {
      id: 61,
      title: "Cadena Plateada Lazado",
      price: 130000,
      description:
        "Cadena en plata ley 925, rolo, 60 cm. de largo, 4 mm. de ancho",
      category: "Cadenas",
      image: "https://kevins.com.co/img/productos/zoom/0570001436.jpg",
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
    {
      id: 611,
      title: "Arete rojo Arboreal",
      price: 230000,
      description:
        "Aretes en oro rojo de 18 kilates, con rubis de 2.17 ct y diamantes de 0.06 ct",
      category: "Aretes",
      image: "https://kevins.com.co/img/productos/zoom/0230004038.jpg",
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
    {
      id: 116,
      title: "Collar Arbol Gargantilla",
      price: 169000,
      description:
        "Gargantilla en oro amarillo de 18 kilates, rolo, 42 cm. de largo, 1 mm. de ancho",
      category: "Collares",
      image: "https://kevins.com.co/img/productos/zoom/1010001049.jpg",
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
    {
      id: 11698,
      title: "Dije Estralla con Zircones",
      price: 200000,
      description: "Dije en oro amarillo de 18 kilates, estrella, con zircones",
      category: "Dijes",
      image: "https://kevins.com.co/img/productos/0810010018.jpg",
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
    {
      id: 111116,
      title: "Dije Escudo con Aguila",
      price: 175000,
      description: "Dije en oro amarillo de 18 kilates",
      category: "Dijes",
      image: "https://kevins.com.co/img/productos/0810002046.jpg",
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
    {
      id: 61123240,
      title: "Dije Cruz Ondulado",
      price: 210000,
      description:
        "Cruz en plata ley 925, moderna, con zircones, de la coleccion sueños",
      category: "Dijes",
      image: "https://kevins.com.co/img/productos/zoom/0770001018.jpg",
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
    {
      id: 63333,
      title: "Anillo Dorian Laze",
      price: 130000,
      description: "Anillo en oro amarillo de 18 kilates",
      category: "Anillos",
      image: "https://kevins.com.co/img/productos/zoom/0110001046.jpg",
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
    {
      id: 644,
      title: "Collar Dos Corazones",
      price: 170000,
      description:
        "Gargantilla en oro amarillo de 18 kilates, corazones, con diamantes de 0.10 ct, 40 cm. de largo, 0.50 mm. de ancho",
      category: "Collares",
      image: "https://kevins.com.co/img/productos/zoom/1010009020.jpg",
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
    {
      id: 655,
      title: "Dije Trebol",
      price: 100000,
      description: "Dije en oro amarillo de 18 kilates, trebol",
      category: "Dijes",
      image: "https://kevins.com.co/img/productos/zoom/5815102005.jpg",
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
    {
      id: 6111111111,
      title: "Aretes Franjas Cruzado",
      price: 115000,
      description:
        "Aretes en plata ley 925, franjas, con zircones, de la coleccion sueños",
      category: "Aretes",
      image: "https://kevins.com.co/img/productos/zoom/0270014026.jpg",
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
    {
      id: 61111001111,
      title: "Anillo Estrella Azul",
      price: 215000,
      description:
        "Anillo en oro amarillo de 18 kilates, con zafiros de 2.01 ct y diamantes de 0.19 ct",
      category: "Anillo",
      image: "https://kevins.com.co/img/productos/0110009036.jpg",
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
    {
      id: 6111011111,
      title: "Pulsera Sheika",
      price: 70000,
      description:
        "Pulsera en oro amarillo de 18 kilates, 19 cm. de largo, 2 mm. de ancho",
      category: "Pulseras",
      image: "https://kevins.com.co/img/productos/1310010043.jpg",
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
  ]);
  //Fetch

  /*   useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!INYECT PRODUCTS MISTIC!!!!!!!!!!!!!!!!!!!!!!!
      //console.log(data); //This format
      setProducts(data);
    };
    fetchProducts();
  }, []); */

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
