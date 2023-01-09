let users = [  
    {  
        id: 0,  
        isActive: false,  
        age: 24,    
        name: "Marsh Obrien" 
    },  
    {  
        id: 1,  
        isActive: false,  
        age: 21,    
        name: "Rios Gibson" 
    },  
    {  
        id: 2,  
        isActive: false,  
        age: 29,  
        name: "Morgan Buchanan"
    },  
    {  
        id: 3,  
        isActive: true,  
        age: 25,    
        name: "Franklin Dyer" 
    },  
    {  
        id: 4,  
        isActive: false,  
        age: 30, 
        name: "Keller Pitts" 
    },  
    {  
        id: 5,  
        isActive: false,  
        age: 25,  
        name: "Davenport Maddox"  
    },  
    {  
        id: 6,  
        isActive: true,  
        age: 31,  
        name: "Judith Graves"
    },  
    {  
        id: 7,  
        isActive: true,  
        age: 26,  
        name: "Hoffman Hess" 
    },  
    {  
        id: 8,  
        isActive: true,  
        age: 22,  
        name: "Sheena Goff"
    },  
    {  
        id: 9,  
        isActive: false,  
        age: 39,  
        name: "Rose Lawrence" 
    }  
];

let tbody = document.getElementById("tbody");


window.addEventListener("DOMContentLoaded", function(){

// Affichage des utilisateurs

for (user of users){
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");

    let id = document.createTextNode(user.id);
    let name = document.createTextNode(user.name);
    let age = document.createTextNode(user.age);
    // let action = document.createTextNode()


    let span1 = document.createElement("span");
    span1.classList.add("bi-person-fill-up");
    // console.log(span1);
    
    let span2 = document.createElement("span");
    span2.classList.add("bi-person-fill-down");
    // console.log(span2);

    if (user.isActive === true){
        td4.appendChild(span1)
        console.log(td4)
    }
    else if(user.isActive === false){
        td4.appendChild(span2)
    }

    td1.appendChild(id);
    td2.appendChild(name);
    td3.appendChild(age);
    // td4.appendChild(isActive);
    // td5.appendChild(action);
    
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    // tr.appendChild(td5);

    tbody.appendChild(tr);


}

});




