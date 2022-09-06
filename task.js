// variables
const addingTask=document.getElementById('adding-task');
const taskcontainer=document.getElementById('task-container');
const inputTask=document.getElementById('ip-task');
// Event Listener
addingTask.addEventListener('click',function(){
    let task=document.createElement('div');
    task.classList.add('task');
    let li=document.createElement('li');
    li.innerText=`${inputTask.value}`;
    task.appendChild(li);
    
    let checkBtn=document.createElement('button');
    checkBtn.innerHTML='<p>+</p>';
    checkBtn.classList.add('checkTask');
    task.appendChild(checkBtn);

    let deleteBtn=document.createElement('button');
    deleteBtn.innerHTML='<p>-<p>';
    deleteBtn.classList.add('deleteTask');
    task.appendChild(deleteBtn);

    if(inputTask.value === ""){
        alert("Enter a task");
    }
    else{
        taskcontainer.appendChild(task);
    }
        inputTask.value="";
        
        checkBtn.addEventListener('click',function(){
            checkBtn.parentElement.style.textDecoration="line-through"; 
        });

        deleteBtn.addEventListener('click',function(e){
            let target=e.target;
            target.parentElement.parentElement.remove();
        });
}); 
