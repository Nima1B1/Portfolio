
//page declarations

const aboutmepage = document.querySelector('#pageaboutme');
const experiencepage = document.querySelector('#pageexperience');
const educationpage = document.querySelector('#pageeducation');
const skillspage = document.querySelector('#pageskills');
const qualificationspage = document.querySelector('#pagequalifications');
 
//header declarations

const aboutmetitle = document.querySelector(".aboutmetitle");
const experiencetitle = document.querySelector(".experiencetitle");
const educationtitle = document.querySelector(".educationtitle");
const skillstitle = document.querySelector(".skillstitle");
const qualificationstitle = document.querySelector(".qualificationstitle");


//bott (bottom) declarations

const bottaboutme = document.querySelector("#bottaboutme");
const bottexperience = document.querySelector("#bottexperience");
const botteducation = document.querySelector("#botteducation");
const bottskills = document.querySelector("#bottskills");
const bottqualifications = document.querySelector("#bottqualifications");


//cover decalarations

const aboutmecover = document.querySelector('.aboutmecover');


//presets

aboutmetitle.style.border = "0px";
experiencetitle.style.border = "0px";
educationtitle.style.border = "0px";
skillstitle.style.border = "0px";
qualificationstitle.style.border = "0px";

bottaboutme.style.fontSize = "0px";
bottexperience.style.fontSize = "0px";
botteducation.style.fontSize = "0px";
bottskills.style.fontSize = "0px";
bottqualifications.style.fontSize = "0px";


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

//aboutme
aboutmepage.addEventListener('mouseenter', () => {
    aboutmecover.style.borderRadius = "1px";
    bottaboutme.style.fontSize = "16px";
    aboutmetitle.style.border= "var(--dark-background-color) solid 1px";
})
aboutmepage.addEventListener('mouseleave', () =>{
    aboutmecover.style.borderRadius = "";
    bottaboutme.style.fontSize = "0px";
    aboutmetitle.style.border="0px";
})

//experience
experiencepage.addEventListener('mouseenter', () => {
    bottexperience.style.fontSize = "16px";
    experiencetitle.style.border= "var(--dark-background-color) solid 1px";
})
experiencepage.addEventListener('mouseleave', () =>{
    bottexperience.style.fontSize = "0px";
    experiencetitle.style.border="0px";
})

//education
educationpage.addEventListener('mouseenter', () => {
    botteducation.style.fontSize = "16px";
    educationtitle.style.border= "var(--dark-background-color) solid 1px";
})
educationpage.addEventListener('mouseleave', () =>{
    botteducation.style.fontSize = "0px";
    educationtitle.style.border="0px";
})

//skills
skillspage.addEventListener('mouseenter', () => {
    bottskills.style.fontSize = "16px";
    skillstitle.style.border= "var(--dark-background-color) solid 1px";
})
skillspage.addEventListener('mouseleave', () =>{
    bottskills.style.fontSize = "0px";
    skillstitle.style.border="0px";
})

//qualifications
qualificationspage.addEventListener('mouseenter', () => {
    bottqualifications.style.fontSize = "16px";
    qualificationstitle.style.border= "var(--dark-background-color) solid 1px";
})
qualificationspage.addEventListener('mouseleave', () =>{
    bottqualifications.style.fontSize = "0px";
    qualificationstitle.style.border="0px";
})

test();