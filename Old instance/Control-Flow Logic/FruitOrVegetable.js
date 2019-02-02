function fruitOrVegetable(str) {
    let fruits = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes', 'peach'];
    let veggies = ['tomato', 'cucumber', 'pepper', 'onion', 'garlic', 'parsley'];

    if (fruits.includes(str)) {
        console.log('fruit');
    } else if (veggies.includes(str)) {
        console.log('vegetable');
    } else {
        console.log('unknown');
    }
}

fruitOrVegetable('tomato');