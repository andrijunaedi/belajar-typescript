/**
 * * Object
 *
 * * Membuat type untuk object
 * ? Type User digunakan untuk menentukan data yang harus ada apa aja
 */
type User = {
  name: string;
  age: number;
};

/**
 * * Menggunakan type User untuk variabel user
 * ? Data user harus sesuai dengan type User, tidak lebih tidak kurang
 * ! Error jika type data tidak sesuai
 * ! Error jika data selain yang tercantum pada type User
 */
let user: User = {
  name: 'Andri Junaedi',
  age: 18,
};
