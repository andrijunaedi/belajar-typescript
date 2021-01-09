/**
 * * Generic - Interface
 */
interface Generic<T> {
  propA: T;
}

function genericFunction<T>(value: T): Generic<T> {
  const data: Generic<T> = {
    propA: value,
  };
  return data;
}

console.log(genericFunction<string>('asadhda'));
console.log(genericFunction<number>(111313));
console.log(genericFunction<boolean>(true));
