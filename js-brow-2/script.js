const act = document.getElementById("nvaTarea");

const btn = document.getElementById("agregar");
const table = document.querySelector(".table");
const tbody = document.querySelector("tbody");
const checkbox = document.createElement("input");

function agregar(){
    if(act.value!==" "){
        let row = document.createElement("tr");
    let td = document.createElement("td");
    let td1= document.createElement("td");
    let td2 = document.createElement("td");
    let checkbox = document.createElement("input");
    checkbox.type='checkbox';
    checkbox.className="checkbox";
    

    let activity = act.value;
    let button = document.createElement("button");
    button.className="button";
    button.id="delete";
    button.innerHTML="Delete";
    button.onclick=borrar;
    
    td.appendChild(checkbox);
    td1.innerHTML=activity;
    td2.appendChild(button);
    let tbody = document.querySelector("tbody");
    row.appendChild(td);
    row.appendChild(td1);
    row.appendChild(td2);
    act.value=" ";
    act.focus();
    tbody.appendChild(row);
    }
    else{
        alert("Ingrese una tarea")
        act.focus();
    }
} 

function borrar(onclick){
    let id = onclick.target.parentNode.parentNode;
    tbody.removeChild(id);
}



function borrarChequeados(){
    let list = document.getElementsByClassName("checkbox");
    let rows =document.getElementsByTagName("tr");
    for(let i = 0; i<list.length;i++){

        //let checked = checkbox.checkValidity;
        
        if(list[i].checked==true){
            
            tbody.removeChild(rows[i+1]);
              continue;      
        }
        
        
    }

}

