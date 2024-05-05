let dat = document.querySelector("#gundet");
let ch = document.querySelectorAll("#clickhere");
let crs = document.querySelector(".material-symbols-outlined");
let bg = document.querySelector("#pg-1_3");
let nav = document.querySelector("nav");
let val = document.querySelector("#display");
let gdt = document.querySelector("#gun-name");
var imgsrc = document.getElementById("gunimg");
let tbdat = document.querySelector("figure");
let bcur = document.querySelector("#ballcur");
let bcurbg = document.querySelector("body");


bcurbg.addEventListener("mousemove",function(dets){
    bcur.style.left = dets.pageX + "px";
    bcur.style.top = dets.pageY + "px";
    bcur.style.display = "block";
    bcurbg.style.cursor = "none"
    
})



ch.forEach(e =>{
    e.addEventListener("click",function(){
        var a = val.value;
        if(a == 1){
            imgsrc.src = "ASSETS\\Classic.webp";
            gdt.innerHTML = "Classic"
            imgsrc.style.width = "500px";

        }
        if(a == 2){
            imgsrc.src = "ASSETS\\Shorty.webp";
            gdt.innerHTML = "Shorty"
            imgsrc.style.width = "700px";
            tbdat.innerHTML = "<table><tbody><tr><td><strong>Distance from Target</strong></td><td><strong>Body Part Hit</strong></td><td><strong>Shells to Kill with no Shield (100 HP)</strong></td><td><strong>Shells to Kill with Light Shield (125 HP)</strong></td><td><strong>Shells to Kill with full Shield (150 HP)</strong></td></tr><tr><td rowspan=3><br><br>0 &#8211; 7 meters</td><td>Head</td><td>1</td><td>1</td><td>1</td></tr><tr><td>Body</td><td>1</td><td>1</td><td>1</td></tr><tr><td>Leg</td><td>1</td><td>1</td><td>1</td></tr><tr><td rowspan=3><br><br>7 &#8211; 15 meters</td><td>Head</td><td>1</td><td>2</td><td>2</td></tr><tr><td>Body</td><td>2</td><td>2</td><td>2</td></tr><tr><td>Leg</td><td>2</td><td>2</td><td>2</td></tr><tr><td rowspan=3><br><br>15 &#8211; 50 meters</td><td>Head</td><td>2</td><td>2</td><td>2</td></tr><tr><td>Body</td><td>3</td><td>3</td><td>4</td></tr><tr><td>Leg</td><td>4</td><td>5</td><td>5</td></tr></tbody></table>";
        }
        work(10);
        dat.style.display = "block";
        bg.style.opacity = "0.1";
        nav.style.opacity = "0.1";
        
        crs.addEventListener("click",function(){ 
            dat.style.opacity = "0.2";
            setTimeout(function(){
                dat.style.display = "none";
                bg.style.opacity = "1";
                nav.style.opacity = "1";
                dat.style.height = "40%";
                dat.style.width = "40%";
                dat.style.top = "20%";
                dat.style.left = "20%";
                dat.style.opacity = "1";
            },100)            
        })    
    })
})
function work(b){
    setTimeout(function(){
        dat.style.width = "75%";
        dat.style.height = "75%";
        dat.style.top = "12%";
        dat.style.left = "11%";
        
    },b)
}