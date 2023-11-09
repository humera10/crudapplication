"use strict";

// // Crud 

// //Global variables



let row = null;

let data = JSON.parse(localStorage.getItem("data")) || [];
    console.log(data);

function test() {
    let dataEntered = retrieveData();
    console.log(dataEntered);

    if(row == null) {
        insert(dataEntered);
        //details.innerHTML="data Inserted!";
    }
    else{
        update(dataEntered);
        //details.innerHTML="data Updated!";
    }

    resetForm();

    

    localStorage.setItem("data",JSON.stringify(dataEntered));

    let readData = readingDataFromLocalStorage(dataEntered);



}


function retrieveData() {
    // let dataEntered = {};
   let date = document.getElementById("date").value;
   let name = document.getElementById("name").value;
   let empid = document.getElementById("empid").value;
   let dept = document.getElementById("dept").value;
   let password = document.getElementById("password").value;

   let Attendance = document.getElementById("Attendance").value;

   Attendance.checked ? Attendance = "P": Attendance = "A";
   //let SelectValue = document.querySelector('input[name="Attendance"]:checked').value;
      // console.log(SelectValue)
   let arr = {date, name,  empid, dept, password, Attendance};
   console.log(arr)

   // let obj={date:date,name:name, empid:empid,dept:dept,password:password,status:SelectValue}

   return arr;
}


//read data
//data in local storage

function readingDataFromLocalStorage(dataEntered) {
    //storingdata in local storage

   let da = localStorage.setItem("Date", dataEntered[0]);
   let n = localStorage.setItem("Name", dataEntered[1]);
   let e = localStorage.setItem("Employee Id", dataEntered[2]);
   let de = localStorage.setItem("Department", dataEntered[3]);
   let p = localStorage.setItem("Password", dataEntered[4]);
   let att = localStorage.setItem("Attendance", dataEntered[5]);

   // getting values from local to table

   let da1 = localStorage.getItem("Date", da);
   let n1 = localStorage.getItem("Name", n);
   let e1 = localStorage.getItem("Employee Id", e);
   let de1 = localStorage.getItem("Department", de);
   let p1 = localStorage.getItem("Password", p);
   let att1 = localStorage.getItem("Attendance", att);

   let arr = {da1, n1, e1, de1, p1, att1};
  // console.log(arr)
   return arr;
    
}


//insert data

function insert(dataEntered){
    console.log({dataEntered})


    let dat = dataEntered?.date;
    let nam = dataEntered?.name;
    let emp = dataEntered?.empid;
    let dep = dataEntered?.dept;
    let pass = dataEntered?.password;
    let ate = dataEntered?.Attendance;

    let tbl = `<table><tr>
    <td>${dat}</td>
    <td>${nam}</td>
    <td>${emp}</td>
    <td>${dep}</td>
    <td>${pass}</td>
    <td>${ate}</td>
    <td><button onclick = 'onEdit(this)'>Edit</button>
    <button 'onclick = onDelete(this)'>Delete</button></td>
    </tr></table>`;

    console.log(tbl);

    document.getElementById("crudTable").innerHTML += tbl;

    return false;


}

//reset form

function resetForm() {
    document.getElementById("date").value = "";
    document.getElementById("name").value = "";
    document.getElementById("empid").value = "";
    document.getElementById("dept").value = "";
    document.getElementById("password").value = "";
    // document.querySelector('input[name="Attendance"]:checked').value = "";
    document.getElementById("Attendance").value = "";
}

// edit

function onEdit(td){
    row = td.parentElement.parentElement;
    document.getElementById("date").value = row.cells[0].innerHTML;
    document.getElementById("name").value = row.cells[1].innerHTML;
    document.getElementById("empid").value = row.cells[2].innerHTML;
    document.getElementById("dept").value = row.cells[3].innerHTML;
    document.getElementById("password").value = row.cells[4].innerHTML;
    // document.querySelector('input[name="Attendance"]:checked').value = row.cells[5].innerHTML;
     document.getElementById("Attendance").value = row.cells[5].innerHTML;
}

//Update

function update(dataEntered){
   row.cells[0].innerHTML = document.getElementById("date").value;
   row.cells[1].innerHTML = document.getElementById("name").value;
   row.cells[2].innerHTML = document.getElementById("empid").value;
   row.cells[3].innerHTML = document.getElementById("dept").value;
   row.cells[4].innerHTML = document.getElementById("password").value;
   // row.cells[4].innerHTML = document.querySelector('input[name="Attendance"]:checked').value;
   row.cells[5].innerHTML = document.getElementById("Attendance").value;
   row = null;
}

// delete

function onDelete(td) {
    if(confirm('Are you sure to Delete this Data?')){
    row = td.parentElement.parentElement;
   document.getElementById("crudTable").deleteRow(row.rowIndex);
   resetForm();
    }
 
    // //document.getElementById("table").remove()
 
    //deleteRow(0)
 }





 