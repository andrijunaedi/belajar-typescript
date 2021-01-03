/**
 * * Static property & method
 * ? diakses tanpa perlu init object (new)
 * ? property & method static nempel pada class nya
 */
class Chicken {
  static feed: number = 2;

  static running(): void {
    console.log('Ayam berjalan...');
  }

  getFeed(): void {
    console.log(Chicken.feed);
  }
}

Chicken.running();

const ayam1 = new Chicken();
ayam1.getFeed();

// --------
const ayam2 = new Chicken();
const ayam3 = new Chicken();

ayam2.getFeed();
ayam3.getFeed();

/**
 * * Static property bersifat global variable
 * ? ini akan merubah / menimpa value feed
 */
Chicken.feed = 4;

ayam2.getFeed();
ayam3.getFeed();
