function templateFormat(arr) {
    console.log("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
    console.log("<quiz>");

    for (let index = 0; index < arr.length; index++) {
        if (index % 2 === 0) {
            console.log("  <question>");
            console.log("    " + arr[index]);
            console.log("  </question>");
        } else {
            console.log("  <answer>");
            console.log("    " + arr[index]);
            console.log("  </answer>");
        }
    }

    console.log("</quiz>");
}

templateFormat(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"
]);