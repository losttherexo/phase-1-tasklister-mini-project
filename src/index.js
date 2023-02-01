document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target.new_task_description.value)
  })
});
