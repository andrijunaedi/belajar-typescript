class ProductA {
  private _price = 0;
  private discount = 0.05;

  /**
   * * getter
   * ? digunakan untuk mendapatkan nilai _price
   */
  get price(): number {
    return this._price;
  }

  /**
   * * setter
   * ? digunakan mengisi nilai _price
   */
  set price(value: number) {
    this._price = value - value * this.discount;
  }
}

const productA = new ProductA();
productA.price = 2000;
console.log(productA.price);
