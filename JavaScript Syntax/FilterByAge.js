function ageFilter(minAge, firstName, firstAge, secondName, secondAge) {
    let firstPerson = { name: firstName, age: firstAge };
    let secondPerson = { name: secondName, age: secondAge };

    if (firstPerson.age - minAge > secondPerson.age - minAge) {
        console.log(firstPerson);
    } else {
        console.log(secondPerson);
    }
}