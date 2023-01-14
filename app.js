import  {userData} from "./data.js";

let thead = "";
if (typeof document !== "undefined") {
  thead = document.querySelector('thead');
}

function updateTable(){

    let data = "";

    if (userData.length>0) {
        for (let i = 0; i < userData.length; i++) {
            
            data += ` <tr class="table-row">
                    <th>${userData[i].firstName}</th>
                    <th>${userData[i].lastName}</th>
                    <th>${userData[i].email}</th>
                    <th>${userData[i].point}</th>
                    <th>${userData[i].phone}</th>
                    <th>${userData[i].company}</th>
                    <th> <button type="button" class="btn btn-secondary"> Edit</button></th>
                    <th> <button type="button" class="btn btn-success">Delete</button> </th>

        </tr>
            `
            
        }

        thead.innerHTML = data ;
        console.log(data);
        
    }
}

updateTable()