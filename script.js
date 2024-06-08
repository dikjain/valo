let dat = document.querySelector("#gundet");
let datl = document.querySelector("#datlist");
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
let chtd = document.querySelector("#chtd");
let gunch = document.querySelectorAll(".guns");
let sld = document.querySelectorAll(".gnslid");
let socin = document.querySelectorAll("#socin");
let social = document.querySelectorAll(".social");
let tplist = document.querySelectorAll("#gtlist");
let frwd = document.querySelectorAll("#fimg");
let bckd = document.querySelectorAll("#fbck");
let imggs = document.querySelector("#jettfr");

setTimeout(function(){
    imggs.style.left = "-750px";
},4500)
setTimeout(function(){
    imggs.style.left = "-750px";
},9500)
setTimeout(function(){
    imggs.style.left = "-750px";
},14000)
setTimeout(function(){
    imggs.style.left = "-750px";
},19500)
setTimeout(function(){
    imggs.src = "ASSETS\\PHNX.png"
    imggs.style.left = "100px";
},5000)
setTimeout(function(){
    imggs.src = "ASSETS\\VP.png"
    imggs.style.left = "100px";
},10000)
setTimeout(function(){
    imggs.src = "ASSETS\\cypher.png"
    imggs.style.left = "100px";
},15000)
setTimeout(function(){
    imggs.src = "ASSETS\\jett.png"
    imggs.style.left = "0px";
},20000)

bcurbg.addEventListener("mousemove",function(dets){
    bcur.style.left = dets.pageX + "px";
    bcur.style.top = dets.pageY + "px";
    bcur.style.display = "block";
    bcurbg.style.cursor = "none"
})

var m = 1
frwd[0].addEventListener("click",function(){
    if(m<=5){
        sld[0].childNodes[m].style.width = "10px";
        setTimeout(function(){
            sld[0].childNodes[m].style.display = "none";
            m += 2;
            if(m==3){
                sld[0].style.maxWidth = "120.05%";
            }
            if(m==5){
                sld[0].style.maxWidth = "100%";
            }
        },200)

    }
})
bckd[0].addEventListener("click",function(){
    if(m>=1){
        if(m==3){
            sld[0].style.maxWidth = "150.05%";
        }
        if(m==5){
            sld[0].style.maxWidth = "120.05%";
        }
        sld[0].childNodes[m-2].style.display = "flex";
        setTimeout(function(){
            sld[0].childNodes[m-2].style.width = "30vw";
            m -= 2;
        },10);
    }
})
frwd[1].addEventListener("click",function(){
    if(m<=1){
        sld[3].childNodes[m].style.width = "10px";
        setTimeout(function(){
            sld[3].childNodes[m].style.display = "none";
            m += 2;
            if(m==1){
                sld[3].style.maxWidth = "100%";
            }
        },200)
    }
})
bckd[1].addEventListener("click",function(){
        if(m==1){
            sld[3].style.maxWidth = "120.05%";
        }
        sld[3].childNodes[m-2].style.display = "flex";
        setTimeout(function(){
            sld[3].childNodes[m-2].style.width = "30vw";
            m -= 2;
        },10);

    })


setTimeout(function(){
    chtd.style.display = "none";

},3000)


tplist.forEach(lit=>{
    lit.addEventListener("click",function(){
        switch(lit.value){
            case 1:
                bhaalu(0);
                break
            case 2:
                bhaalu(1);
                break
                case 3:
                    bhaalu(2);
                    break
                    case 4:
                        bhaalu(3);
                break
                case 5:
                    bhaalu(4);
                break
                case 6:
                    bhaalu(5);
                    break
                    case 7:
                        bhaalu(6);
                        break
                    }
                })
    })
            
    function bhaalu(io) {
    let n = 1;
    let b = 1;
    var io;
    function strt(){
        if (n <= (sld[io].childElementCount * 2)) {
            sld[io].childNodes[n].style.opacity = "1";
            sld[io].childNodes[n].style.height = "110%";
            sld[io].childNodes[n].style.boxShadow = "0px 0px 30px red";
            sld[io].childNodes[n].childNodes[0].setAttribute("style","-webkit-filter: drop-shadow(3px 3px 8px red)");
            sld[io].childNodes[n].childNodes[2].style.top = "190px";
            n += 2;
            
        }
    }
    setInterval(strt, 500)
    setInterval(function () {
        setTimeout(function () {
            if (b <= sld[io].childElementCount * 2) {
                sld[io].childNodes[b].childNodes[0].setAttribute("style","-webkit-filter: drop-shadow(3px 3px 8px white);");
                sld[io].childNodes[b].style.boxShadow = "none";
                sld[io].childNodes[b].style.opacity = "0.4";
                sld[io].childNodes[b].style.height = "100%";
                b += 2;
            }
        }, 500)
    }, 500);

}



gunch.forEach(itm =>{
    itm.addEventListener("mousemove",function(){
        itm.style.opacity = "1"
        itm.style.height = "100%";
        itm.style.boxShadow = "0px 0px 30px red";
        itm.childNodes[0].setAttribute("style","-webkit-filter: drop-shadow(3px 3px 8px red)");

    })
    itm.addEventListener("mouseleave",function(){
        itm.style.opacity = "0.4";
        itm.childNodes[0].setAttribute("style","-webkit-filter: drop-shadow(3px 3px 8px white);");
        itm.style.boxShadow = "none";
        itm.style.opacity = "0.4";
        itm.style.height = "97%";
        
})
})

gunch.forEach(k =>{
    k.addEventListener("mouseenter",function(){
        k.childNodes[2].style.top = "90px";
        
        
    })
    k.addEventListener("mouseleave",function(){
        k.childNodes[2].style.top = "170px";
    })
})





ch.forEach(e =>{
    e.addEventListener("click",function(){
        setTimeout(function(){
            dat.childNodes[1].style.opacity="1";
            dat.childNodes[3].style.opacity="1";
            dat.childNodes[5].style.opacity="1";
        },100);
        var a = val.value;
        if(a == 1){
            imgsrc.src = "ASSETS\\Classic.webp";
            gdt.innerHTML = "Classic"
            imgsrc.style.width = "500px";
            datl.innerHTML = "<li>0 &#8211; 30 meters &#8211; Head (78)</li><li>0 &#8211; 30 meters &#8211; Body (26)</li><li>0 &#8211; 30 meters &#8211; Legs (22)</li><li>30 &#8211; 50 meters &#8211; Head (66</li><li>30 &#8211; 50 meters &#8211; Body (22)</li><li>30 &#8211; 50 meters &#8211; Legs (18)</li>"
            tbdat.innerHTML = "<table><tbody><tr><td><strong>Distance from Target</strong></td><td><strong>Body Part Hit</strong></td><td><strong>Shots to Kill with no Shield (100 HP)</strong></td><td><strong>Shots to Kill with Light Shield (125 HP)</strong></td><td><strong>Shots to Kill with full Shield (150 HP)</strong></td></tr><tr><td rowspan=3><br><br>0 &#8211; 30 meters</td><td>Head</td><td>2</td><td>2</td><td>2</td></tr><tr><td>Body</td><td>4</td><td>5</td><td>6</td></tr><tr><td>Leg</td><td>5</td><td>6</td><td>7</td></tr><tr><td rowspan=3><br><br>30 &#8211; 50 meters</td><td>Head</td><td>2</td><td>2</td><td>3</td></tr><tr><td>Body</td><td>5</td><td>6</td><td>7</td></tr><tr><td>Leg</td><td>6</td><td>7</td><td>9</td></tr></tbody></table></figure>";
        }
        if(a == 2){
            imgsrc.src = "ASSETS\\Shorty.webp";
            gdt.innerHTML = "Shorty"
            imgsrc.style.width = "700px";
            tbdat.innerHTML = "<table><tbody><tr><td><strong>Distance from Target</strong></td><td><strong>Body Part Hit</strong></td><td><strong>Shells to Kill with no Shield (100 HP)</strong></td><td><strong>Shells to Kill with Light Shield (125 HP)</strong></td><td><strong>Shells to Kill with full Shield (150 HP)</strong></td></tr><tr><td rowspan=3><br><br>0 &#8211; 7 meters</td><td>Head</td><td>1</td><td>1</td><td>1</td></tr><tr><td>Body</td><td>1</td><td>1</td><td>1</td></tr><tr><td>Leg</td><td>1</td><td>1</td><td>1</td></tr><tr><td rowspan=3><br><br>7 &#8211; 15 meters</td><td>Head</td><td>1</td><td>2</td><td>2</td></tr><tr><td>Body</td><td>2</td><td>2</td><td>2</td></tr><tr><td>Leg</td><td>2</td><td>2</td><td>2</td></tr><tr><td rowspan=3><br><br>15 &#8211; 50 meters</td><td>Head</td><td>2</td><td>2</td><td>2</td></tr><tr><td>Body</td><td>3</td><td>3</td><td>4</td></tr><tr><td>Leg</td><td>4</td><td>5</td><td>5</td></tr></tbody></table>";
            datl.innerHTML = "<li>0 &#8211; 30 meters &#8211; Head (105)</li><li>0 &#8211; 30 meters &#8211; Body (30)</li><li>0 &#8211; 30 meters &#8211; Legs (25)</li><li>30 &#8211; 50 meters &#8211; Head (87)</li><li>30 &#8211; 50 meters &#8211; Body (25)</li><li>30 &#8211; 50 meters &#8211; Legs (21)</li>"
        }
        if(a == 3){
            imgsrc.src = "ASSETS\\Frenzy.webp";
            gdt.innerHTML = "Frenzy"
            imgsrc.style.width = "500px";
            tbdat.innerHTML = "<table><tbody><tr><td><strong>Distance from Target</strong></td><td><strong>Body Part Hit</strong></td><td><strong>Bullets to Kill with no Shield (100 HP)</strong></td><td><strong>Bullets to Kill with Light Shield (125 HP)</strong></td><td><strong>Bullets to Kill with full Shield (150 HP)</strong></td></tr><tr><td rowspan=3><br><br>0 &#8211; 20 meters</td><td>Head</td><td>2</td><td>2</td><td>2</td></tr><tr><td>Body</td><td>4</td><td>5</td><td>6</td></tr><tr><td>Leg</td><td>5</td><td>6</td><td>7</td></tr><tr><td rowspan=3><br><br>20 &#8211; 50 meters</td><td>Head</td><td>2</td><td>2</td><td>3</td></tr><tr><td>Body</td><td>5</td><td>6</td><td>8</td></tr><tr><td>Leg</td><td>6</td><td>8</td><td>9</td></tr></tbody></table></figure>";
        }
        if(a == 4){
            imgsrc.src = "ASSETS\\Ghost.webp";
            gdt.innerHTML = "Ghost"
            imgsrc.style.width = "700px";
            datl.innerHTML = "<li>0 &#8211; 30 meters &#8211; Head (105)</li><li>0 &#8211; 30 meters &#8211; Body (30)</li><li>0 &#8211; 30 meters &#8211; Legs (25)</li><li>30 &#8211; 50 meters &#8211; Head (87)</li><li>30 &#8211; 50 meters &#8211; Body (25)</li><li>30 &#8211; 50 meters &#8211; Legs (21)</li>"
            tbdat.innerHTML = "<table><tbody><tr><td><strong>Distance from Target</strong></td><td><strong>Body Part Hit</strong></td><td><strong>Bullets to Kill with no Shield (100 HP)</strong></td><td><strong>Bullets to Kill with Light Shield (125 HP)</strong></td><td><strong>Bullets to Kill with full Shield (150 HP)</strong></td></tr><tr><td rowspan=3><br><br>0 &#8211; 30 meters</td><td>Head</td><td>1</td><td>2</td><td>2</td></tr><tr><td>Body</td><td>4</td><td>5</td><td>5</td></tr><tr><td>Leg</td><td>4</td><td>5</td><td>6&nbsp;</td></tr><tr><td rowspan=3><br><br>30 &#8211; 50 meters</td><td>Head</td><td>2</td><td>2</td><td>2</td></tr><tr><td>Body</td><td>4</td><td>5</td><td>6</td></tr><tr><td>Leg</td><td>5</td><td>6</td><td>8</td></tr></tbody></table>";
        }
        if(a == 5){
            imgsrc.src = "ASSETS\\Sheriff.webp";
            gdt.innerHTML = "Sheriff"
            imgsrc.style.width = "700px";
            tbdat.innerHTML = "<table><tbody><tr><td><strong>Distance from Target</strong></td><td><strong>Body Part Hit</strong></td><td><strong>Bullets to Kill with no Shield (100 HP)</strong></td><td><strong>Bullets to Kill with Light Shield (125 HP)</strong></td><td><strong>Bullets to Kill with full Shield (150 HP)</strong></td></tr><tr><td rowspan=3><br><br>0 &#8211; 30 meters</td><td>Head</td><td>1</td><td>1</td><td>1</td></tr><tr><td>Body</td><td>2</td><td>3</td><td>3</td></tr><tr><td>Leg</td><td>3</td><td>3</td><td>4</td></tr><tr><td rowspan=3><br><br>30 &#8211; 50 meters</td><td>Head</td><td>1</td><td>1</td><td>2</td></tr><tr><td>Body</td><td>2</td><td>3</td><td>3</td></tr><tr><td>Leg</td><td>3</td><td>3</td><td>4</td></tr></tbody></table>";
        }
        if(a == 6){
            imgsrc.src = "ASSETS\\Stinger.webp";
            gdt.innerHTML = "Stinger"
            imgsrc.style.width = "800px";
            tbdat.innerHTML = "<table><tbody><tr><td><strong>Distance from Target</strong></td><td><strong>Body Part Hit</strong></td><td><strong>Bullets to Kill with no Shield (100 HP)</strong></td><td><strong>Bullets to Kill with Light Shield (125 HP)</strong></td><td><strong>Bullets to Kill with full Shield (150 HP)</strong></td></tr><tr><td rowspan=3><br><br>0 &#8211; 15 meters</td><td>Head</td><td>2</td><td>2</td><td>3</td></tr><tr><td>Body</td><td>4</td><td>5</td><td>6</td></tr><tr><td>Leg</td><td>5</td><td>6</td><td>7</td></tr><tr><td rowspan=3><br><br>15 &#8211; 50 meters</td><td>Head</td><td>2</td><td>3</td><td>3</td></tr><tr><td>Body</td><td>5</td><td>6</td><td>7</td></tr><tr><td>Leg</td><td>6</td><td>7</td><td>8</td></tr></tbody></table>";
        }
        if(a == 7){
            imgsrc.src = "ASSETS\\Spectre.webp";
            gdt.innerHTML = "Spectre"
            imgsrc.style.width = "770px";
            tbdat.innerHTML = "<table><tbody><tr><td><strong>Distance from Target</strong></td><td><strong>Body Part Hit</strong></td><td><strong>Bullets to Kill with no Shield (100 HP)</strong></td><td><strong>Bullets to Kill with Light Shield (125 HP)</strong></td><td><strong>Bullets to Kill with full Shield (150 HP)</strong></td></tr><tr><td rowspan=3><br><br>0 &#8211; 15 meters</td><td>Head</td><td>2</td><td>2</td><td>2</td></tr><tr><td>Body</td><td>4</td><td>5</td><td>6</td></tr><tr><td>Leg</td><td>5</td><td>6</td><td>7</td></tr><tr><td rowspan=3><br><br>15 &#8211; 30 meters</td><td>Head</td><td>2</td><td>2</td><td>3</td></tr><tr><td>Body</td><td>5</td><td>6</td><td>7</td></tr><tr><td>Leg</td><td>6</td><td>7</td><td>9</td></tr><tr><td rowspan=3><br><br>30 &#8211; 50 meters</td><td>Head</td><td>2</td><td>3</td><td>3</td></tr><tr><td>Body</td><td>5</td><td>7</td><td>8</td></tr><tr><td>Leg</td><td>6</td><td>7</td><td>9</td></tr></tbody></table>";
        }
        if(a == 8){
            imgsrc.src = "ASSETS\\Shorty.webp";
            gdt.innerHTML = "Shorty"
            imgsrc.style.width = "700px";
            tbdat.innerHTML = "<table><tbody><tr><td><strong>Distance from Target</strong></td><td><strong>Body Part Hit</strong></td><td><strong>Shells to Kill with no Shield (100 HP)</strong></td><td><strong>Shells to Kill with Light Shield (125 HP)</strong></td><td><strong>Shells to Kill with full Shield (150 HP)</strong></td></tr><tr><td rowspan=3><br><br>0 &#8211; 7 meters</td><td>Head</td><td>1</td><td>1</td><td>1</td></tr><tr><td>Body</td><td>1</td><td>1</td><td>1</td></tr><tr><td>Leg</td><td>1</td><td>1</td><td>1</td></tr><tr><td rowspan=3><br><br>7 &#8211; 15 meters</td><td>Head</td><td>1</td><td>2</td><td>2</td></tr><tr><td>Body</td><td>2</td><td>2</td><td>2</td></tr><tr><td>Leg</td><td>2</td><td>2</td><td>2</td></tr><tr><td rowspan=3><br><br>15 &#8211; 50 meters</td><td>Head</td><td>2</td><td>2</td><td>2</td></tr><tr><td>Body</td><td>3</td><td>3</td><td>4</td></tr><tr><td>Leg</td><td>4</td><td>5</td><td>5</td></tr></tbody></table>";
        }
        if(a == 9){
            imgsrc.src = "ASSETS\\Shorty.webp";
            gdt.innerHTML = "Shorty"
            imgsrc.style.width = "700px";
            tbdat.innerHTML = "<table><tbody><tr><td><strong>Distance from Target</strong></td><td><strong>Body Part Hit</strong></td><td><strong>Shells to Kill with no Shield (100 HP)</strong></td><td><strong>Shells to Kill with Light Shield (125 HP)</strong></td><td><strong>Shells to Kill with full Shield (150 HP)</strong></td></tr><tr><td rowspan=3><br><br>0 &#8211; 7 meters</td><td>Head</td><td>1</td><td>1</td><td>1</td></tr><tr><td>Body</td><td>1</td><td>1</td><td>1</td></tr><tr><td>Leg</td><td>1</td><td>1</td><td>1</td></tr><tr><td rowspan=3><br><br>7 &#8211; 15 meters</td><td>Head</td><td>1</td><td>2</td><td>2</td></tr><tr><td>Body</td><td>2</td><td>2</td><td>2</td></tr><tr><td>Leg</td><td>2</td><td>2</td><td>2</td></tr><tr><td rowspan=3><br><br>15 &#8211; 50 meters</td><td>Head</td><td>2</td><td>2</td><td>2</td></tr><tr><td>Body</td><td>3</td><td>3</td><td>4</td></tr><tr><td>Leg</td><td>4</td><td>5</td><td>5</td></tr></tbody></table>";
        }
        if(a == 10){
            imgsrc.src = "ASSETS\\Shorty.webp";
            gdt.innerHTML = "Shorty"
            imgsrc.style.width = "700px";
            tbdat.innerHTML = "<table><tbody><tr><td><strong>Distance from Target</strong></td><td><strong>Body Part Hit</strong></td><td><strong>Shells to Kill with no Shield (100 HP)</strong></td><td><strong>Shells to Kill with Light Shield (125 HP)</strong></td><td><strong>Shells to Kill with full Shield (150 HP)</strong></td></tr><tr><td rowspan=3><br><br>0 &#8211; 7 meters</td><td>Head</td><td>1</td><td>1</td><td>1</td></tr><tr><td>Body</td><td>1</td><td>1</td><td>1</td></tr><tr><td>Leg</td><td>1</td><td>1</td><td>1</td></tr><tr><td rowspan=3><br><br>7 &#8211; 15 meters</td><td>Head</td><td>1</td><td>2</td><td>2</td></tr><tr><td>Body</td><td>2</td><td>2</td><td>2</td></tr><tr><td>Leg</td><td>2</td><td>2</td><td>2</td></tr><tr><td rowspan=3><br><br>15 &#8211; 50 meters</td><td>Head</td><td>2</td><td>2</td><td>2</td></tr><tr><td>Body</td><td>3</td><td>3</td><td>4</td></tr><tr><td>Leg</td><td>4</td><td>5</td><td>5</td></tr></tbody></table>";
        }
        if(a == 11){
            imgsrc.src = "ASSETS\\Shorty.webp";
            gdt.innerHTML = "Shorty"
            imgsrc.style.width = "700px";
            tbdat.innerHTML = "<table><tbody><tr><td><strong>Distance from Target</strong></td><td><strong>Body Part Hit</strong></td><td><strong>Shells to Kill with no Shield (100 HP)</strong></td><td><strong>Shells to Kill with Light Shield (125 HP)</strong></td><td><strong>Shells to Kill with full Shield (150 HP)</strong></td></tr><tr><td rowspan=3><br><br>0 &#8211; 7 meters</td><td>Head</td><td>1</td><td>1</td><td>1</td></tr><tr><td>Body</td><td>1</td><td>1</td><td>1</td></tr><tr><td>Leg</td><td>1</td><td>1</td><td>1</td></tr><tr><td rowspan=3><br><br>7 &#8211; 15 meters</td><td>Head</td><td>1</td><td>2</td><td>2</td></tr><tr><td>Body</td><td>2</td><td>2</td><td>2</td></tr><tr><td>Leg</td><td>2</td><td>2</td><td>2</td></tr><tr><td rowspan=3><br><br>15 &#8211; 50 meters</td><td>Head</td><td>2</td><td>2</td><td>2</td></tr><tr><td>Body</td><td>3</td><td>3</td><td>4</td></tr><tr><td>Leg</td><td>4</td><td>5</td><td>5</td></tr></tbody></table>";
        }
        if(a == 12){
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
                dat.childNodes[1].style.opacity="0";
                dat.childNodes[3].style.opacity="0";
                dat.childNodes[5].style.opacity="0";
                
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
