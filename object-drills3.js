'use strict';

/* Problem 1 */
const loaf = {
    flour: 300,
    water: 210,
    hydration: function() {
        return this.water / this.flour * 100;
    }
};

//console.log(`loaf has ${loaf.flour} flour and ${loaf.water} water`);
//console.log(`flour hydration is ${loaf.hydration()}`);

/*Problem 2 */

let item = {
    foo: 1,
    bar: 2,
    fum: 3,
    quux: 4,
    spam: 5,
};

for (let i in item) {
    console.log(i + ":" + item[i]);
}

/*Problem 3 */

const obj = {
    meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};
console.log(obj.meals[3]);

/* Problem 4 */

const People1 = {
    name: 'A',
    job: 1,
};

const People2 = {
    name: 'B',
    job: 2,
};

const People3 = {
    name: 'C',
    job: 3,
};

const People4 = {
    name: 'D',
    job: 4,
};

let arr = [People1, People2, People3, People4];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].name + ":" + arr[i].job);
}