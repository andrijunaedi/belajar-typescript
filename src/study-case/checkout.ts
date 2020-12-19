const barang: Array<any> = [
  {
    id: 'KD0023',
    nama: 'Laptop Asus ROG',
    harga: 15000000,
  },
  {
    id: 'C42212',
    nama: 'Iphone 12',
    harga: 12000000,
  },
  {
    id: 'D90312',
    nama: 'Xiaomi Pocophone',
    harga: 7000000,
  },
  {
    id: 'H12020',
    nama: 'Playstation 5',
    harga: 15000000,
  },
];

/**
 * * Checkout logic and print
 * @param kodeBarang
 * @param diskon
 */
const checkout = (kodeBarang: string[], diskon: number) => {
  let laptop: number = 0,
    iphone: number = 0,
    xiaomi: number = 0,
    ps5: number = 0;

  let totalLaptop: number = 0,
    totalIphone: number = 0,
    totalXiaomi: number = 0,
    totalPs5: number = 0;

  /**
   * * Print Barang
   * @param items
   * @param nama
   * @param harga
   */
  const printBarang = (items: number, nama: string, harga: number) => {
    if (items > 0) {
      console.log(`${nama} | ${items} Pcs | ${harga}`);
    }
  };

  /**
   * * Filter kode barang dan tambah value per PCS
   */
  kodeBarang.filter((kode: string) => {
    switch (kode) {
      case barang[0].id:
        return laptop++;
      case barang[1].id:
        return iphone++;
      case barang[2].id:
        return xiaomi++;
      default:
        return ps5++;
    }
  });

  /**
   * * Print Checkout
   */

  /**
   * * Barang yang dibeli
   */
  console.log('Item yang dibeli \n================ \n');
  if (laptop > 0) {
    totalLaptop = barang[0].harga * laptop;
    printBarang(laptop, barang[0].nama, totalLaptop);
  }
  if (iphone > 0) {
    totalIphone = barang[1].harga * iphone;
    printBarang(iphone, barang[1].nama, totalIphone);
  }
  if (xiaomi > 0) {
    totalXiaomi = barang[2].harga * xiaomi;
    printBarang(xiaomi, barang[2].nama, totalXiaomi);
  }
  if (ps5 > 0) {
    totalPs5 = barang[3].harga * ps5;
    printBarang(ps5, barang[3].nama, totalPs5);
  }
  /**
   * * Sub total dan diskon
   */
  const subTotal: number = totalLaptop + totalIphone + totalXiaomi + totalPs5;
  const discout: number = Math.round((subTotal * diskon) / 100);

  console.log('\n============================');
  console.log(`Subtotal : ${subTotal}`);
  console.log(`Diskon   : ${discout} (${diskon}%)`);

  /**
   * * Total
   */
  console.log(`\n============================`);
  console.log(`Total : ${subTotal - discout}`);
};

checkout(['KD0023', 'KD0023', 'H12020', 'D90312', 'C42212'], 25);
