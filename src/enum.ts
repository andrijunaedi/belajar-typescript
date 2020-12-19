/**
 * * Enum
 * ? Type data konstanta di tingkat app
 */

/**
 * * Numeric Enum
 * ? enum yang berisi number yang otimatis increment dari nilai sebelumnya
 */
enum Month {
  JAN = 1,
  FEB,
  MAR,
}

console.log(Month.FEB);

/**
 * * String Enum
 * ? enum yang hanya berisi string
 * ! error jika diberi value number
 */
enum Day {
  MON = 'Senin',
  TUE = 'Selasa',
  WED = 'Rabu',
}

console.log(Day.TUE);
