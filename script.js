// buttons setup
const refbutton = document.querySelectorAll("button");
const turings_machine = document.getElementById("turings_machine");
const navigation = document.getElementById("navigation");
const sources = document.getElementById("sources");
const ref_navigation = document.querySelectorAll("ref_navigation");

// turings machine box setup
const machine_switch = document.querySelectorAll("main_section_turings_machine_switches_switch")
const machine_box = document.querySelectorAll("main_section_turings_machine_box_article")

// turings machie animation setup
const animated_img = document.getElementById("animated_img")

// footer algoritm setup
const fibbonaci = document.getElementById("fibbonaci")
const res_fibbonaci = document.getElementById("res_fibbonaci")

// footer sources setup
const footer_top = document.getElementById("footer_top")
const footer_sources = document.getElementById("footer_sources")
const footer_links = document.getElementById("footer_links")
const footer_text = document.getElementById("footer_text")

// buttons teleportation script
ref_alan_turing.addEventListener("click", () => {
    alan_turing.scrollIntoView({behavior: "smooth"});
})
ref_enigma.addEventListener("click", () => {
    enigma.scrollIntoView({behavior: "smooth"});
})
ref_turings_machine.addEventListener("click", () => {
    turings_machine.scrollIntoView({behavior: "smooth"});
})
ref_sources.addEventListener("click", () => {
    sources.scrollIntoView({behavior: "smooth"});
})
ref_navigation_alan.addEventListener("click", () => {
    // console.log('navigation_alan');
    navigation.scrollIntoView({behavior: "smooth"});
})
ref_navigation_machine.addEventListener("click", () => {
    // console.log('navigation_alan');
    navigation.scrollIntoView({behavior: "smooth"});
})
ref_navigation_enigma.addEventListener("click", () => {
    navigation.scrollIntoView({behavior: "smooth"});
})
ref_navigation_sources.addEventListener("click", () => {
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
    animated_img.src = "./sources/animation/" + a + "_part.png";
    // console.log(a + ":a, i: " + i);
    i++;
}

// footer algoritm
fibbonaci.addEventListener("change", () => {
    let f = fibbonaci.value * 1;
    if(typeof(f) != "number" || f <= 0 || Number.isInteger(f) != true || f <= 0 && Number.isInteger(f) != true){
        res_fibbonaci.innerHTML = "podaj liczbę naturalną";
        // console.log(f + ", " + typeof(f));
        // if(typeof(f) != "number"){
        //     console.log("deeper error");
        // }
    } else if(f == 1 || f == 2){
        res_fibbonaci.innerHTML = "Wartość wyrazu a<sub>" + f + "</sub> to: " + 1 + ".";
    } else{
        let x = 1;
        let y = 1;
        let temporary = 0;
        for(i = 3; i <= f; i++){
            temporary = y;
            y = x + y;
            x = temporary;
        }
        res_fibbonaci.innerHTML = "Wartość wyrazu a<sub>" + f + "</sub> to: " + y + ".";
    }
})

// footer sources
footer_sources.addEventListener("mouseover", () => {
    footer_top.style.display = "none";
    footer_text.style.display = "none";
    footer_links.style.display = "flex";
})
footer_sources.addEventListener("mouseleave", () => {
    footer_top.style.display = "flex";
    footer_text.style.display = "flex";
    footer_links.style.display = "none";
})