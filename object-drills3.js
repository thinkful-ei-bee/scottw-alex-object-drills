'use strict';

/* Problem 1 */
const loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return this.water / this.flour * 100;
  }
};

console.log(`loaf has ${loaf.flour} flour and ${loaf.water} water`);
console.log(`flour hydration is ${loaf.hydration()}`);

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


/* Problem 5 */

const People5 = {
  name: 'A',
  job: 'Owner',
};

const People6 = {
  name: 'B',
  job: 'Manager',
  boss: 'A',
};

const People7 = {
  name: 'C',
  job: 'Worker',
  boss: 'A',
};

const People8 = {
  name: 'D',
  job: 'Janitor',
  boss: 'A',
};

let arr2 = [People5, People6, People7, People8];
for (let i = 0; i < arr.length; i++) {
  if (arr2[i].hasOwnProperty('boss')) {
    console.log(`${arr2[i].job} ${arr2[i].name} reports to ${arr2[i].boss}.`);
  } else { console.log(`${arr2[i].job} ${arr2[i].name} doesn't report to anybody.`); }

}

/* Problem 6 */

let cipher = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
}

function decode(code) {
  let words = code.split(' ');
  let answer = '';
  for (let i = 0; i < words.length; i++) {
    if (cipher.hasOwnProperty(words[i][0])) {
      answer += words[i][cipher[words[i][0]]];
    } else {
      answer += ' ';
    }
  }
  return answer;
}

console.log(decode('craft block argon meter bells brown croon droop'));

/* Problem 7 */


function createCharacter(name, nickname, race, origin, attack, defense) {
  return {
    name, nickname, race, origin, attack, defense,
    describe: function() {
      console.log(`${name} is a ${race} from ${origin}.`);
    },
    evaluateFight: function(character) {
      let takes = 0;
      let receive = 0;
      if (this.attack > character.defense) {
        takes = this.attack - character.defense;
      }
      if (character.attack > this.defense) {
        receive = character.attack - this.defense;
      }
      console.log(`Your opponent takes ${takes} damage and you receive ${receive} damage`);
    },
  };
}

let characters = [createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6), 
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1), 
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Eunnedain', 6, 8),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5)];

characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 5, 5));

characters.find(x => x.nickname === 'aragorn').describe();

let hobbitArray = characters.filter(x => x.race === 'Hobbit');

let highAttack = characters.filter(x => x.attack > 5);

//to add a weapon, we'd create a new key, in describe() we'd include key in the console log statement

