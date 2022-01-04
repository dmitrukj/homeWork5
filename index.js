//2.Написать функцию, которая делает все буквы в каждом элементе массива заглавными.
let arr = ["mother", "dad", "son", "daughter"];

const getToUpperCase = () => arr.map((el) => el.toUpperCase());
console.log(getToUpperCase(arr.map((el) => el.toUpperCase())));

//3.Написать функцию, которая делает первую букву в каждом элементе массива заглавной,
а не строчные элементы (числа, булеаны, объекты и т.д.) удаляет.
let arr = ["mother", "dad", "son", "daughter"];

const getToUpperCase = () => arr.map((el) => el[0].toUpperCase() + el.slice(1));
console.log(getToUpperCase(arr.map((el) => el[0].toUpperCase() + el.slice(1))));

//4.Написать функцию, которая округляет все числовые значения в массиве в большую сторону,
а не числовые элементы удаляет.

//6.Напишите функцию, которая разворачивает массив в обратном порядке,не используя reverse

let arr = [1, 2, 3, 4, 5, 6];
const getReverse = (arr) => {
  let outArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    outArr.push(arr[i]); //добавляет в конец элемент
  }
  return outArr;
};
console.log(getReverse([1, 2, 3, 4, 5, 6]));

//7.Напишите функцию, которая очищает массив от нежелательных значений,
//таких как false, undefined, пустые строки, ноль, null.

const getCompact = (array) => array.filter((el) => el); //оставляет только true

const data = [0, 1, false, 2, undefined, "", 3, null];
console.log(getCompact(data));

//8 Напишите функцию copyArr(arr), которая копирует массив не изменяя оригинал.

const vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];

const arrayClone = (arr) => arr.slice(0); //возвращает новый массив, создавая копию нужной части массива, оставляя нужные элементы
let arr1 = arrayClone(vegetables);
console.log(arr1);

//9 Напишите код, который преобразовывает и объединяет все элементы массива в одно
//строковое значение. Элементы массива будут разделены запятой.

const vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];

const getClone = (arr) => vegetables.join(",");
console.log(getClone(vegetables));

//11.Напишите функцию, которая убирает повторяющиеся значения.

const getUnique = (arr) => {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
};
let str = [1, 2, 3, 1, 2];

console.log(getUnique(str));

//12.Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 5];
const arr4 = [1, 2, 3, 4, 5];

const isEqual = (firstArray, secondArray) => {
  if (firstArray.length !== secondArray.length) {
    return false;
  }

  const newArr = firstArray.map((el, id) => secondArray[id] === el);

  return !newArr.includes(false);
};
console.log(isEqual(arr1, arr2));
console.log(isEqual(arr1, arr3));
console.log(isEqual(arr1, arr4));

//13 Високосным годом является каждый четвертый год. Напишите функцию chooseYears(start, end),
// которая принимает в качестве аргументов диапазон лет и возвращает массив високосных лет
//в заданном диапазоне включительно.

const chooseYears = (start, end) => {
  let Arr = [];
  for (i = start; i <= end; i++) {
    if (i % 4 === 0) {
      Arr.push(i); //присоединяет к массиву каждый четвертый год
    }
  }
  console.log(Arr);
};

chooseYears(2000, 2030);

//14 Напишите функцию getFirst(array, n), которая возвращает фрагмент массива,
// содержащий первые n элементов массива.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const getFirst = (array, n) => array.slice(0, n);//отрезает сначала массива элементы
console.log(getFirst(array, 1));
console.log(getFirst(array, 4));
console.log(getFirst(array, -3));
console.log(getFirst(array, -6));

//15 Напишите функцию getLast(array, n), которая возвращает фрагмент массива,
//содержащий последние n элементов массива.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const getLast = (array, n = 1) => array.slice(-n);// если с минусом отрезает с конца массива
console.log(getLast(array, 1));
console.log(getLast(array, 4));
console.log(getLast(array, 12));
console.log(getLast(array, 6));

//16 Напишите функцию sumOfSquares(arr), которая возвращает сумму квадратов значений массива.

const sumOfSquares = (arr) => arr.reduce((a, b) => a + b * b);

console.log(sumOfSquares([1, 2, 3, 4, 5]));
console.log(sumOfSquares([6, 12, 58, 85, 65]));

//17 Напишите код, который определяет сумму и произведение значений массива.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const get = () => arr.reduce((a, b) => a + b);
const getOut = () => arr.reduce((a, b) => a * b);

console.log(
  " Сумма : " +
    arr.reduce((a, b) => a + b) +
    "Произведение : " +
    arr.reduce((a, b) => a * b)
);

// //18 Напишите функцию removeItem(arr, num), которая удаляет определенный элемент из массива.

const removeItem = (arr, num) => arr.filter((el) => el !== 5);
console.log(removeItem([3, 5, 7, 8, 5], 5));

//19 Напишите функцию moveElement(arr,from,to), которая позволяет переместить элемент
//массива из позиции from в позицию to.

const moveElement = (arr, from, to) => {
  arr.splice(to, 0, arr.splice(from, 1)[0]);
  return arr;
};
const arr = ["a", "b", "c", "d", "e"];
console.log(moveElement(arr, 3, 1)); // третий элемент становится на место первого

//20 Напишите функцию generateRange(start, end), которая генерирует массив заданной длины
// len, заполненный целыми числами. Каждое последующее число в массиве должно быть
//больше предыдущего на единицу.

const generateRange = (start, end) =>
  new Array(end - start + 1).fill().map((el) => start++);

console.log(generateRange(0, 5)); // 0,1,2,3,4
console.log(generateRange(-5, 4)); // -5,-4,-3,-2

//21 Используя метод map() напишите код, который получает из массива строк новый массив,
//содержащий их длины.

const myArr = ["one", "two", "three", "four", "five"];
const myArrLenght = () => myArr.map((el) => el.length);

console.log(myArrLenght(myArr.map((el) => el.length)));

//22 Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод
// reduce() напишите функцию currentSums(numbers), которая возвращает новый массив
// из такого же числа элементов, в котором на каждой позиции будет находиться сумма
//элементов массива numbers до этой позиции включительно.

const numbers = [2, 3, 5, 7, 11, 13, 17, 19];

const currentSums = (numbers) => {
  let result = [];
  numbers.reduce((sum, current, i) => (result[i] = sum + current));
  console.log(result);
};
currentSums(numbers);

//23 Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять
// из первых букв слов строки str. При написании данного кода, используйте метод, который превращает
//строку в массив split. В него нужно передать символ (строку), по которой исходная строка будет разбита.

const str = "Каждый охотник желает знать, где сидит фазан.";
const getFirstChar = (str) => str.split(" ").map((_) => _[0]); //split- делает из строки массив, map- пишет 0 элемент

console.log(getFirstChar(str));

//24 Напишите код, объединяющий три массива цифр.

const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [7, 8, 9];

const getArr = (a, b, c) => {
  const first = a.concat(...b, ...c); //возвращает новый массив, объединяя с другими массивами
  let result = [];

    while (first.length) {
      //длина нового массива
      result.push(first.pop()); //push- добавляет элементы в конец массива; pop-удаляет последний элемент из массива и возвращает его значение.
    }

  return result;
};
console.log(getArr(a, b, c));

//25 Подсчитать количество вхождений значения в массив

//26* Напишите функцию, которая разделяет массив на части заданного размера.
