/**
 * * interface - optional property
 * ? Bisa mengambaikan suatu property (opsional)
 * ? tambahkan tanda tanya (?) setelah nama, sebelum titik dua
 */
interface Teacher {
  name: string;
  age: number;

  //   * Optional property
  phone?: string;
}

const teacher: Teacher = {
  name: 'Nusendra',
  age: 28,
};
