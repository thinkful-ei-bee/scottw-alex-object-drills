'use strict';

const loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return this.water / this.flour * 100;
  }
}

console.log(`loaf has ${loaf.flour} flour and ${loaf.water} water`);
console.log(`flour hydration is ${loaf.hydration()}`);