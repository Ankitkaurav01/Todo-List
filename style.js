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
             <div>
             <i data-index=${i} data-edit="true" class="ri-pencil-line"></i>
             &NonBreakingSpace;
             <i data-index=${i} data-delete="true" class="ri-delete-bin-6-line"></i>
           </div>
          </div>`; 
    }
}

taskList.addEventListener('click', function(data){
    const index = data.target.dataset.index;
    const isDelete = data.target.dataset.delete === 'true';
    const isEdit = data.target.dataset.edit === 'true';

    if (isDelete) {
        todoArray.splice(index, 1);
        showAddedTask();
    }

    if (isEdit) {
        const task = todoArray[index];
        taskName.value = task.name;
        taskStatus.value = task.status;

        todoArray.splice(index, 1);
    }

   
});

showAddedTask();
