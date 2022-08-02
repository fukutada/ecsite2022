
// 画像の切り替え
// 大きい画像の取得
const main = document.querySelector(".prod_img_main img")
//小さい画像の取得
const sub = document.querySelectorAll(".prod_img_sub img")
main.setAttribute("src", sub[0].getAttribute("src"))
// クリックした画像のsrcを大きな画像に代入する
for(let i = 0; i < sub.length; i++){
 sub[i].addEventListener("click",function(){
    console.log(sub[i].getAttribute("src"))
    main.setAttribute("src", sub[i].getAttribute("src"))
 })
}

// ボタンの売り切れの判定
const pselect = document.querySelector(".prod_state")
console.log(pselect)

    // 判定のif文
    if(pselect.innerText === "true"){
        // 文の入れ替え
        pselect.innerText="購入する"
    }else{
        // 文の入れ替え
        pselect.innerText="売り切れ"
    }
