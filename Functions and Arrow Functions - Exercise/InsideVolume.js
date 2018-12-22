function insideOrOutside(arr) {
    let inVolume = (x, y, z) => {
        let x1 = 10,
            x2 = 50,
            y1 = 20,
            y2 = 80,
            z1 = 15,
            z2 = 50;

        let result = (x >= x1 && x <= x2 && y >= y1 && y <= y2 && z >= z1 && z <= z2) ? true : false;
        return result;
    }

    for (let index = 0; index < arr.length; index += 3) {
        let x = arr[index];
        let y = arr[index + 1];
        let z = arr[index + 2];

        if (inVolume(x, y, z)) {
            console.log("inside");
        } else {
            console.log("outside");
        }
    }
}

insideOrOutside([8, 20, 22]);