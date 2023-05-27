export {};

type ObjectType = {
  name: string,
  age: number
}; 

interface ObjectInterface {
  name: string,
  age: number
}

let object: ObjectInterface = {
  name: 'Shuji',
  age: 45
};

console.log(object);