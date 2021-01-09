/**
 * * Menggunakan any
 * ? Type data pada value tidak akan diketahui
 */
function getData(value: any) {
  return value;
}

const data1 = getData(1231313);
console.log(data1);

// ! --------------

/**
 * * Generic
 * ? Type data bisa dinamis dan bisa ditracking (diketahui) type datanya
 */
function getData2<T>(value: T): T {
  return value;
}

const data2 = getData2<string>('Andri');
console.log(data2.length);

const data3 = getData2<number>(123);
console.log(data3.toFixed(2));
