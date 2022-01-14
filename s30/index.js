let body = document.querySelector('body')
body.insertAdjacentHTML('afterbegin',`
    <h1>Learning JavaScript</h1>
    <button onclick='changeColor()'>Change color</button>
    <h2>1000 задач</h2>
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

 function begin1() {
     let a = Number(prompt('введите число'))
     alert(`Периметр = ${4*a}`)
 }
 function begin2() {
    let a = Number(prompt('введите число'))
    alert(`Площадь = ${a*a}`)
}
function begin3() {
    let a = Number(prompt('введите число a'))
    let b = Number(prompt('введите число b'))
    alert(`Площадь прямоугольника = ${a*b}`)
    alert(`Периметр прямоугольника = ${2*(a+b)}`)
}
function begin4() {
    let d = Number(prompt('введите диаметр'))
    alert(`Длина окружности = ${d*3.14}`)
}
function begin7() {
    let r = Number(prompt('введите радиус'))
    alert(`Длина окружности = ${2*3.14*r}`)
    alert(`Площадь = ${3.14*r*r}`)
}
function begin8() {
    let a = Number(prompt('введите 1ое число'))
    let b = Number(prompt('введите 2ое число'))
    alert(`Среднее арифметическое = ${(a+b)/2}`)
}
function begin14() {
    let L = Number(prompt('введите длину окружности'))
    let r = L/(2*3.14)
    alert(`Радиус окружности = ${r}`)
    alert(`Площадь круга = ${3.14*(r*r)}`)
}
function begin18() {
    let A = Number(prompt('введите координату т.А'))
    let B = Number(prompt('введите координату т.B'))
    let C = Number(prompt('введите координату т.C'))
    alert(`AC*BC = ${(B-A)*(C-B)}`)
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