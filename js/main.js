const addTask = document.querySelector('#add');
const taskName = document.querySelector('input');
const tasks = document.querySelector('tbody tr');

addTask.addEventListener('click', addTheTask);

console.log(addTheTask);
function addTheTask() {
    const task = document.createElement('td');
    task.textContent=taskName.value;
    tasks.appendChild(task);
}