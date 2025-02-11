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
})
1. выбираю кнопки( 2)
2. выбираю родителя к которому будет добавляться/убирать класс - он 1, класс, который добавляется в моем случае 2 должно быть, чтобы влево и вправо двигалось
3. определяю, когда нажали на кнопку
4. Добавляем класс, если его нет, а если есть, то убираем? в 1 сторону только понимаю как, туда обратно
let buttonLeftSlider = document.getElementById('slider_btn-left') - выбираю кнопку влево
let buttonRightSlider = document.getElementById('slider_btn-right') - выбираю кнопку вправо
let elementSlider = document.querySelector('.slider__block_reviews'); - выбираю родителя
buttonLeftSlider.onclick = function () { определяю, когда нажали на кнопку влево
    if (elementSlider.classList.contains("slider__show-left")) {
        elementSlider.classList.remove("slider__show-left");
    } else {
        elementSlider.classList.add("slider__show-left")
    }
}
})
еще 1 див в котором все слайды

1. Узнаем ширину 1 слайда и записываем в переменную
2. определяю когда нажали на кнопку и на какую в зависимости от кнопки определяю движение слайда ( отрицательное либо положительное значение)
3. при каждом клике определяю текущее значение свойства transforme
4. к текущему значению прибавляю или вычитаю ширину слайда, которое хранится в переменной

свойство transforme translate нужно выставлять в inline стиле





