var person = {
    name: "Kevin",
    age: 32,
    height: 175,
    weight: 64
};

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.height);
console.log(person.weight);

console.log(".".repeat(60));

console.log(person["name"]);
console.log(person["age"]);
console.log(person["height"]);
console.log(person["weight"]);

let keys = Object.keys(person);
let values = Object.values(person);

console.log(keys);
console.log(values);

console.log(".".repeat(60));

keys.forEach((key, index) => {
    console.log(key + ":" + person[key]);
});

console.log(".".repeat(60));

let people = [{
        name: "Kevin",
        age: 32,
        height: 185,
        weight: 84
    },
    {
        name: "Mary",
        age: 22,
        height: 175,
        weight: 44
    },
    {
        name: "John",
        age: 30,
        height: 170,
        weight: 60
    }
];
//1.object
console.log(people);
console.log("-".repeat(60));

//2.person
people.forEach((person, index) => {
    console.log(person);
});
console.log("-".repeat(60));

//3.person - keys & values
people.forEach((person, index) => {
    let keys = Object.keys(person);
    let msg = index + ". ";

    keys.forEach((key, index) => {
        msg += key + ":" + person[key] + ",";
    });

    console.log(msg);
});