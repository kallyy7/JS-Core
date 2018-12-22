function roadRadar(arr) {
    let speed = Number(arr[0]);
    let area = arr[1];

    let speedRadar = (speed, speedLimit) => {
        if (speed < speedLimit) {
            return '';
        } else if (speed < speedLimit + 20) {
            return "speeding";
        } else if (speed < speedLimit + 40) {
            return "excessive speeding";
        } else {
            return "reckless driving";
        }
    }

    switch (area) {
        case "motorway":
            console.log(speedRadar(speed, 160));
            break;
        case "interstate":
            console.log(speedRadar(speed, 90));
            break;
        case "city":
            console.log(speedRadar(speed, 50));
            break;
        case "residential":
            console.log(speedRadar(speed, 20));
            break;
    }
}

roadRadar([40, 'city']);