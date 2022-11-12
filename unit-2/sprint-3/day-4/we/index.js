document.querySelector("form").addEventListener("submit",mytodo)
let taskArr=JSON.parse(localStorage.getItem("todo"))||[]
let favArr=JSON.parse(localStorage.getItem("favourite"))||[]

displaytable(taskArr)
function mytodo(event){
    event.preventDefault();
    let taskName=document.querySelector("#task").value;
    let taskPriority =document.querySelector("#priority").value;
    console.log(taskName,taskPriority)
    
    let taskObj={
        taskName,
        taskPriority,
    };
    taskArr.push(taskObj)
    localStorage.setItem("todo",JSON.stringify(taskArr))
    displaytable(taskArr)
    console.log(taskArr)
}


function displaytable(taskArr){
    document.querySelector("tbody").innerHTML="";
    for(let i=0;i<taskArr.length;i++){
        let row = document.createElement("tr");
    let td1= document.createElement("td");
    td1.innerText=taskArr[i].taskName;
    let td2 =document.createElement("td");
    td2.innerText=taskArr[i].taskPriority;
    if(taskArr[i].taskPriority=="High"){
        td2.style.backgroundColor="green"
    }
    else{
        td2.style.backgroundColor="red"
    }
    let td3 = document.createElement("td");
    td3.innerText="add as fav";
    td3.addEventListener("click",function(){
        favArr.push(taskArr[i])
        localStorage.setItem("favourite",JSON.stringify(favArr))
        console.log(favArr)
    })

    
    row.append(td1,td2,td3);
    document.querySelector("tbody").append(row);
    
    }
   
    
}