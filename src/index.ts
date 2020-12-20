/**
 * * String
 * ? Type data yang hanya berisi string
 */
let nama: string = 'Andri Junaedi';
nama = 'Junaedi';

/**
 * * Number
 * ? Type data yang hanya berisi angka (number)
 */
let umur: number;
umur = 17;
umur = 18;

/**
 * * Type Data Boolean
 * ? Type data yang hanya berisi true atau false
 */
let isDeveloper: boolean;
isDeveloper = false;
isDeveloper = true;

/**
 * * Type Data Any
 * ? Type data yang bisa dimasukan data apa aja
 */
let heroes: any = 'Iron Man';
heroes = 18;
heroes = [];
heroes = {};
heroes = true || false || 'string';

/**
 * * Type Data Union
 * ? Penambahan type data menggunakan tanda ( | )
 * ? Type bisa diisi lebih dari 1 type data
 * TODO: Variabel phone bisa diisi number dan string
 */
let phone: number | string;
phone = 6281821616;
phone = '0811715351';
