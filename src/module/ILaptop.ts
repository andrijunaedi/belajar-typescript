/**
 * * Interface Laptop
 * ? Blueprint atau aturan dalam pembuatan semua laptop
 */
export default interface ILaptop<T> {
  name: string;
  type: T;
  withNumeric: boolean;
  withTouchButton: boolean;
}
