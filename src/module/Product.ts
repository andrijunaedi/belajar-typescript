/**
 * * Melakukan import Asus dan Macbook
 * ? Menggunakan kedua class dan melakukan console.log
 */

import Asus from './Asus';
import MacBook from './MacBook';

let asus = new Asus('Zenbook', false, true);
console.log(asus);

let macbook = new MacBook(2020, false, false);
console.log(macbook);
macbook.a();
