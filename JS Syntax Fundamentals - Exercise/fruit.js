function fruitCosts(fruitType, grams, pricePerKG) {
    let costs = (grams * 10) * pricePerKG
    console.log(`I need $${(costs / 10000).toFixed(2)} to buy ${(grams / 1000).toFixed(2)} kilograms ${fruitType}.`)

}