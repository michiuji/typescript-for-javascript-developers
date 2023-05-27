export{};

function error(message: string): never {
  throw new Error(message);
  // const newMessage = message + "リターン";
  // return newMessage;
}

try {
  let result = error("エラーが発生しました");
  console.log(result);
} catch (error) {
  console.log(error);
}

let foo: void = undefined;
let bar: never = error('only me');

