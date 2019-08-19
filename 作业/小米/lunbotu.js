function hs(hsClassName,leftClassName,rightClassName,dianClassName){
    let hengSan = document.querySelector(hsClassName)
    let left = document.querySelector(leftClassName)
    let right = document.querySelector(rightClassName)
    let dian = document.querySelectorAll(dianClassName)
    let len = 0
    let index = 0
    dian[0].style.backgroundColor = "#ff6700"
    right.onclick = function(){
        dian.forEach(function(item){
            item.style.backgroundColor=""
        })
        if(index<2){
            len -= 296
            index += 1
            animate(hengSan,{left:len},500)
            dian[index].style.backgroundColor = "#ff6700"
        }
    }

    left.onclick = function(){
        dian.forEach(function(item){
            item.style.backgroundColor=""
        })
        if(index>0){
            len += 296
            index -= 1
            animate(hengSan,{left:len},500)
            dian[index].style.backgroundColor = "#ff6700"
        }
    }
}

function findXiaLa(finKName,findXName,findLName,shuruName,beijinName){
    let findK = document.querySelector(finKName)
    let findX = document.querySelector(findXName)
    let findL = document.querySelector(findLName)
    let shuru = document.querySelector(shuruName)
    let beijin = document.querySelector(beijinName)
    shuru.onfocus = function(){
        console.log(1)
        findK.style.borderColor = "#ff6700"
        findX.style.display = "block"
        findL.style.borderColor = "#ff6700"
        beijin.style.display = "none"
    }
    shuru.onblur = function(){
        findK.style.borderColor = "#E0E0E0"
        findX.style.display = "none"
        findL.style.borderColor = "#E0E0E0"
        beijin.style.display = "block"
    }
}

function zhiding  (topClassName){
    let topEle = document.querySelector(topClassName)
    window.onscroll = function(){
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        if(scrollTop>=1000){
            topEle.style.display = "block"
        }else{
            topEle.style.display = "none"
        }
    }
    topEle.onclick=function(){
        let ele = document.documentElement || document.body
        animate(ele,{scrollTop:0},1000)
    }
}
