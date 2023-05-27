export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();
console.log(numberUnknown);

let sumAny = numberAny + 10;
console.log(sumAny);

let sumUnknown;
console.log(sumUnknown);
console.log(typeof numberUnknown);
if (typeof numberUnknown === 'number') {
  sumUnknown = numberUnknown + 10;
  console.log(sumUnknown);
}
console.log(sumUnknown);


