let toDo = [] 
let restore = [] 
 
let btnCreate = document.getElementById('btn-create') 
 
let toDoList = document.querySelector('.toDo--list') 
let restoreList = document.querySelector('.restore--list') 
 
btnCreate.addEventListener('click', () => { 
    let text = document.getElementById('text').value 
    let date = new Date(111111111111)
    let tag = document.getElementById('tag').value 
 
    let task = { 
        text, 
        date,
        tag, 
    } 
    toDo.push(task) 
    console.log(toDo) 
    // alert(`${date.getHours()}:${date.getMinutes()}`) 
    // alert(date) 
    toDoList.insertAdjacentHTML('afterbegin', ` 
        <li class="toDo--item"> 
            <div class="item--text">${text}</div> 
            <div class="item--tag">${tag}</div> 
            <div class="item--date">${date}</div> 
            <div class="btn" onclick="moveToRestore(this)">Delete</div> 
        </li> 
    `) 
}) 
 
let moveToRestore = (el) => { 
    let item = el.closest('.toDo--item') 
    console.log(item) 
    let text = item.querySelector('.item--text') 
    // console.log(text.) 
 
 
    restoreList.prepend(item) 
 
}