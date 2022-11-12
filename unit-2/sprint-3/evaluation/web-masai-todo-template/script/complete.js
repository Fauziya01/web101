// Write all the JS Code related to Completed Page Here 
let com=JSON.parse(localStorage.getItem("task-completed"));
let favArr=JSON.parse(localStorage.getItem("task-favorites"))||[];
displaytable(com)
console.log(com)
function displaytable(com){
    document.querySelector("tbody").innerHTML=" ";
   for(let i=0;i<com.length;i++){
    let row =document.createElement("tr");
    let td1=document.createElement("td");
    td1.innerText=com[i].taskName;
    let td2=document.createElement("td");
    td2.innerText=com[i].taskType;
    let td3=document.createElement("td");
    td3.innerText=com[i].taskDate;
    let td4=document.createElement("td");
    td4.innerText=com[i].select;

    let td5=document.createElement("td");
    td5.innerText="favourite"
    td5.addEventListener("click",function(){
        favArr.push(com[i]);
        localStorage.setItem("task-favorites",JSON.stringify(favArr))

     
       })
    
    row.append(td1,td2,td3,td4,td5);
    document.querySelector("tbody").append(row);
   }
   
       
    }
    