function aggregateElements(arr) {
    let total = 0;
    let nums = 0;
    let concat = "";

    for (const number of arr) {
        total += number;
        concat += number;
        nums += 1 / number;
    }

    console.log(total);
    console.log(nums);
    console.log(concat);
}