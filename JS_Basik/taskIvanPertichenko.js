
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

const question1 = prompt("Один из последних просмотренных фильмов ?", '').trim();
const question2 = +prompt("На сколько вы его оцените ?", '');
    
   personalMovieDB.movies[question1] = question2;
     

for (i=0; i < 2; i++) {
    const question1 = prompt("Один из последних просмотренных фильмов ?",'').trim();
    const question2 = +prompt("На сколько вы его оцените ?", '');
personalMovieDB.movies[question1] = question2;
// если не нажал "Отмена" в question1 и question2 и не оставил пустую строку и меньше 10 символов тогда ок
    if( question1 != null && question2 != null && question1 != '' && question2 != ''
    && question1.length < 10) {
        personalMovieDB.movies[question1] = question2;
        alert ("Done");
    } else { 
        alert('Ещё раз !!!')
         i--; // если не ответил, то мы вернемся на один вопрос назад и так будет каждый раз.
         console.log('error');
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



