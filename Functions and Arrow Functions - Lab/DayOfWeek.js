function dayOfWeek(input) {
    let days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];

    if (days.includes(input)) {
        let index = days.indexOf(input);

        console.log(index + 1);
    } else {
        console.log("error");
    }
}

dayOfWeek("Monday")