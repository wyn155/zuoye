//window.onload = function(){
//    let btns = document.querySelectorAll(".grid-xia .daxia")
//    let cons = document.querySelectorAll(".cons .grid-xia")
//    btns.forEach((item,index)=>{
//
//        item.onmouseenter = (){
//
//        }
//    })
//}
//


function transParent(lunbotuClassName,lunbokClassName,tiaoClassName){
    let ceils = document.querySelectorAll(lunbotuClassName)
    let banner = document.querySelector(lunbokClassName)
    let dians = document.querySelectorAll(tiaoClassName)
    let now = 0
    let arrColor = ["#E8E8E8","#3601C0","#0086FE","#E8E8E8","#E8E8E8","#0D0D0D"]
    function run(type=0){
        if(type==0){
             // 正向
            now+=1
            if(now>=ceils.length){
                now=0
            }

        }else{
            //逆向
            now-=1
            if(now<0){
                now = ceils.length-1
            }
        }
        ceils.forEach(function(item,index){
            item.classList.remove("active")
        })
        ceils[now].classList.add("active")
        banner.style.background = arrColor[now]
        dians.forEach(function(item,index){
            if(index==now){
                item.style.background = "white"
            }else{
                item.style.background = "black"
            }
        })
    }

    let t = setInterval(run,1000)

    banner.onmouseenter = function(){
        clearInterval(t)
    }
    banner.onmouseleave = function(){
        t = setInterval(run,1000)
    }

    dians.forEach(function(item,index){
        item.onclick = function(){
            ceils.forEach(function(item,i){
                item.classList.remove("active")
            })
            ceils[index].classList.add("active")
            now = index
        }
    })
}



function louCeng(navClassName,storeyClassName,navNumClassName){
    let btns = document.querySelector(navClassName)
    let boxs = document.querySelectorAll(storeyClassName)
    let btn = document.querySelectorAll(navNumClassName)

    // arr 保存 楼层举例页面的高度
    let arr = [ ]
    boxs.forEach(function(item){
        arr.push(item.offsetTop)
    })
    console.log(arr)
    // 实现侧导航的显示隐藏
    window.onscroll = function(){
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        let value = boxs[0].offsetTop - 200
        if(scrollTop>value){
            btns.style.transform = "scale(1,1)"
        }else{
            btns.style.transform = "scale(0,0)"
        }

        let index = arr.findIndex((item)=>{
            if(scrollTop - 190 < item ){
                return item
            }
        })   //返回满足条件的下标

        btn.forEach(function(item,i){
            if(i==index){
                item.style.backgroundColor = "red"
            }
            else{
                item.style.backgroundColor = ""
            }
        })
    }
    btn.forEach(function(item,index){
        item.onclick = function(){
            let ele1 = document.documentElement.scrollTop || document.body.scrollTop
            animate(ele1,{scrollTop:arr[index]-150},500)
        }

    })
}

function moveTop(topSite){
    let topEle1 = document.querySelector(topSite)
    window.onscroll = function(){
        let scrollTop1 = document.documentElement.scrollTop || document.body.scrollTop
        if(scrollTop1>=1000){
            topEle1.style.display = "block"
        }else{
            topEle1.style.display = "none"
        }
    }
    topEle1.onclick = function(){
        let ele2 = document.documentElement.scrollTop || document.body.scrollTop
        animate(ele2,{scrollTop1:0},1000)
    }
}

function searchTop(searchSite){
    let topEle2 = document.querySelector(searchSite)
    window.onscroll = function(){
        let scrollTop2 = document.documentElement.scrollTop || document.body.scrollTop
        if(scrollTop2>=1000){
            topEle2.style.transform = "scale(1,1)"
        }else{
            topEle2.style.transform = "scale(1,0)"
        }
    }
}

