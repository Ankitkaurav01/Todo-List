const addBtn = document.querySelector(".btn");
const taskList = document.querySelector(".list");
const taskName = document.querySelector(".task");
const taskStatus = document.querySelector(".taskStatus");

let todoArray = [];

addBtn.addEventListener('click', function () {
    let obj = {
        name: taskName.value,
        status: taskStatus.value,
    }

    todoArray.push(obj);

    taskName.value = '';
    taskStatus.value = '';

    showAddedTask();
});

function showAddedTask() {
    taskList.innerHTML = '';
    for (let i = 0; i < todoArray.length; i++) {
        taskList.innerHTML += `
          <div>
             <div>
                 ${todoArray[i].name}
             </div>
             <div>
                 ${todoArray[i].status}
                 
             </div> 
          </div>`;
          
    }
}
