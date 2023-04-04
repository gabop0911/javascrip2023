function generateSales(numProduct, sellers) {
    let products = [];
    for (let i = 0; i < numProduct; i++) {
        products.push([]);
        for (let j = 0; j < 12; j++) {
            products[i].push([]);
            let sales = Math.floor(Math.random() * 5) + 1;
            for (let k = 0; k < sales; k++) {
                products[i][j].push({
                    seller: sellers[Math.floor(Math.random() * sellers.length)],
                    sale: Math.random() * 150
                });
            }
        }
    }
    return products;
}

let months = [
    'Enero', 'Febrero',
    'Marzo', 'Abril', 'Mayo',
    'Junio', 'Julio', 'Agosto',
    'Septiembre', 'Octubre',
    'Noviembre', 'Diciembre'
];

let sellers = ['Pancho', 'Torres', 'Marta']
let sales = generateSales(4, sellers);

sales.forEach((product, index) => {
    console.log(`Ventas producto ${index}`);
    product.forEach((month, index) => {
        let total = month.reduce((acc, current) => {
            return acc + current.sale
        }, 0);
        console.log(`${months[index]} : ${total}`);
    });
    console.log('\n');
});