const item = document.querySelectorAll(".index_item")
console.log(item[item.length - 1])
item[item.length - 1].classList.add("remove")
let jeg = 0

const btn = document.querySelector("button");
console.log(btn)
btn.addEventListener("click",function(){
    if(jeg == 0){
        item[item.length - 1].classList.remove("remove")
         jeg = 1
         btn.innerText = "CLOSE"
    }else{
        item[item.length - 1].classList.add("remove")
         jeg = 0 
         btn.innerText= "MORE"
    }
})