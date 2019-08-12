window.onload = function(){
    let jiadian = document.querySelectorAll(".jiadian li ")
    let jiadian1 = document.querySelectorAll(".jiadian li .jiaju")
    let cons = document.querySelectorAll(".cons .list1")
    cons[0].style.zIndex=1
    jiadian.forEach((item,index)=>{
        item.style.color="#000"
        item.onmouseenter =function(){
            jiadian1.forEach(function (item,index) {
               item.style.color="#000"
                item.style.borderBottom="0"
            });
            cons.forEach(function(item,index){
                item.style.zIndex=0

            });
            cons[index].style.zIndex=1
            jiadian1[index].style.color="#ff6700"
            jiadian1[index].style.borderBottom="2px solid #ff6700"
        }
    })

    let banner = document.querySelectorAll(".bannerimg a")
    let ceils = document.querySelector(".lbt")
    let prev = document.querySelector(".prev")
    let next = document.querySelector(".next")
    let dians = document.querySelectorAll(".dian div")
    let now = 0
    let flag = true
    function run(type = 0) {
         flag = false
        if (type == 0) {//正向
            now += 1
            if (now > banner.length - 1) {
                now = 0
            }
        } else {//逆向
            now -= 1
            if (now < 0) {
                now = banner.length - 1
            }
        }
        dians.forEach(function (item,index) {
            item.classList.remove("act")
        });
        dians[now].classList.add("act")

        banner.forEach(function (item, index) {
            item.classList.remove("action")
        });
        banner[now].classList.add("action")
    }

    let t = setInterval(run, 1000)

    ceils.onmouseenter = function () {
        clearInterval(t)
    }
    ceils.onmouseleave = function () {
        t = setInterval(run, 1000)
    }
    //左右
    prev.onclick = function () {
            run(1)

    }
    next.onclick = function () {
            run(0)
        }


    //下边的点
    dians.forEach(function (item, index) {
        item.onclick = function () {
            dians.forEach(function (item,i) {
                item.classList.remove("act")
            })
            // dians[index].classList.add("act")
            banner.forEach(function (item, i) {
                item.classList.remove("action")
            })
            banner[index].classList.add("action")
            now = index
        }

    })

}