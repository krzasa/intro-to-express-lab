// Import Express 
const express = require('express')

//create an Express app
const app = express()

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

  const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];
// Exercise 1
// app.get('/greetings/:name', (req,res) =>{
//     res.send(`Hello there ${req.params.name}`)
    
// })
//http://localhost:3000/greetings/Christy


//Exercise 2
// app.get('/roll/:number', (req,res) =>{
//     if(Number.isInteger(parseInt(req.params.number))){
//         let num = Math.floor(Math.random() * parseInt(req.params.number)) + 1;
//     res.send(`You rolled a ${num}`)
//     } else {
//         res.send(`You must specify a number`)
//     }
// })
//http://localhost:3000/roll/30

// Exercise 3 

// app.get('/collectibles/:ind', (req,res) =>{
//     if(parseInt(req.params.ind) <= collectibles.length ){
//         let numArr = parseInt(req.params.ind)-1 // -1 because the array starts at zero
//     res.send(`So you want the ${collectibles[numArr].name}? For ${collectibles[numArr].price}, it can be yours!`)
//     } else {
//         res.send(`This item is not yet in stock. Check back soon!`)
//     }
// })
// http://localhost:3000/collectibles/5

//Exercise 4 

app.get('/shoes', (req,res) =>{
    let filt = []
    let minP = parseInt(req.query.minPrice)
    let maxP = parseInt(req.query.maxPrice)
    let type = req.query.type
    if (Object.keys(req.query) != 0){  // checks if the url has queries or not
        shoes.forEach( shoe => {
            // res.send(shoe)
            // console.log(minP);
            // console.log(maxP);
            // console.log(shoe.type === type);
            // res.send(minP + maxP + type)
            if (minP <= shoe.price  && maxP >= shoe.price && type === shoe.type ){
                filt.push(shoe)
            } 
            })

        } else {  // if no queries then just returns the entire list of shoes 
            filt = shoes
        }
        res.send(filt) // returns the filtered list 
});
// http://localhost:3000/shoes?minPrice=10&maxPrice=2000&type=sneaker


    



app.listen(3000, () => {
    console.log('Listening on port 3000');
})




// if (req.query.type === "boot" && shoe.type === 'boot'){
//     res.send(shoe)
// }
// if (req.query.type === "heel" && shoe.type === 'heel'){
//     res.send(shoe)
// }
// if (req.query.type === "sandal" && shoe.type === 'sandal'){
//     res.send(shoe)
// } 
// if (req.query.type === "sneaker" && shoe.type === 'sneaker'){
//     res.send(shoe)
// }
// res.send(shoe)

// if(req.query.minPrice <= shoe.price  ) {
//     res.send(shoe)
//     } 
//     })

// shoes.forEach( shoe => {
//     if(req.query.maxPrice >= shoe.price ) {
//         res.send(shoe)
//      }
//     })
//     shoes.forEach( shoe => {
//         if (req.query.type === "boot" && shoe.type === 'boot'){
//             res.send(shoe)
//         }
//         })
//     shoes.forEach( shoe => {
//         if (req.query.type === "heel" && shoe.type === 'heel'){
//             res.send(shoe)
//         }
//         })
//     shoes.forEach( shoe => {
//         if (req.query.type === "sandal" && shoe.type === 'sandal'){
//             res.send(shoe)
//         } 
//         })
//     shoes.forEach( shoe => {
//         if (req.query.type === "sneaker" && shoe.type === 'sneaker'){
//             res.send(shoe)
//         }
//         })
    
//         res.send(shoes)