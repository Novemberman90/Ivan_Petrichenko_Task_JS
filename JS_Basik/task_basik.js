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