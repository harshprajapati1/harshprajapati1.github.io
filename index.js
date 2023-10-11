let num = document.getElementById("count-el")
let counter = 0
function increment(){
    if(counter == 10){
        document.getElementById("count-el").innerText = "Successs";
        return;
    }
    counter += 1;
    num.innerText = counter;
}