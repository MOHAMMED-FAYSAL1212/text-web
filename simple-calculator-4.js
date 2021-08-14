// Neumorphic desing or soft UI
// Skeuomorphism design.

var screen = document.getElementById("scr")



function percentage(){
    num = screen.value
    per = eval(num/100);
    screen.value = per
}


function negate(){
    num = screen.value
    neg = -parseFloat(num)
    screen.value = neg
}


function equal(){
    try{
        screen.value = eval(screen.value)
    } catch{
        screen.value = 'Error!'
    }
}

