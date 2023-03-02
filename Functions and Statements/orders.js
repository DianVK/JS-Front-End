function simpleCalculator(product, count) {
    const prices = {
        coffee: 1.50,
        water: 1.00,
        coke: 1.40,
        snacks: 2.00
      };
      console.log(`${(prices[product] * count).toFixed(2)}`)
}

simpleCalculator("water", 5)