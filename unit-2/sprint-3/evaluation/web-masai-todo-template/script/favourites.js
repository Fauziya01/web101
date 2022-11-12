// Write all the JS Code related to Favourites Page Here 
let fav=JSON.parse(localStorage.getItem("task-favorites"))
displaytable(fav)
console.log(displaytable)

function displaytable(fav){
    for(let i=0;i<fav.length; i++){
        let row =document.createElement("tr");
        let td1=document.createElement("td");
        td1.innerText=fav[i].taskName;
        let td2=document.createElement("td");
        td2.innerText=fav[i].taskType;
        let td3=document.createElement("td");
        td3.innerText=fav[i].taskDate;
        let td4=document.createElement("td");
        td4.innerText=fav[i].select;
    
        row.append(td1,td2,td3,td4);
        document.querySelector("tbody").append(row);
    }
   
    }
