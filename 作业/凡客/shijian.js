function djs(shiName,fenName,miaoName){
    let hours = document.querySelector(shiName)
    console.log(hours)
    let minutes = document.querySelector(fenName)
    let second = document.querySelector(miaoName)

    let futureTime = new Date("2019/8/17 05:20:00")
    setInterval(update,1000)
    
    function update () {
        let nowTime = new Date()
        console.log(nowTime)
        let offset = Math.floor((futureTime.getTime()-nowTime.getTime())/1000)
    
        //小时
        let hoursNum = Math.floor(offset%(60*60*24)/(60*60))
        hours.innerHTML = hoursNum
        //分钟
        let minutesNum = Math.floor(offset%(60*60*24)%(60*60)/60)
        minutes.innerHTML = minutesNum
        //秒
        let secondNum = Math.floor(offset%(60*60*24)%(60*60)%60)
        second.innerHTML = secondNum
    }
    
}
function banner(ceilsClassName,prevClassName,nextClassName,diansClassName,bannerClassName){
    let ceils = document.querySelectorAll(ceilsClassName)
    let width = ceils[0].offsetWidth
    let length = ceils.length
    let prev = document.querySelector(prevClassName)
    let next = document.querySelector(nextClassName)
    let dians = document.querySelectorAll(diansClassName)
    let now=0,after=0
    let banner = document.querySelector(bannerClassName)
    // 布局
    ceils.forEach(function(item,index){
        if(index!=0){
            item.style.left= width+"px"
        }
    })
    dians[0].style.backgroundColor="blue"
    // 开关思想
    let flag = true
    // 轮播
    function run(type=0){
        flag = false
        if(type==0){
            // 下一张
            now+=1
            if(now>=length){
                now = 0
            }
            ceils[now].style.left=width+"px"
            animate(ceils[now],{left:0},500)
            animate(ceils[after],{left:-width},500,function(){
                flag = true
            })
        }else{
            // 上一张
            now-=1
            if(now<0){
                now = length-1
            }
            ceils[now].style.left=-width+"px"
            animate(ceils[now],{left:0},500)
            animate(ceils[after],{left:width},500,function(){
                flag=true
            })
        }
        dians.forEach(function(item,index){
            if(index==now){
                item.style.backgroundColor = "blue"
            }else{
                item.style.backgroundColor = "yellow"
            }   
        })
        
        after = now
    }
    let t =""
    window.onfocus = function(){
    // 自动轮播
    let t = setInterval(run,2000)
    // 移入暂停
    banner.onmouseenter = function(){
        clearInterval(t)
    }
    window.onblur = function(){
        clearInterval(t)
    }
    window.onfocus = function(){
        t = setInterval(run,2000)
    }
    banner.onmouseleave = function(){
        t = setInterval(run,2000)
    }
    // 前后按钮
    next.onclick = function(){
        if(flag){
            run()
        }
    }
    prev.onclick = function(){
        if(flag){
            run(1)
        }
    }
    // 轮播点
    dians.forEach(function(item,index){
       item.onclick=function(){
            let dianIndex = now
            if(index>dianIndex){
                now=index-1
                run()
            }else if(index<dianIndex){
                now =index+1
                run(1)
            }
       }
    })
}
window.onblur = function(){
    clearInterval(t)
}
}

