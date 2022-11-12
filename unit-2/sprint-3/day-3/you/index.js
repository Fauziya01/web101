// fill in javascript code here
document.querySelector("form").addEventListener("submit",hospital);
// displaytable(hospObj)
let hospArr=[];
function hospital(event){
    event.preventDefault();
    let docName=document.querySelector("#name").value;
    let docId=document.querySelector("#docID").value;
    let docDept=document.querySelector("#dept").value;
    let expe=document.querySelector("#exp").value;
    let email=document.querySelector("#email").value;
    let mobile=document.querySelector("#mbl").value;
    let hospObj={
        docName,
        docId,
        docDept,
        expe,
        email,
        mobile,
    };
    hospArr.push(hospObj)
    
    displaytable(hospArr);
console.log( displaytable)
}

function displaytable(hospArr){
    for(let i=0;i<hospArr.length;i++){
        let row=document.createElement("tr");
    let td1=document.createElement("td");
    td1.innerText=hospArr[i].docName;
    let td2=document.createElement("td");
    td2.innerText=hospArr[i].docId;
    let td3=document.createElement("td");
    td3.innerText=hospArr[i].docDept;
    let td4=document.createElement("td");
    td4.innerText=hospArr[i].expe;
    let td5=document.createElement("td");
    td5.innerText=hospArr[i].email;
    let td6=document.createElement("td");
    td6.innerText=hospArr[i].mobile;
    let td7=document.createElement("td")
    if(hospArr[i].expe>5){
        td7.innerText="Senior";
    }
    else if (hospArr[i].expe>2&&hospObj.expe<5){
        td7.innerText="Junior";
    }
    else if (hospArr[i].expe<=1){
        td7.innerText="Trainee";
    }
    let td8= document.createElement("td")
    td8.innerText="Delete"
    td8.addEventListener("click",function(){
        this.remove((hospArr[i]));
    })
    row.append(td1,td2,td3,td4,td5,td6,td7,td8);
    document.querySelector("tbody").append(row);
    }
    

}

// let row=document.createElement("tr");
//     let td1=document.createElement("td");
//     td1.innerText=hospObj.docName;
//     let td2=document.createElement("td");
//     td2.innerText=hospObj.docId;
//     let td3=document.createElement("td");
//     td3.innerText=hospObj.docDept;
//     let td4=document.createElement("td");
//     td4.innerText=hospObj.expe;
//     let td5=document.createElement("td");
//     td5.innerText=hospObj.email;
//     let td6=document.createElement("td");
//     td6.innerText=hospObj.mobile;
//     let td7=document.createElement("td")
//     if(hospObj.expe>5){
//         td7.innerText="Senior";
//     }
//     else if (hospObj.expe>2&&hospObj.expe<5){
//         td7.innerText="Junior";
//     }
//     else if (hospObj.expe<=1){
//         td7.innerText="Trainee";
//     }
//     let td8= document.createElement("td")
//     td8.innerText="Delete"
//     td8.addEventListener("click",function(){
//     this.remove();
//     })
//     row.append(td1,td2,td3,td4,td5,td6,td7,td8);
//     document.querySelector("tbody").append(row);
