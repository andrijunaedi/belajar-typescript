class Person {
  /**
   * * readonly modifier
   * ? digunakan untuk property yang tidak ingin diubah datanya
   * ? bersifat constanta
   */
  readonly gender: string = 'Pria';
}

const person = new Person();
// ! Error jika diisi ulang / diubah property nya
// person.gender = 'Wanita';
