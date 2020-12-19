/**
 * * Array number
 * ? array hanya bisa diisi number
 */
let numberArray: number[];
numberArray = [1, 2, 3];

/**
 * * Array string
 * ? array hanya bisa diisi string
 */
let stringArray: string[];
stringArray = ['andri', 'junaedi'];

/**
 * * Array any
 * ? array bisa berisi apa aja
 */
let anyArray: any[];
anyArray = [1, 'andri', true, {}];

/**
 * * Array Tuple
 * ? array dengan berbagai type data dengan nilai yang terbatas
 */
let biodata: [string, number];
biodata = ['Sumedang', 18];

/**
 * ! Error kerana value kedua harus berisi number
 */
biodata = ['Sawala', 'Sumedang'];
/**
 * ! Error karena length tidak boleh lebih dari 2 data
 */
biodata = ['andri', 18, true];
