import BaseLaptop from './BaseLaptop';

/**
 * * Class Asus adalah turunan dari BaseLaptop
 * ? Disini mengisi name laptop dengan (Asus)
 */
class Asus<T> extends BaseLaptop<T> {
  constructor(type: T, numeric: boolean, touchButton: boolean) {
    super('Asus', type, numeric, touchButton);
  }
}

export default Asus;
