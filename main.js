let range = document.querySelector("input.range-input")
let number = document.querySelector("input.number-input")
let divG = document.querySelector(".diagram-green")
let divR = document.querySelector(".diagram-red")

function changeRange(event){
    let numberInRange = event.value

    if( event.className == "range-input"){
        number.value = numberInRange
    }else{
        range.value = numberInRange
    }
    
    divG.style.height = numberInRange + "px";
    if(numberInRange < 20){
        divR.style.height = 2 + "px";
    } 
    else if(20 < numberInRange < 50){
        divR.style.height = 4 + "px";
    }
    else if(50 < numberInRange < 75){
        divR.style.height = 6 + "px";
    }
    else if(75 < numberInRange < 100){
        divR.style.height = 8 + "px";
    }
}


