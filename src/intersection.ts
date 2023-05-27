export {};

type Pitcher1 = {
  throwingSpeed: number;
};
type Batter1 = {
  battingAverage: number;
};

// type TwiWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// };

type TwoWayPlayer = Pitcher1 & Batter1;

const OtaniShouhei: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286
};

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 157,
};

const OchiaiHiromitsu: Batter1 = {
  battingAverage: 0.367,
};

console.log(OtaniShouhei);