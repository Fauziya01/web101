// Write all the JS Code related to Home Page Here 
document.querySelector("form").addEventListener("submit",todotask)
let taskArr=JSON.parse(localStorage.getItem("task"))||[];
let comArr=JSON.parse(localStorage.getItem("task-completed"))||[];
displaytable(taskArr)

function todotask(event){
    event.preventDefault();
    let taskName=document.querySelector("#name").value;
    let taskType=document.querySelector("#type").value;
    let taskDate=document.querySelector("#date").value;
    let select=document.querySelector("#priority").value;
    let taskObj={
        taskName,
        taskType,
        taskDate,
        select,
    };

    taskArr.push(taskObj);
    
    localStorage.setItem("task",JSON.stringify(taskArr));
    displaytable(taskArr);
   
}console.log(taskArr)
function displaytable(taskArr){
    document.querySelector("tbody").innerHTML="";
    for(let i=0; i<taskArr.length;i++){
    let row =document.createElement("tr");
    let td1=document.createElement("td");
   td1.innerText=taskArr[i].taskName;
    let td2=document.createElement("td");
    td2.innerText=taskArr[i].taskType;
    let td3=document.createElement("td");
    td3.innerText=taskArr[i].taskDate;
    let td4=document.createElement("td");
    td4.innerText=taskArr[i].select;
    let td5=document.createElement("td");
    td5.innerText="Complete"
   td5.addEventListener("click",function(){
    comArr.push(taskArr[i]);
    localStorage.setItem("task-completed",JSON.stringify(comArr))

   })
    row.append(td1,td2,td3,td4,td5);
    document.querySelector("tbody").append(row);
    }
    
}