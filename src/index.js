 document.addEventListener('DOMContentLoaded', () => {
   let form = document.querySelector('form')
   form.addEventListener('submit', (e) => {
     e.preventDefault()
     buildToDo(e.target.new_task_description.value   })
 });


 //
 function buildToDo(todo) {
   let p = document.createElement('p')
   let btn = document.createElement('button')
   btn.addEventListener('click', handleDelete)
   btn.textContent = 'x'
   p.textContent = `${todo} `
   p.appendChild(btn)
   console.log(p)
   document.querySelector('#list').appendChild(p)
 }

//How to delete an element
 handleDelete = (e) => {
   e.target.parentNode.remove()
 }

