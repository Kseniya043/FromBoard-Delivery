/*
function getUserInfo(user) {
     return user.name + user.age
}

let user = {
    name: 'Ksusha'
}

user.age = 26
user.info = getUserInfo(user)
console.log(user);*/

/*<!-- 1. Выбрать кнопку
2. Определить когда нажали на кнопку (button.onclick)
3. Добавляем класс, если его нет, а если есть, то убираем
4.

1. определить родителя, записать в переменную его
let block= "main-documents__block" - как выбрать класс?

2. найти методы наличия, добавления, удаления классов:
Наличие: elem.classList.contains("class")
Добавление: elem.classList.add("class")
Удаление: elem.classList.remove("class")

main-documents__block_child
3. использую if else написать логическое условие ( по 3 пункту)*/
function getTranslateX(slide) { //- пишем функцию TranslateX с аргументом slide(любое название)
    const style = window.getComputedStyle(slide);//получаем переменную, которая равна методу getComputedStyle с аргументом slide, который возвращает объект CSS после обработки всех стилей
    const transform = style.transform; //- получаем переменную, которая равна переменной Style с ключем трансформ( из стилей)
    if (!transform || transform === 'none') { //если не равен трансформ или трансформ строго равен строке
        return 0; //- то возвращается 0
    }
    const match = transform.match(/matrix\([^,]+,[^,]+,[^,]+,[^,]+,\s*([^,]+),\s*([^,]+)\)/); //получаем переменную, каким то данным
    return match ? parseFloat(match[1]) : 0; // возращает либо массив (match[2]), либо 0
}

console.log(document.getElementById('show-more-documents'));
document.addEventListener('DOMContentLoaded', function () {
// let button = document.querySelector('[id="show-more-documents"]')

    let button = document.getElementById('show-more-documents')
    let elementWithClassBlock = document.querySelector('.main-documents__block');
    button.onclick = function () {
        if (elementWithClassBlock.classList.contains("main-documents__block_child")) {
            elementWithClassBlock.classList.remove("main-documents__block_child");
        } else {
            elementWithClassBlock.classList.add("main-documents__block_child")
        }
    }

    const buttonLeftSlide = document.getElementById('slider_btn-left') //-выбираем кнопку левую
    const buttonRightSlide = document.getElementById('slider_btn-right')//-выбираем кнопку правую
    const elementSlide = document.querySelector('.slider__block'); //- определяем родителя

    const firstSlideElement = document.querySelector('.slider__block_reviews'); //- определяем элемент класса слайда
    const widthSlide = firstSlideElement?.clientWidth //- определяем ширину по переменной слайда

    console.log(getTranslateX(elementSlide))
    elementSlide.style.transform = `translateX(${widthSlide}px)`;
    console.log(getTranslateX(elementSlide))

})

//Что такое аргумент функции? Что такое массив? шаблонное выражение ${}, книжку прочитать еще
// типы данных, как работать с htm элементами
// создать переменную Х = getTranslateX(elementSlide) - или + widthSlide
//  elementSlide.style.transform = `translateX(${Х}px)`;



