







//tests

function test(){
    
}


//ribon changing color
var colorset = 0
const linebody = document.querySelector("#lineheaderbody")

linebody.addEventListener('click', () => {
    if ( colorset == 0){
        colorset = colorset + 1;
        document.documentElement.style.setProperty('--primary-color', "rgb(0, 204, 255)");
    }
    else if ( colorset == 1){
        colorset = colorset + 1;
        document.documentElement.style.setProperty('--primary-color', "rgb(0, 255, 76)");
    }
    else if ( colorset == 2){
        colorset = colorset + 1;
        document.documentElement.style.setProperty('--primary-color', "rgb(255, 166, 0)");
    }
    else if (colorset == 3){
        colorset = 0;
        document.documentElement.style.setProperty('--primary-color', "rgb(102, 0, 219)");
    }
    linebody.addEventListener("dblclick", () =>{
        linebody.style.animation= "test 0.25s infinite";
    })

})



//HOVER EFFECTS: 



test();