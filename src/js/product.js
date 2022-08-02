
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