/**
 * * Interface - Extends Class
 */
class Animal {
  constructor(public name: string) {}
}

interface IShark extends Animal {
  swim(): void;
}

class Shark implements IShark {
  constructor(public name: string) {}

  swim(): void {
    console.log('Berenang....');
  }
}
