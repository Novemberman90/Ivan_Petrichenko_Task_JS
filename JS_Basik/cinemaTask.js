
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
    };

};
start();

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