// MORE ボタン
const item = document.querySelectorAll(".index_item")
console.log(item[item.length - 1])
// 表示しないCSSの追加
item[item.length - 1].classList.add("remove")
// 判定の変数
let jeg = 0

const btn = document.querySelector("button");
console.log(btn)
btn.addEventListener("click",function(){
    if(jeg == 0){
        // 表示しないCSSの削除
        item[item.length - 1].classList.remove("remove")
        // 判定の変数を変える
         jeg = 1
         btn.innerText = "CLOSE"
    }else{
        // 表示しないCSSの追加
        item[item.length - 1].classList.add("remove")
        // 判定の変数を変える
         jeg = 0 
         btn.innerText= "MORE"
    }
})


// 販売状態の変化
// stateの取得
const select = document.querySelectorAll(".index_state")
for(let i = 0; i < select.length; i++){
    // 判定のif文
    if(select[i].innerText === "true"){
        // 文の入れ替え
        select[i].innerText="販売中"
    }else{
        // 文の入れ替え
        select[i].innerText="売り切れ"
    }
}


