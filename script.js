
let display =document.getElementById(button)

display.addEventListener('click', displayDetails)
let row=1

function displayDetails(){

let name=document.getElementById('name').value
let age=document.getElementById('age').value
let grade=document.getElementById('grade').value

if( !name || !age || !grade){
    alert("the given feilds can not be empty")
    return
   
}
let table=document.getElementById('button')
let newrow=table.insertRow(row)
let first=newrow.insertcell(0)
let second=table.insertcell(1)
let third=table.insertcell(2)
first.innerHtml=name
second.innerHtml=age
third.innerHtml=grade
row++
}
