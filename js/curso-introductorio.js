
function windowCharge(){
    const scroll = window.scrollY
        if (scroll > 0){
            window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth" });
        }     

}

windowCharge();

window.onload = function(){
    const conteiner = document.getElementById("conteiner-charge")
    conteiner.style.visibility = "hidden"
    conteiner.style.opacity = "0"

}
 



