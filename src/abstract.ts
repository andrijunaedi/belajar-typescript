/**
 * * Abstract Class
 * ? Class yang tidak bisa diintansiasi langsung dari luar class itu sendiri
 * ? Melainkan harus extends sebuah child class nya
 */
abstract class Vehicle {
  /**
   * ? Nilai wheels didapat dari child class yang melakukan extends
   */
  abstract wheels: number;

  start(): void {
    console.log('brummmmmm....');
  }
}

/**
 * * class Car adalah Vihecle (kendaraan)
 * ? Car harus memasukkan nilai wheels karena extends ke Vihecle
 */
class Car extends Vehicle {
  wheels: number = 4;
}

/**
 * * class Motorcycle adalah Vihecle (kendaraan)
 * ? Motorcycle harus memasukkan nilai wheels karena extends ke Vihecle
 */
class Motorcycle extends Vehicle {
  wheels: number = 2;
}

/**
 * * Example
 */
let car = new Car();
console.log(car.wheels);
car.start();

let motor = new Motorcycle();
console.log(motor.wheels);
motor.start();
