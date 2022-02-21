async function getHero () {
    let number = document.getElementById('num').value
    let url = `https://swapi.dev/api/people/${number}/`
    let response = await fetch(url);
    let hero

    if (response.ok) { // если HTTP-статус в диапазоне 200-299
    // получаем тело ответа (см. про этот метод ниже)
        hero = await response.json();
        console.log(hero)
    } else {
        alert("Ошибка HTTP: " + response.status);
    }

    let hero2Block = document.querySelector('.hero2')
    hero2Block.insertAdjacentHTML('beforeend', `
        <li class="heroe2" draggable = "true">
            <div class="name">name: ${hero.name}</div>
            <div class="height">Рост: ${hero.height}</div>
            <div class="birth_year">Дата рождения: ${hero.birth_year}</div>
        </li>    
    `)
}

const tasksListElement = document.querySelector(`.hero2`);
const taskElements = tasksListElement.querySelectorAll(`.heroe2`);

tasksListElement.addEventListener(`dragstart`, (evt) => {
    evt.target.classList.add(`selected`);
})
  
tasksListElement.addEventListener(`dragend`, (evt) => {
    evt.target.classList.remove(`selected`);
});


tasksListElement.addEventListener(`dragover`, (evt) => {
    // Разрешаем сбрасывать элементы в эту область
    evt.preventDefault();
  
    // Находим перемещаемый элемент
    const activeElement = tasksListElement.querySelector(`.selected`);
    // Находим элемент, над которым в данный момент находится курсор
    const currentElement = evt.target;
    // Проверяем, что событие сработало:
    // 1. не на том элементе, который мы перемещаем,
    // 2. именно на элементе списка
    const isMoveable = activeElement !== currentElement &&
      currentElement.classList.contains(`heroe2`);
  
    // Если нет, прерываем выполнение функции
    if (!isMoveable) {
      return;
    }
  
    // Находим элемент, перед которым будем вставлять
    const nextElement = (currentElement === activeElement.nextElementSibling) ?
        currentElement.nextElementSibling :
        currentElement;
  
    // Вставляем activeElement перед nextElement
    tasksListElement.insertBefore(activeElement, nextElement);
  });


const getNextElement = (cursorPosition, currentElement) => {
    const currentElementCoord = currentElement.getBoundingClientRect();
    const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;
  
    const nextElement = (cursorPosition < currentElementCenter) ?
        currentElement :
        currentElement.nextElementSibling;
  
    return nextElement;
};




async function getPlanet () {
    let number = document.getElementById('num').value
    let url = `https://swapi.dev/api/planets/${number}/`
    let response = await fetch(url);
    let planet

    if (response.ok) { // если HTTP-статус в диапазоне 200-299
    // получаем тело ответа (см. про этот метод ниже)
        planet = await response.json();
        console.log(planet)
    } else {
        alert("Ошибка HTTP: " + response.status);
    }

    let planet2Block = document.querySelector('.planet2')
    planet2Block.insertAdjacentHTML('beforeend', `
        <li class="planeto2">
            <div class="name">name: ${planet.name}</div>
            <div class="climate">Климат: ${planet.climate}</div>
        </li>    
    `)
}

async function getShip () {
    let number = document.getElementById('num').value
    let url = `https://swapi.dev/api/starships/${number}/`
    let response = await fetch(url);
    let ship

    if (response.ok) { // если HTTP-статус в диапазоне 200-299
    // получаем тело ответа (см. про этот метод ниже)
        ship = await response.json();
        console.log(ship)
    } else {
        alert("Ошибка HTTP: " + response.status);
    }

    let ship2Block = document.querySelector('.ship2')
    ship2Block.insertAdjacentHTML('beforeend', `
        <li class="shipo2">
            <div class="name">name: ${ship.name}</div>
            <div class="model">Модель: ${ship.model}</div>
        </li>    
    `)
}

