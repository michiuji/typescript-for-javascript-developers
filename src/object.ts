export {};

let profile1: object = { name: 'Shuji' };
profile1 = { brithYear: 1977 };

let profile2: {
  name: string;
  age: number;
  brithYear: number
} = { name: 'Mic', age: 40, brithYear: 1988};
profile2.brithYear = 1983;

console.log(profile2);