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



function zhiding  (topClassName){
    let topEle = document.querySelector(topClassName)
    // window.onscroll = function(){
    //     let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    //     if(scrollTop>=1000){
    //         topEle.style.display = "block"
    //     }else{
    //         topEle.style.display = "none"
    //     }
    // }
    topEle.onclick=function(){
        let ele = document.documentElement || document.body
        animate(ele,{scrollTop:0},1000)
    }
}


function loucengtiaozhuan(btnsEleClassName,boxClassName,btnsClassName,searchSite){
    let btnsEle = document.querySelector(".cedaohanglan")
    let topEle = document.querySelector(searchSite)
    let boxs = document.querySelectorAll(".tmall-market")
    // console.log(boxClassName)
    let btns = document.querySelectorAll(".cecon")

    // arr 保存 楼层举例页面的高度
    let arr = []
    boxs.forEach(function(item){
        arr.push(item.offsetTop)
        console.log(arr)
    })
    window.onscroll = function() {
        // 实现侧导航的显示隐藏
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        console.log(123)
        let value = boxs[0].offsetTop - 300
        console.log(value)
        if (scrollTop > value) {
            btnsEle.style.transform = "scale(1,1)"
        } else {
            btnsEle.style.transform = "scale(0,0)"
        }
        if(scrollTop>=1000){
            console.log("abc")
            topEle.style.transform = "scale(1,1)"
        }else{
            topEle.style.transform = "scale(1,0)"
        }
        // 实现楼层显示
        // 目的：滚动到一定程度显示楼层下标。
        // findIndex :返回第一个满足条件的下标
        // [522, 1014, 1506, 1998, 2490, 2982, 3474, 3966, 4458, 4950]
        // 已知 ：scrollTop   距离头部200显示下标
        let index = arr.findIndex((item) => {
            // 当scrollTop >322
            if (scrollTop - 190 < item) {
                return item
            }
        }) // 返回满足条件的下标
        btns.forEach(function(item,i){
            if(i==index){
                item.style.backgroundColor = "red"
            }else{
                item.style.backgroundColor = ""
            }
        })
        btns.forEach(function(item,index){
        item.onclick = function(){
            let ele = document.documentElement || document.body
            // ele.scrollTop = arr[index]-300
            animate(ele,{scrollTop:arr[index]-100},500)
        }
    })
    }
}

function SelectCard(btnsClassName,consClassName){
    let btns = document.querySelectorAll(btnsClassName);
    let cons = document.querySelectorAll(consClassName);
    // console.log(btns);
    // console.log("123");
    // console.log(cons);
    btns.forEach(function (item,index) {
        cons[0].style.zIndex = 10
        btns[0].style.backgroundColor = "green"
        item.onmouseenter = function () {
            //清除
            btns.forEach(function (it, i) {
                it.classList.remove("name")
                it.style.backgroundColor=""
            });
            this.classList.add("name");
            item.style.backgroundColor = "green"
            //清除
             cons.forEach(function(item,index){
                 item.style.zIndex = 0
           })
             cons[index].style.zIndex = 10
            }
    })
    
}


