
'use strict';

// Код возьмите из предыдущего домашнего задания
     
let numberOfFilms; 
// +promt = если пустая строка то "+" преобразует пустую строку в ноль
function start() {
    numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели ?", '');
// если будет введена строка или пустая строка или нажато "Отмена" тогда вопрос повторится и до тех пор пока 
// не будет введено число
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели ?", '');
    }

}
start();

let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    generes : [],
    privat : false,
};

//const question1 = prompt("Один из последних просмотренных фильмов ?", '');
//const question2 = +prompt("На сколько вы его оцените ?", '');
    
      //personalMovieDB.movies[question1] = question2;

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const question1 = prompt("Один из последних просмотренных фильмов ?",'').trim();
        const question2 = +prompt("На сколько вы его оцените ?", '');
        // personalMovieDB.movies[question1] = question2;
    // если не нажал "Отмена" в question1 и question2 и не оставил пустую строку и меньше 10 символов тогда ок
        if( question1 != null && question2 != null && question1 != '' && question2 != ''
        && question1.length > 1) {
            personalMovieDB.movies[question1] = question2;
            alert ("Done");
        } else { 
            alert('Ещё раз !!!');
            console.log('error');
             i--; // если не ответил, то мы вернемся на один вопрос назад и так будет каждый раз.
        } 
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log ('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log ('Вы киноман');
} else {
    console.log('Произошла ошибка');
}
}

detectPersonalLevel();

function showMyBD(hidden){
        if(!hidden)
          console.log(personalMovieDB);
}
 showMyBD(personalMovieDB.privat);

function writeYourGenres(){
    for (let i = 1; i <= 3; i++) {
        const question3 = prompt (`Ваш любимый жанр под номерм ${i}`);
        personalMovieDB.generes[i-1] = question3;
        /* 
         в таком случаии в массиве будет ровно 3 значения. Если начнем с 0 тогда в списке будет 4 значения,
         но самое первое значение будет пустое. 

         ещё один вариант записи 
            personalMovieDB.generes[i-1] = prompt (`Ваш любимый жанр под номерм ${i}`);
         */

        
    }
}
writeYourGenres();