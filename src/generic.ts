function getData(value: any) {
  return value;
}

/**
 * * Masalah dengan any
 * ! Walaupun datanya number tidak ada error jika dikasih length
 */
console.log(getData('Andri').length);
console.log(getData(123).length);

/**
 * * Generic
 * ? Type data yang dinamis
 * ? Membuat nya dengan <T> diakhir nama function
 * ? Menggunakan nya dengan T sebagai type data variabel
 */
function myData<T>(value: T) {
  return value;
}

/**
 * * Example Generic
 */
console.log(myData('Andri').length);
console.log(myData(123));

/**
 * * Generic dengan Arrow Function
 */
const getValue = <T>(value: T) => value;
