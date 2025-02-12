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

	let buttonLeftSlider = document.getElementById('slider_btn-left')
	let buttonRightSlider = document.getElementById('slider_btn-right')
	let elementSlider = document.querySelector('.slider__block');
	
	let wightSlider = document.querySelector('.slider__block_reviews').clientWidth

	buttonLeftSlider.onclick = 10000 - wightSlider;

	console.log(buttonLeftSlider.onclick)
	
})

wightSlider.style.transform = "translateX()";


