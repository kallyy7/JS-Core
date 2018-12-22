function figureArea(arr) {
    let firstFigArea = +arr[0] * +arr[1];
    let secFigArea = +arr[2] * +arr[3];
    let area = Math.min(+arr[0], +arr[2]) * Math.min(+arr[1], +arr[3]);

    let figureArea = firstFigArea + secFigArea - area;
    console.log(figureArea);
}