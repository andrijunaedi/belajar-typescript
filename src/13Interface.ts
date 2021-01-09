/**
 * * Interface
 * ? Perjanjian atau kontrak dimana property atau method harus dimplementasikan kepada class yang menggunakannya
 */
interface AndroidPhone {
  name: string;
  back(): void;
  home(): void;
  menu(): void;
}

class Realme implements AndroidPhone {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  back(): void {
    console.log('back tapped');
  }
  home(): void {
    console.log('home tapped');
  }
  menu(): void {
    console.log('menu tapped');
  }
}

class GameA {
  /**
   * * interface as params and property
   */
  private phone: AndroidPhone;

  constructor(phone: AndroidPhone) {
    this.phone = phone;
  }

  back(): void {
    console.log('kembali ke menu utama di game');
  }
  home(): void {
    /**
     * * Use method in object phone property
     */
    this.phone.home();
  }
  menu(): void {
    this.phone.menu();
  }
}

const realme = new Realme('Realme');
const game = new GameA(realme);

game.back();
game.home();
game.menu();

// * ---- iPhone
interface ApplePhone {
  home(): void;
}

class IPhone implements ApplePhone {
  constructor(public name: string) {}

  home(): void {
    console.log('Muncul menu');
  }
}

const iphone = new IPhone('iPhone 12');

//! Error karena bukan AndroidPhone
// const game2 = new GameA(iphone);
