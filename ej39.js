const numRows = 4;
const numCols = 5;
const numPages = 3;
let currentValue = 1;

for (let page = 1; page <= numPages; page++) {
  console.log(`Página ${page}:`);

  for (let row = 1; row <= numRows; row++) {
    let rowValues = [];

    for (let col = 1; col <= numCols; col++) {
      rowValues.push(currentValue);
      currentValue++;
    }

    console.log(rowValues.join("\t"));
  }
  
  console.log("\n");
}
