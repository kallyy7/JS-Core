function sumByTown(arr) {
    let towns = {};
    let town, income;

    for (let index = 0; index < arr.length; index += 2) {
        town = arr[index];
        income = Number(arr[index + 1]);

        if (towns.hasOwnProperty(town)) {
            towns[town] += income;
        } else {
            towns[town] = income;
        }
    }

    console.log(JSON.stringify(towns));
}

sumByTown(['Sofia',
    '20',
    'Varna',
    '3',
    'Sofia',
    '5',
    'Varna',
    '4'
])