/**
 * * Namespace
 * ? Membungkus class / variable agar tidak error jika terjadi duplicate name
 */

namespace NamespaceExample {
  export class Animal {}

  export const cat = new Animal();
}

const bird = new NamespaceExample.Animal();
let cat2 = new NamespaceExample.Animal();
