/**
 * * Normal
 * ! Jika Product sudah banyak dan mau tambah store harus diubah satu satu
 */

class Store {
  private name: string = 'Store A';
  private profit: number = 1000;

  getName(): string {
    return this.name;
  }
  getProfit(): number {
    return this.profit;
  }
}

class FashionProduct {
  private store: Store;
  private name: string;
  private price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;

    this.store = new Store();
  }

  sell(): void {
    console.log(
      `${this.name} harga jualnya ${this.store.getProfit() + this.price}`,
    );
  }
}

const baju = new FashionProduct('Baju Kaos', 35000);
baju.sell();

// ! ----------------------------

/**
 * * Dependency Injection
 * ? Menggunakan Interface
 * ? Store akan bersifat dinamis
 */

interface IStore {
  name: string;
  profit: number;
  getProfit(): number;
}

class OldStore implements IStore {
  name: string = 'Toko Lama';
  profit: number = 1000;

  getName(): string {
    return this.name;
  }
  getProfit(): number {
    return this.profit;
  }
}

class NewStore implements IStore {
  name: string = 'Toko Baru';
  profit: number = 2500;

  getName(): string {
    return this.name;
  }
  getProfit(): number {
    return this.profit;
  }
}

/**
 * * Inject Interface sebagai property
 * ? Dengan cara ini store akan dinamis
 */
class TechProduct {
  private store: IStore;
  private name: string;
  private price: number;

  constructor(store: IStore, name: string, price: number) {
    this.name = name;
    this.price = price;
    this.store = store;
  }

  sell(): void {
    console.log(
      `${this.name} harga jualnya ${this.store.getProfit() + this.price}`,
    );
  }
}

const tokoLama = new OldStore();
const tokoBaru = new NewStore();

const mac1 = new TechProduct(tokoLama, 'Macbook Pro', 10000);
const mac2 = new TechProduct(tokoBaru, 'Macbook Pro', 10000);

mac1.sell();
mac2.sell();
