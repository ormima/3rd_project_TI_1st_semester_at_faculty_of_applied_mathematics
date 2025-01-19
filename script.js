const refbutton = document.querySelectorAll("button");
const turings_machine = document.getElementById("turings_machine");
const navigation = document.getElementById("navigation");
// const navigation = document.getElementById("navigation");
// const navigation = document.getElementById("navigation");
// const navigation = document.getElementById("navigation");
// const navigation = document.getElementById("navigation");
const sources = document.getElementById("sources");
const ref_navigation = document.getElementById("ref_navigation");

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

window.onfocus = function() {
    document.title = 'Alan Turing';
}
window.onblur = function() {
    document.title = 'WRACAJ!';
}