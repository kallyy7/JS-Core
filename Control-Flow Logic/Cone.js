function cone(r, h) {
    let radius = Number(r);
    let height = Number(h);

    let volume = (Math.PI * Math.pow(radius, 2) * height) / 3;

    let s = Math.sqrt((radius * radius) + (height * height));
    let lateralSurfaceArea = Math.PI * radius * s;
    let baseSurfaceArea = Math.PI * radius * radius;

    let area = lateralSurfaceArea + baseSurfaceArea;

    console.log(`volume = ${volume}`);
    console.log(`area = ${area}`);
}

cone(3, 5);