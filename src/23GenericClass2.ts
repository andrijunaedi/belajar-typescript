/**
 * * Generic - Class (class as type data)
 */
class ClassA {
  name: string = 'Class A';
}

class NewClass<T> {
  classProp: T;

  constructor(classProp: T) {
    this.classProp = classProp;
  }
}

const classA = new ClassA();
const newClass = new NewClass(ClassA);

console.log(newClass);
