let body = document.querySelector('body')
body.insertAdjacentHTML('afterbegin',`
    <h1>Learning JavaScript</h1>
    <button onclick='changeColor()'>Change color</button>
    <h2>1000 задач</h2>
    <h3>Begin</h3>
`)
let mainHeading = document.querySelector('h1')
let changeBTN = document.querySelector('button')

mainHeading.style.color = 'black'

function changeColor () {
    let red = Math.round(Math.random()*255)
    let green = Math.round(Math.random()*255)
    let blue = Math.round(Math.random()*255)
    // alert(red)
    mainHeading.style.color = `rgb(${red},${green},${blue})`
    mainHeading.style.fontSize = '50px'
    changeBTN.innerHTML = mainHeading.style.color
}
let nmHeading = document.querySelector('h2')
nmHeading.style.fontSize = '35px'
let blockHeading = document.querySelector('h3')
blockHeading.style.fontSize = '30px'
blockHeading.style.color = 'darkgreen'
 function begin1() {
     let a = Number(prompt('введите число'))
     alert(`Периметр = ${4 * a}`)
 }
 function begin2() {
    let a = Number(prompt('введите число'))
    alert(`Площадь = ${a * a}`)
}
function begin3() {
    let a = Number(prompt('введите число a'))
    let b = Number(prompt('введите число b'))
    alert(`Площадь прямоугольника = ${a * b}`)
    alert(`Периметр прямоугольника = ${2 * (a + b)}`)
}
function begin4() {
    let d = Number(prompt('введите диаметр'))
    alert(`Длина окружности = ${d * 3.14}`)
}
function begin5() {
    let a = +(prompt('введите длину ребра куба'))
    alert(`Объем куба = ${a**3}`)
    alert(`Площадь поверхности куба = ${6 * a**2}`)
}
function begin6() {
    let a = +(prompt('длина ребра а'))
    let b = +(prompt('длина ребра b'))
    let c = +(prompt('длина ребра c'))
    alert(`Объем прямоугольного паралеллепипида = ${a * b * c}`)
    alert(`Площадь поверхности = ${2 * (a*b + b*c + c*b)}`)
}
function begin7() {
    let r = Number(prompt('введите радиус'))
    alert(`Длина окружности = ${2 * 3.14 * r}`)
    alert(`Площадь = ${3.14 * r * r}`)
}
function begin8() {
    let a = Number(prompt('введите 1ое число'))
    let b = Number(prompt('введите 2ое число'))
    alert(`Среднее арифметическое = ${(a + b) / 2}`)
}
function begin9() {
    let a = +(prompt('введите 1ое число'))
    let b = +(prompt('введите 2ое число'))
    alert(`Среднее геометрическое = ${(a * b)**(1/2)}`)
}
function begin10() {
    let a = +(prompt('введите 1ое число'))
    let b = +(prompt('введите 2ое число'))
    alert(`Сумма их квадратов = ${a**2 + b**2}`)
    alert(`Разность их квадратов = ${a**2 - b**2}`)
    alert(`Произведение их квадратов = ${a**2 * b**2}`)
    alert(`Частное их квадратов = ${a**2 / b**2}`)
}
function begin11() {
    let a = +(prompt('введите 1ое число'))
    let b = +(prompt('введите 2ое число'))
    alert(`Сумма их модулей = ${Math.abs(a) + Math.abs(b)}`)
    alert(`Разность их модулей = ${Math.abs(a) - Math.abs(b)}`)
    alert(`Произведение их модулей = ${Math.abs(a) * Math.abs(b)}`)
    alert(`Частное их модулей = ${Math.abs(a) / Math.abs(b)}`)
}
function begin12() {
    let a = +(prompt('введите первый катет'))
    let b = +(prompt('введите второй катет'))
    let c = (a**2 + b**2)**(1/2)
    alert(`Гипотенуза = ${c}`)
    alert(`Периметр = ${a + b + c}`)
}
function begin13() {
    let R1 = +(prompt('введите больший радиус R1'))
    let R2 = +(prompt('введите меньший радиус R2'))
    let S1 = 3.14 * R1**2
    let S2 = 3.14 * R2**2
    alert(`Площадь большего круга = ${S1}`)
    alert(`Площадь меньшего круга = ${S2}`)
    alert(`Площадь кольца = ${S1 - S2}`)
}
function begin14() {
    let L = Number(prompt('введите длину окружности'))
    let r = L / (2 * 3.14)
    alert(`Радиус окружности = ${r}`)
    alert(`Площадь круга = ${3.14 * (r * r)}`)
}
function begin15() {
    let S = +(prompt('введите площадь круга'))
    let D = (S * 4 / 3.14)**(1/2)
    alert(`Длина окружности = ${3.14 * D}`)
    alert(`Диаметр окружности = ${D}`)
}
























function begin18() {
    let A = Number(prompt('введите координату т.А'))
    let B = Number(prompt('введите координату т.B'))
    let C = Number(prompt('введите координату т.C'))
    alert(`AC*BC = ${(B - A) * (C - B)}`)
}
function begin24() {
    let A = Number(prompt('введите А'))
    let B = Number(prompt('введите B'))
    let C = Number(prompt('введите C'))
    let b = B
    let C1 = A
    let B1 = C
    let A1 = b
    alert(`A = ${A1}, B = ${B1}, C = ${C1}`)
}