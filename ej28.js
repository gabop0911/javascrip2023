const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const result = randomInt(0, 1) === 0 ? "cara" : "cruz";
  console.log("El resultado del lanzamiento de la moneda es: " + result);
  