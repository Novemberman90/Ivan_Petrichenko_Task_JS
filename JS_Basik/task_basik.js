 /*Задачи:

При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой
 */

// Место для первой задачи
function firstTask() {
    // Пишем решение вот тут
   
    for(i = 5; i <= 10; i++) 
    console.log(i)
}
firstTask();
//-----------------------Задача 2---------------------------------------
/* При помощи цикла for вывести числа от 20 до 10 в консоль. 
В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл */

// Место для второй задачи
function secondTask() {
    // Пишем решение вот тут
    for(i = 20; i >= 10; i--) {
        if(i == 13){
            break;
        }
        console.log(i);
    }
    
}
secondTask();

//------------------Задача 3------------------------
/* При помощи цикла for выведите чётные числа от 2 до 10 включительно */
// Место для третьей задачи

function thirdTask() {
    // Пишем решение вот тут
    for(i = 1; i <= 10; i++)
    if(i % 2 === 0) {
        console.log(i);
    }
}
thirdTask();

//--------------------Задча 4------------------------
/*Перепишите цикл  for на вариант с while. 
Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.
// Цикл, который нужно переписать:

 for (let i = 2; i <= 16; i++) {
     if (i % 2 === 0) {
         continue;
     } else {
        console.log(i);
     }
 } 
*/
// Место для четвертой задачи

let i = 2;
while(i<16) {
    i++;
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

//------------------Задача 5----------------------
/*
Заполните массив цифрами от 5 до 10 включительно.
 Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]
 */
// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];
    // Пишем решение вот тут
    for(i = 5; i <= 10; i++){
      arrayOfNumbers.push(i);
    }
    console.log(arrayOfNumbers);
    // Не трогаем
    return arrayOfNumbers;
}
fifthTask();


/* Тема урока : Продвинутые задания на использование циклов и условий */
//----------Зачада 1 ----------------
/* Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
Должен получиться точно такой же массив
 */

// Место для первой задачи
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];
   
    // Пишем решение вот тут
   for(i = 0; i < arr.length; i++) {
    result.push(arr[i]);
   }
    //result.push(arr);
    console.log(result);
    // Не трогаем
    return result;
}

firstTask();

//---------------------------Задача 2 ----------------------
/* 
Измените данный массив так, чтобы все числа были увеличены в 2 раза, 
а если попадается строка строка - то к ней было добавлено " - done".
Для определения типа данных используйте typeof();
Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ] */

// Место для второй задачи
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут

    for(i = 0; i < data.length; i++){
        if(typeof data[i] == 'number') {
            data[0] = 10;
            data[1] = 20;
            data[3] = 40;  
        }

        if(typeof data[i] == 'string') {
            data[2] = 'Shopping - done';
            data[4] = 'Homework - done';
        }
    }
   console.log(data);
    
    // Не трогаем
    return data;
}secondTask();


//--- Правильное решение 
function secondTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) === 'number') {
            data[i] = data[i] * 2;
        } else if (typeof(data[i]) === 'string') {
            data[i] = `${data[i]} - done`;
        }
    }

    console.log(data);
    return data;
}

secondTask();


//------- Задача 3 ------------------
/*
Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]
 */

// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
    // Пишем решение вот тут
    for(i = 0; i < data.length; i++) {
        data.reverse([i]);
    }
    result.push(data);
    console.log(result.flat());

    return result;
    

    for(i = 0; i < data.length; i++) {
        result[0] = 'Homework';
        result[1] = 20 ;
        result[2] = 'Shopping';
        result[3] = 10;
        result[4] = 5;
    }
   
   console.log(result);
  
    // Не трогаем
    return result;
}

//---Правльное решение 
function thirdTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for (let i = 1; i <= data.length; i++) {
        result[i - 1] = data[data.length - i]
    }

    console.log(result);
    return result;
}

thirdTask();


/* Задача 4 
 Задача на формирование фигуры
  необходимо написать код, который при помощи звездочек (*) в консоли нарисует вот такую фигуру:

     *
    ***
   *****
  *******
 *********
***********
 */

const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней

// моё решение 
for(i=0; i<=lines; i++){
    for(j=5; j>i - 1; j--) {
           result += ' ';
      }
      for( k = 0; k < i + 1; k++){
          for(t = 1; t < 5; t++){
              if(t === 2) break;
              result += '*';
          }
          result += '*';
      }
      result += '\n' ; 
  }
  console.log(result);

//Правильное решение
const liness = 5;
let results = '';

for(i = 0; i <=liness; i++){
    for(j = 0; j < liness - i; j++) {
           result += ' ';
      }
      for( j = 0; j < 2 * i + 1; j++){
          results += '*';
      }
      results += '\n' ; 
  }
  console.log(results);


  /* Упражнение функции и агрументы */
  //Пример обменника валют прицнцип DRY

  const usdCuur = 37;
  const eurCuur = 42;

  function convert(amout, curr){
    console.log(curr * amout);
  }

  convert(500, usdCuur);
  convert(500, eurCuur);


  /* Дополнительный пример только теперь с учетом скидки 10% */

  const usdCuur2 = 37;
  const discount = 0.9;

  // Данная функция считает курс и возыращает во внешний мир ресультат ( ретурн )
  // и далее мы можем его использовать, как параметр для другой функции
  function convert(amout, curr){
    console.log(curr*amout);
    return(curr * amout);
  }

  /* в это функции мы считаем скидку от результата, что дала предыдущая функция */
  function promotion(result) {
    console.log( result * discount);
  }

  const res = convert(500, usdCuur2); // храним результат функции расчета курса
  promotion(res); // полученный рузьтат передаем в функцию, чтобы посчитать скидку.
  // короткая запись передач результат функции convert в функция promotion
  promotion(convert(500, usdCuur2)); /* результат расчета курса полученый при помощи return 
  сразу передается в качестве аргумента в функцию promotion */

 /*
 1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.

Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!".
 В решении вызывать функцию не нужно, программа сделает это за вас.

P.S. возвращать - это использовать ключевое слово return.

P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах.
  */



function sayHello (text){
    return `Привет ${text}`;
 }
 let text = 'Антон';
 console.log(sayHello('Антон'));
 ;
/*
2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и 
возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.

Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].
*/



function returnNeighboringNumbers(num){

    return arr =[num -1, num, num + 1];

}


console.log(returnNeighboringNumbers(5));

/*3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база,
 второе число - это сколько раз нужно будет повторить это число в прогрессии. 
(Смотри пример ниже). 
Функция должна возвращать строку (или число в особых случаях, о которых ниже), 
где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.

Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. 
(Проверяем через оператор typeof)

Примеры:

Вызов функции getMathResult(5, 3) даст ответ 5---10---15

Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30

Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50

Вызов функции getMathResult(10, '5') даст ответ 10

Вызов функции getMathResult(10, 0) даст ответ 10

Вызов функции getMathResult(20, -5) даст ответ 20

Эта задача уже ближе к реальности, когда вам нужно учитывать и тип данных у аргументов,
 проверять их и продумывать логику работы внутри. Обратите внимание на прогрессию, 
 она рассчитывается по простой формуле умножения. Если первый аргумент 5, а второй 3, 
 то число повторяется 3 раза, каждый раз увеличиваясь на само себя. 
 Это базовая математика, которая и нужна для работы в 95% случае на фронтенде. */

 function getMathResult (a, b) {  
        if(typeof b != 'number' || b <=0) {
            return a;
        } 

        let str = '';
        let space = '---'

        for ( i = 1; i <= b; i++)
        if (i === b) {
            str += `${a * i}`
        } else {
            str += `${a * i}---`

        }
        return str;
 }
 console.log(getMathResult(5, 3));
 console.log(getMathResult(10, '5'));
 console.log(getMathResult(20, -5));
 console.log(getMathResult(3, 10));
console.log(getMathResult(10, 5));



/*
Урок 29. Задачи. Продвинутый JS

1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба
 (тоже базовая математика, иногда используется в создании анимаций).
 Эта функция принимает в себя целое число со значением длины ребра куба.
  Ответ выведите в формате строки, который изображен в примерах.

Если в функцию попал неправильный аргумент или вычислить значения невозможно - 
вернуть строку "При вычислении произошла ошибка"

НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. 
Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.

Примеры:

calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'

calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'

calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'

calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'

calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'
*/

function calculateVolumeAndArea (a) {
    let str = '';
    console.log(str);
if (typeof a != 'number' || a <= 0 || !Number.isInteger(a)) {
 str = "При вычислении произошла ошибка";
} else {
    let volumeCube = Math.pow(a, 3); 
    let areaCube = Math.pow(a,2) *6;
 str  = `"Объем куба равен" ${volumeCube}, "площадь куба равна" ${areaCube}`; 
}
console.log(str);
return str;
}

calculateVolumeAndArea(5);
calculateVolumeAndArea(15);
calculateVolumeAndArea(15.5);
calculateVolumeAndArea('15');
calculateVolumeAndArea(-15);


/*
2) Постепенно переходим к более реалистичным задачам :) Вы обнаружите, что там используется все тоже самое.

Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Наглядно:



Функция принимает только целое число от 1 до 36.

Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:

"Ошибка. Проверьте правильность введенного номера места"

Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

Пример:

getCoupeNumber(33)  => 9

getCoupeNumber(7)  => 2

getCoupeNumber(300)  => "Таких мест в вагоне не существует"

getCoupeNumber(0)  => "Таких мест в вагоне не существует"

getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"

getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"

getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"
 */


function getCoupeNumber(num) {
    let str = '';
    if(typeof num != 'number' || num < 0  || !Number.isInteger(num)) {
         str = "Ошибка. Проверьте правильность введенного номера места";
    } 
    else if ( num === 0 || num >= 36) {
         str = "Таких мест в вагоне не существует";
    } else if (num >=1 && num <= 36) {
         str = Math.ceil(num/4);
    }
   
    console.log(str);
    return str;
}

getCoupeNumber(33);
getCoupeNumber(7);
getCoupeNumber(300);
getCoupeNumber(0); 
getCoupeNumber(7.7);
getCoupeNumber(-10);
getCoupeNumber('Hello');


// ещё один варинт решения 

function getCoupeNumber(seatNumber) {
    if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    return Math.ceil(seatNumber / 4);
    
}

getCoupeNumber(33);


/* 
Урок 29 -2 . Задачи. Продвинутый JS 
1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. 
(Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. 
Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, 
проверьте данные"

Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). 
Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд).
 Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов).
  Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

Пример:

getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

getTimeFromMinutes(50) => "Это 0 часов и 50 минут"

getTimeFromMinutes(0) => "Это 0 часов и 0 минут"

getTimeFromMinutes(-150) => "Ошибка, проверьте данные"
 */

function getTimeFromMinutes(minute) {
    let str ='';
    let h = Math.trunc(minute/60);
    let m = minute % 60;

    if(typeof minute != 'number' || minute < 0 || !Number.isInteger(minute)) {
       str = `Ошибка, проверьте данные`;

    } else if (h === 0) {
        str = `Это ${h} часов и ${m} минут`;
    }
    else  if (h === 1) {
        str = `Это ${h} час и ${m} минут`;

    } else if( h >= 2 && h <= 4) {
         str = `Это ${h} часа и ${m} минут`;

    } else if( h >= 5 && h <=10) {
        str = `Это ${h} часов и ${m} минут`;
   }

    console.log(str);
    return str;
}

getTimeFromMinutes(600);
getTimeFromMinutes(150);
getTimeFromMinutes(50);
getTimeFromMinutes(90);
getTimeFromMinutes(0);
getTimeFromMinutes(-150);




function getTimeFromMins(mins) {
    let hours = Math.trunc(mins/60);
	let minutes = mins % 60;
	return hours + 'ч. ' + minutes + 'м.';
};

console.log(getTimeFromMins(40));
console.log(getTimeFromMins(122));
console.log(getTimeFromMins(228));
console.log(getTimeFromMins(1337));

/*
2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. 
Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

Пример:

findMaxNumber(1, 5, 6.6, 11); =>  11

findMaxNumber(1, 5, '6', '10');  =>  0
 */

function findMaxNumber(a,b,c,d) {
    let result = '';
    if(typeof a != 'number' || typeof b != 'number' || typeof c != 'number' || typeof d != 'number' ) {
        result = 0;
    } else {
         result = Math.max(a,b,c,d);
    }
   
    console.log(result);
    return result;
}

findMaxNumber(1, 5, 6.6, 11);
findMaxNumber(1, 5, '6', '10');

// более изящный вариант 
function findMaxNumber(a, b ,c, d) {
    // Самое простое - это использовать Math.max :)
    // А оптимизировать такую проверку мы научимся совсем скоро
    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b ,c, d);
    }
}

findMaxNumber(1, 5, 6.6, 10.5);
findMaxNumber(1, 5, '6', '10');

// ешё один сопсоб решить задачу. 
const arr = [1, 5, 6.6, 10.5, 225, 5555];

function findMax(arr) {
    let max = [0];
    for(let num of arr) {
        if(max < num) {
            max = num;
        }
    }
    console.log(max);
    return max;
}
findMax(arr);


/*

3) Это одна из классических задач в программировании на самых разных языках. 
Скорее всего вы слышали про числа Фибоначчи, где первые два числа равны 0 и 1, 
а каждое последующее число равно сумме двух предыдущих чисел. 
И на собеседованиях часто дают задачи, связанные с этими числами. 
Есть разные вариации и тут мы попробуем решить одну из них.

Сразу скажу, что есть варианты решения через прием, называемый рекурсия. 
Он дальше по курсу. Но этот вариант нужно решить без её применения. 
Такие условия часто ставят на собеседованиях. 
Когда вы пройдете урок по рекурсии, вы можете вернуться в это задание и попробовать решить по другому. 
Так же подсказку (но не решение этой задачи) можно найти тут. Но постарайтесь не открывать 🙂

Задача:

Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. 
Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. 
Причем, их количество должно быть равно переданному аргументу.

Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.

Пример:

fib(4) => ''0 1 1 2"

fib(7) => ''0 1 1 2 3 5 8"

fib('7') => ''"

fib(1) => "0"

fib(0) => ''"
 */

function fib(num) {
    let fibNUm ='';
    let a = 0 , b = 1;
    if(typeof num !='number' || num <=0 || !Number.isInteger(num)) {
        fibNUm = '';
    }

    for (i = 0; i < num ; i++ ) {
        if ( i + 1 === num ) { 
            fibNUm += `${a}`;
        }  else {
            fibNUm +=`${a} `;
        } 

        let c = a+b;
        a = b;
        b = c;
    }
    console.log(fibNUm);
    return fibNUm;
}
fib(4);
fib(7);
fib('7');
fib(1);
fib(0);

var n = 10; // Сколько элементов хотим получить
var fibonacci = [0, 1]; // Первые два элемента последовательности Фибоначчи

for (i = 2; i < n; i ++) {
  // Получаем i-й элемент последовательности как сумму предыдущих двух
  fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}

console.log(fibonacci.slice(0,n));


function fibi(n) {
let fibNUm = '';
 let arr = [0, 1]
    if(typeof n !='number' || n <= 0 || !Number.isInteger(n)) {
        fibNUm = "";
    } else if(n === 1){
        fibNUm  = 0;
    } else {
   
    for(i = 1; i <= n-1; i++) {
        arr.push(arr[i-1] + arr[i]);
    }
    arr = arr.join(" ");
    console.log(arr);
    return arr; 
    }
}
fibi(4);
fibi(7);
fibi('7');
fibi(1);
fibi(0);


// правильный вариант 
function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num ; i++) {
        if (i + 1 === num) {
            result += `${first}`;
            // Без пробела в конце
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return result;
}

console.log(fib(5));
console.log(fib(7));
console.log(fib(13));
console.log(fib('7'));
console.log(fib(0));
console.log(fib(1));