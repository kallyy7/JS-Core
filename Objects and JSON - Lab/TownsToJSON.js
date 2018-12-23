function towns(arr) {
    let result = [];

    for (let i = 1; i < arr.length; i++) {
        let current = arr[i]
            .split(/\s*\|\s*/)
            .filter(a => a !== '');

        let obj = {
            "Town": current[0],
            "Latitude": Number(current[1]),
            "Longitude": Number(current[2])
        };
        result.push(obj);
    }

    console.log(JSON.stringify(result));
}

towns(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
])