import BaseLaptop from './BaseLaptop';

/**
 * * Class MacBook adalah turunan dari BaseLaptop
 * ? Disini mengisi name laptop dengan (MacBook)
 */
class MacBook<T> extends BaseLaptop<T> {
  constructor(type: T, numeric: boolean, touchButton: boolean) {
    super('MacBook', type, numeric, touchButton);
  }
}

export default MacBook;
