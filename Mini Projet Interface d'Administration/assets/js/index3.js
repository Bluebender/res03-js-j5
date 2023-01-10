//Supprimer un utilisateur

window.addEventListener("DOMContentLoaded", function(){

    let buttons_supprimer = document.getElementsByClassName("delete-user");
    let section1 = document.getElementById("section1");
    let section2 = document.getElementById("section2");
    
    for (button_supprimer of buttons_supprimer){
        button_supprimer.addEventListener("click", function(){
            console.log("hello")
            console.log(section1)
            section1.classList.toggle("hidden");
            section2.classList.toggle("hidden");
        });
    }        

});




