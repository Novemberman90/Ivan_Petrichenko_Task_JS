
/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания
     
let numberOfFilms = prompt ("Сколько фильмов вы уже посмотрели ?", ''); 
// +promt = если пустая строка то "+" преобразует пустую строку в ноль
let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    generes : [],
    privat : false,
};

const question1 = prompt("Один из последних просмотренных фильмов ?", '');
const question2 = +prompt("На сколько вы его оцените ?", '');
    
      personalMovieDB.movies[question1] = question2;
     

for (i=0; i < 2; i++) {
    const question1 = prompt("Один из последних просмотренных фильмов ?",'');
    const question2 = +prompt("На сколько вы его оцените ?", '');
personalMovieDB.movies[question1] = question2;
// если не нажал "Отмена" в question1 и question2 и не оставил пустую строку и меньше 10 символов тогда ок
    if( question1 != null && question2 != null && question1 != '' && question2 != ''
    && question1.length < 10) {
        personalMovieDB.movies[question1] = question2;
        alert ("Done")
    } else { 
        alert('Ещё раз !!!')
         i--; // если не ответил, то мы вернемся на один вопрос назад и так будет каждый раз.
    }; 
    
    /*if((question1 == null || question2 == null) || question1.length < 5 || question2.length < 5){
        alert("Вы что ничего не указали ? Спросим вас ещё раз!");
        question1 = prompt("Один из последних просмотренных фильмов ?!!!",''),
         question2 = prompt("На сколько вы его оцените ?", '');
        
} else {
    alert("Молодец!");
}; */
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log ('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log ('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);
  

// Вариант 1
let j = 0;
while (j < 2) {
   
    const question1 = prompt("Один из последних просмотренных фильмов ?",'');
    const question2 = +prompt("На сколько вы его оцените ?", '');
    personalMovieDB.movies[question1] = question2;
    if( question1 != null && question2 != null && question1 != '' && question2 != ''
    && question1.length < 10) {
        personalMovieDB.movies[question1] = question2;
        alert ("Done")
    } else { 
        alert('Ещё раз !!!')
         i--; // если не ответил, то мы вернемся на один вопрос назад и так будет каждый раз.
    };
     j++;
}


if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log ('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log ('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);


// Вариант 2

let x = 0;
while (x < 2){
    const   question1 = prompt('Последний фильм?', ''),
            question2 = +prompt('Ваша оценка?', '');
    (question1 != null && question2 != null && question1 != '' && question2 != '' && question1.length < 50) ? personalMovieDB.movies[question1] = question2 : x--, console.log("Error");
    x++;
}



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


