function cookingByNumbers(arr) {
    let number = Number(arr[0]);

    let chop = (number) => { return number / 2; }
    let dice = (number) => { return Math.sqrt(number); }
    let spice = (number) => { return number + 1; }
    let bake = (number) => { return number * 3; }
    let fillet = (number) => { return number * 0.80; }

    for (let index = 1; index < arr.length; index++) {
        switch (arr[index]) {
            case "chop":
                number = chop(number);
                break;
            case "dice":
                number = dice(number);
                break;
            case "spice":
                number = spice(number);
                break;
            case "bake":
                number = bake(number);
                break;
            case "fillet":
                number = fillet(number);
                break;
        }
        console.log(number);
    }
}

cookingByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);