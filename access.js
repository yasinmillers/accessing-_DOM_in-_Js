const demo_id = document.getElementById("demo");

demo_id.style.border = "2px solid purple"
demo_id.style.backgroundColor = "red"
demo_id.style.border = "5px solid green"
demo_id.style.borderRadius = "2px"
demo_id.style.padding = "24px"

const demo_class = document.getElementsByClassName("demo");
// demo_class.style.padding = "23px"
// console.log(demo_class);
// demo_class[0].style.padding = "24px"
// demo_class[0].style.backgroundColor = "yellow"

for (i = 0; i < demo_class.length; i++) {
    demo_class[i].style.backgroundColor = "purple"
    demo_class[i].style.padding = "20px";


}
const demo_tag = document.getElementsByTagName("article");
for (r = 0; r < demo_tag.length; r++) {
    demo_tag[r].style.lightingColor = "red"
    demo_tag[r].style.backgroundColor = "blue"
}
const demo_queryAll = document.querySelectorAll(".demo-query-all");
for (f = 0; f < demo_queryAll.length; f++) {
    demo_queryAll[f].style.backgroundColor = "grey"
    demo_queryAll[f].style.padding = "24px"
}
const demo_query = document.querySelector("#demo-query");
demo_query.style.padding = "24px"
demo_query.style.backgroundColor = "lightgreen"