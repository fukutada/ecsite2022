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

const select = document.querySelectorAll(".index_state")


for(let i = 0; i < select.length; i++){
    console.log(select[i].innerText)
    if(select[i].innerText === "true"){
        select[i].innerText="販売中"
        console.log(8)
    }else{
        select[i].innerText="売り切れ"
    }
}


