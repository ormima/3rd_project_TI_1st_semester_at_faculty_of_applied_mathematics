// buttons setup
const refbutton = document.querySelectorAll("button");
const turings_machine = document.getElementById("turings_machine");
const navigation = document.getElementById("navigation");
// const navigation = document.getElementById("navigation");
// const navigation = document.getElementById("navigation");
// const navigation = document.getElementById("navigation");
// const navigation = document.getElementById("navigation");
const sources = document.getElementById("sources");
const ref_navigation = document.getElementById("ref_navigation");

// turings machine box setup
const machine_switch = document.querySelectorAll("main_section_turings_machine_switches_switch")
const machine_box = document.querySelectorAll("main_section_turings_machine_box_article")

// turings machie animation setup
const animated_img = document.getElementById("animated_img")

// buttons teleportation script
ref_turings_machine.addEventListener("click", () => {
    turings_machine.scrollIntoView({behavior: "smooth"});
})
// ref_navigation.addEventListener("click", () => {
//     navigation.scrollIntoView({behavior: "smooth"});
// })
// ref_navigation.addEventListener("click", () => {
//     navigation.scrollIntoView({behavior: "smooth"});
// })
// ref_navigation.addEventListener("click", () => {
//     navigation.scrollIntoView({behavior: "smooth"});
// })
// ref_navigation.addEventListener("click", () => {
//     navigation.scrollIntoView({behavior: "smooth"});
// })
ref_sources.addEventListener("click", () => {
    sources.scrollIntoView({behavior: "smooth"});
})
ref_navigation.addEventListener("click", () => {
    navigation.scrollIntoView({behavior: "smooth"});
})

// site title change when inactive
window.onfocus = function() {
    document.title = 'Alan Turing';
}
window.onblur = function() {
    document.title = 'WRACAJ!';
}

// turings machine box swap info
machine_menu_description.addEventListener("click", () => {
    description.style.display = "flex";
    visualisation.style.display = "none";
})
machine_menu_visualisation.addEventListener("click", () => {
    description.style.display = "none";
    visualisation.style.display = "flex";
})

// turings machine box visualisation animation
setInterval(animation, 500);

let i = 1;
let a = 1;

function animation(){
    if(i > 14){
        i = 7;
        a = i;
    } else{
        a = i;
    }
    animated_img.src = "./animation/" + a + "_part.png";
    console.log(a + ":a, i: " + i);
    i++;
}