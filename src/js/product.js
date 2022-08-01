const main = document.querySelector(".prod_img_main img")
const sub = document.querySelectorAll(".prod_img_sub img")
main.setAttribute("src", sub[0].getAttribute("src"))
console.log(main)
console.log(sub)
for(let i = 0; i < sub.length; i++){
 sub[i].addEventListener("click",function(){
    console.log(sub[i].getAttribute("src"))
    main.setAttribute("src", sub[i].getAttribute("src"))
 })
}