export {};

type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
  id: 1,
  name: 'Shu',
  age: 45,
};

type Profile = {
  name: string;
  age: number;
}

const example2: Profile = {
  name: 'Ta',
  age: 52
};

type Profile2 = typeof example1;

const example3: Profile2 = {
  id: 2,
  name: 'mi',
  age: 40,
}

console.log(example3);

// console.log(profile2);