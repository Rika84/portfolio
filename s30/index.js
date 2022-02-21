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



















// body.insertAdjacentHTML('after',`
//     <h3>Integer</h3>
// `)


function if1() {
    let x = +(prompt('введите число'))
    if (x > 0 ){
        alert(`${x+1}`)
    }
    else{
        alert(`${x}`)
    }
}
function if2() {
    let x = +(prompt('введите число'))
    if (x > 0 ){
        alert(`${x+1}`)
    }
    else{
        alert(`${x-2}`)
    }
}
function if3() {
    let x = +(prompt('введите число'))
    if (x > 0 ){
        alert(`${x+1}`)
    } else if (x < 0){
        alert(`${x-2}`)
    } else{
        x = 10
        alert(`${x}`)
    }
}
function if4() {
    let a = +(prompt('введите число'))
    let b = +(prompt('введите число'))
    let c = +(prompt('введите число'))
    let x = 0
    if (a > 0 ){
        x += 1
    }
    if (b > 0 ){
        x += 1
    }
    if (c > 0 ){
        x += 1
    }
    alert(`${x}`)
}


function if6() {
    let a = +(prompt('введите число'))
    let b = +(prompt('введите число'))
    alert(`${a && b}`)
}
function if7() {
    let a = +(prompt('введите число'))
    let b = +(prompt('введите число'))
    if (a < b){
        alert('номер 1')
    }
    if (b < a){
        alert('номер 2')
    }
}
function if8() {
    let a = +(prompt('введите число'))
    let b = +(prompt('введите число'))
    if (a > b ){
        alert(`${a}, ${b}`)
    }
    if (b > a ){
        alert(`${b}, ${a}`)
    }
    else{
        alert(`${b}, ${a}`)
    }
}


function if12() {
    let a = +(prompt('введите число'))
    let b = +(prompt('введите число'))
    let c = +(prompt('введите число'))
    alert(`${a ?? b ?? c}`)
}

function if14() {
    let a = +(prompt('введите число'))
    let b = +(prompt('введите число'))
    let c = +(prompt('введите число'))
    alert(`${a ?? b ?? c}`)
    alert(`${a && b && c}`)
}

function if18() {
    let a = +(prompt('введите число'))
    let b = +(prompt('введите число'))
    let c = +(prompt('введите число'))
    let m = (a == b) ? 'номер 3':
        (b == c) ? "номер 1":
        'номер 2';
    alert(`${m}`)
}





function if24() {
    let x = +(prompt('введите число'))
    let k = 0
    if (x > 0){
        k = 2 * Math.sin(x)
    }
    if(x < 0){
        k = 6 - x
    }
    alert(`${k}`)
}
function if25() {
    let x = +(prompt('введите число'))
    let k = 0
    if ((x < -2) || (x > 2)){
        k = 2 * x
    }
    else{
        k = -3 * x
    }
    alert(`${k}`)
}





function Proc16() {
    function Sign(X) {
        if (X < 0) {
            return -1
        } else if (X == 0) {
            return 0
        } else {
            return 1
        }
    }
    let A = +prompt('Input A:')
    let B = +prompt('Input B:')
    alert(`${Sign(A)+Sign(B)}`)
}
function Proc17(){
    alert("A*x**2 + B*x + C = 0")
    function RootCount(A, B, C){
        if (D < 0) {
            return 'нет корней'
        } else if (D = 0) {
            return 'один корень'
        } else {
            return 'два корня'
        }
    }
    let A = +prompt('Введите A:')
    let B = +prompt('Введите B:')
    let C = +prompt('Введите C:')
    let D = B**2 - 4*A*C
    alert(`${RootCount(D)}`)
}
function Proc18() {
    alert('S = π * R**2')
    let R = +prompt('Введите R')
    let S = Math.PI * R**2
    alert(`Площадь круга = ${S}`)
}
let Proc19 = function RingS(R1, R2) {
    let R1 = +prompt('Введите больший радиус')
    let R2 = +prompt('Введите меньший радиус')
    alert(`Площадь кольца = ${(R1-R2)**2*Math.PI}`)
}



function For1() {
    let N = +prompt('N=')
    let K = +prompt('K=')
    for (let i = 0; i < N; i++) {
        alert(i+' '+K)
    }
}
function For2() {
    let A = +prompt('A=')
    let B = +prompt('B=')
    for (let i = 1; A <= B; A++, i++){
        alert(A+" "+"Количество чисел = "+i)
    }
}
function For3() {
    let A = +prompt('A=')
    let B = +prompt('B=')
    for (let i = 1; (--B) > A; i++){
        alert(B+" "+"Количество чисел = "+i)
    }
}
function For4() {
    let A = +prompt('Введите цену конфет')
    for (let i = 1; i <= 10; i++){
        alert(i+' кг конфет = '+i*A)
    }
}


function For8() {
    let A = +prompt('A=')
    let B = +prompt('B=')
    let k = A
    for (; A <= B; A++) {
        k = k*A
    }
    alert(k)
}


function ser1() {
    let mas = []
    for (let i = 0; i < 10;i++) {
    // let c = +prompt(Input ${i} element)
    let c =  Math.round(Math.random()*10)
    mas.push(c)
    // mas[i] = c
    }
    let sum = 0
    for (let i = 0; i < mas.length; i++) {
    sum += mas[i]
    }
    let sum2 = 0
    for (const iterator of mas) {
    sum2 += iterator
    }
    alert (`Сумма = ${sum}
Сумма2 = ${sum2}
${mas}`)
}

function ser2() {
    let a = []
    for (let i = 0; i < 10; i++) {
        let c =  Math.round(Math.random()*10)
        a.push(c)
    }
    let pr = 1
    for (let i = 0; i < a.length; i++) {
        pr *= a[i]
    }
    alert (`Произведение = ${pr}
${a}`)
}

function ser3() {
    let k = []
    for (let i = 0; i < 10; i++) {
        let c = Math.round(Math.random()*10)
        k.push(c)
    }
    let sum = 0
    for (let i = 0; i < k.length; i++) {
        sum += k[i]
    }
    alert (`среднее значение = ${sum/10}
${k}`)
}

function ser4() {
    let N = +prompt('Введите количество чисел')
    k = []
    for(let i = 0; i < N; i++) {
        let c = Math.round(Math.random()*N)
        k.push(c)
    }
    let sum = 0
    let pr = 1
    for (let i = 0; k.length; i++) {
        sum += k[i]
        pr *= k[i]
    }
    alert (`Сумма = ${sum}
Произведение = ${pr}`)
}

let setName = function () {
    let name = prompt('Input your name')
    localStorage.setItem('my name',name)
}

let getName = () => {
    let name = localStorage.getItem('my name')
    alert(name)
}

function getStorageKey() {
    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
        alert(`${key}: ${localStorage.getItem(key)}`);
    }
}