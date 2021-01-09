/**
 * * Interface - Readonly Property
 * ? property bersifat tetap / konstanta
 */
interface Student {
  readonly name: string;
  readonly age: number;
}

const student: Student = {
  name: 'Andri',
  age: 18,
};
