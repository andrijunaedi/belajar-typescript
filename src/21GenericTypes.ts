/**
 * * Generic - Types
 */
type Generic2<T> = T;

function genericFunction2<T>(value: T): Generic2<T> {
  return value;
}

console.log(genericFunction2<string>('string'));
