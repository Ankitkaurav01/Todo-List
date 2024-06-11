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
    }

    if (isEdit) {
        const task = todoArray[index];
        taskName.value = task.name;
        taskStatus.value = task.status;

        todoArray.splice(index, 1);
    }

    showAddedTask();
});

showAddedTask();










// taskList.addEventListener('click', function(data){
//       console.log("list clicked : ",data.target.dataset.index)
//       console.log("list clicked edit: ",data.target.dataset.delete)

//       if(data.target.dataset.delete == 'true'){
//           todoArray.splice(data.target.dataset.index,1)
//       }

//       if(data.target.dataset.edit == 'true'){
//         todoArray[data.target.dataset.index].status = ""
//     }

//     showAddedTask();
   
// });
// sum = 0;
// arr = [1,2,3,4]

// function addValues(index){
    
//     console.log(arr[index]);
//     console.log(sum);
//     if(index < arr.length){ 
//         sum += arr[index]
//         addValues(index + 1);
        
//     }
// }



// array per traverse karne ka tareeka in foreach
// map bina return ke nahi chalta or hamesha return m ek new array return karega
// calidrom -> ulta seedha ek sa (nitin)
// anagram -> sabhi letter ek se (earth heart)

// 1. remove duplicates of an array.
// 2. smallest elemenmt in array.
// 3. greatest element in array.
// 4. second smallest /greatest element in array.
// 5. freuency of an element in array | element with highest frequency in array.


                                                    /*Total JS Upto to Today                                                                                
                
               1.) const,let,var
               2.) Changing of css by direct Js
               3.)  Conditional Statements
                     a.) if / else 
                     b.) if / else if / else
                     c.) switch case 
               4.) function
               5.) for loop
               6.) eventlisnter
               7.) array
               8.) object
               9.) foreach,map
               10.) Localstorage 
               11.) ToDo List
                                                                                                                                 .
                                                   #Home Work#
                                    1. remove duplicates of an array.
                                    2. smallest elemenmt in array.
                                    3. greatest element in array.
                                    4. second smallest /greatest element in array.
                                    5. freuency of an element in array | element with highest frequency in array.



                                    #Types of JavaScript Operators
There are different types of JavaScript operators:

Arithmetic Operators
Assignment Operators
Comparison Operators
String Operators
Logical Operators
Bitwise Operators
Ternary Operators
Type Operators
                    

                                        #JavaScript has 8 Datatypes
String
Number
Bigint
Boolean
Undefined
Null
Symbol
Object

The Object Datatype
The object data type can contain both built-in objects, and user defined objects:

Built-in object types can be:

objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.



                                                                                       
                                     .                                      .         .
                                    . .                                     .        .
                                   .   .                                    .       .
                                  .     .                                   .      .
                                 .       .                                  .     .
                                .         .                                 .    .
                               .           .                                .   .
                              .             .                               .  .
                             . . . . . . . . .                .             . .
                            .                 .                             .  .
                           .                   .                            .   .
                          .                     .                           .    .
                         .                       .                          .     .
                        .                         .                         .      .
                       .                           .                        .       .
                                                                            .        .
                                  .                                                     */
