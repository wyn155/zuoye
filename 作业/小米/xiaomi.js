window.onload = function(){
    let jiadianDaohangRight = document.querySelectorAll(".jiadian-daohang-right div p")
    let jiadianDakuang = document.querySelectorAll(".cons .jiadian-list-right")

    jiadianDaohangRight.forEach((item,index)=>{
        item.onmouseenter = function(){
            jiadianDaohangRight.forEach(function(item,index){
                item.style.color = "#000"
                item.style.borderBottom = "0"
            })
            jiadianDakuang.forEach(function(item,index){
                item.style.zIndex = 0
            })
            jiadianDakuang[index].style.zIndex = 10
            item.style.color = "#ff6700"
            item.style.borderBottom = "2px solid #ff6700"
        }
    })

    let ceils = document.querySelectorAll(".lunbotu-dak .lunbotu")
    let box = document.querySelector(".lunbotu-dak")
    let prev = document.querySelector(".left-arrow")
    let next = document.querySelector(".right-arrow")
    let dian = document.querySelectorAll(".four-dot .dot")
    let now = 0
    let flag = true
    function run(type=0){

        if(type == 0){
            //正向
            now += 1
            if(now>ceils.length-1){
                now = 0
            }
        }
        if(type == 1){
            //逆向
            now -= 1
            if(now<0){
                now = ceils.length-1
            }
        }
        ceils.forEach(function(item,index){
            item.classList.remove("first")
        })
        ceils[now].classList.add("first")
        dian.forEach(function(item,index){
            if(index==now){
                item.style.background = "none"
            }else{
                item.style.background = "#8D8D8D"
            }
        })
    }
    let t = setInterval(run,3000)

    box.onmouseenter = function(){
        clearInterval(t)
    }
    box.onmouseleave = function(){
        t = setInterval(run,3000)

    }

    next.onclick = function(){
             run()
    }
    prev.onclick = function(){
            run(1)
    }

    dian.forEach(function(item,index){
        item.onclick = function(){
            ceils.forEach(function(item,i){
                item.classList.remove("first")
            })
            ceils[index].classList.add ("first")
            now = index
        }
    })


}