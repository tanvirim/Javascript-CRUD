import  {userData} from "./data.js";

let tbody = "";
if (typeof document !== "undefined") {
  tbody = document.querySelector('tbody');
}

//update table

function updateTable(){

    let data = "";
    let id = null ;

    if (userData.length>0) {
        for (let i = 0; i < userData.length; i++) {
            
            data += ` <tr id="${i}">
                    <td>${userData[i].firstName}</td>
                    <td>${userData[i].lastName}</td>
                    <td>${userData[i].email}</td>
                    <td>${userData[i].point}</td>
                    <td>${userData[i].phone}</td>
                    <td>${userData[i].company}</td>
                    <td> <button  type="button" class="btn btn-primary" onclick="editTable()"> Edit</button></td>
                    <td> <button type="button" class="btn btn-danger">Delete</button> </td>
        </tr>
            `  
        }

        tbody.innerHTML = data ;
    }

   
}

updateTable()

function editTable(event){
    return console.log('event');
}

editTable()
