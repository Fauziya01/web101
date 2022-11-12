// fill in javascript code here
document.querySelector("form").addEventListener("submit",hospital);
function hospital(event){
    event.preventDefault();
    let emName=document.querySelector("#name").value;
    let emId=document.querySelector("#employeeID").value;
    let emDept=document.querySelector("#department").value;
    let expe=document.querySelector("#exp").value;
    let email=document.querySelector("#email").value;
    let mobile=document.querySelector("#mbl").value;
    let masaiObj={
        emName,
        emId,
        emDept,
        expe,
        email,
        mobile,
    };
    console.log(masaiObj)
    displaytable(masaiObj);

}

function displaytable(masaiObj){
    let row=document.createElement("tr");
    let td1=document.createElement("td");
    td1.innerText=masaiObj.emName;
    let td2=document.createElement("td");
    td2.innerText=masaiObj.emId;
    let td3=document.createElement("td");
    td3.innerText=masaiObj.emDept;
    let td4=document.createElement("td");
    td4.innerText=masaiObj.expe;
    let td5=document.createElement("td");
    td5.innerText=masaiObj.email;
    let td6=document.createElement("td");
    td6.innerText=masaiObj.mobile;
    let td7=document.createElement("td")
    if(masaiObj.expe>5){
        td7.innerText="Senior";
    }
    else if (masaiObj.expe>2&&masaiObj.expe<5){
        td7.innerText="Junior"
    }
    else if (masaiObj.expe<=1){
        td7.innerText="Trainee"
    }
    // let td8= document.createElement("td")
    
    row.append(td1,td2,td3,td4,td5,td6,td7);
    document.querySelector("tbody").append(row);

}