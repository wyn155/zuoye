$(function(){
    let imgs =$(".lbt img")
    let banner = $(".lbt")
    let prev = $(".biaoshiz")
    let next = $(".biaoshiy")
    let dians = $(".i9 div")
    console.log(imgs)
    let index = 0
    function run(type = 0){
        if(type==0){
            index+=1
            if(index>=imgs.length){
                index=0
            }
        }else{
            index-=1
            if(index<0){
                index=imgs.length-1
            }
        }
        imgs.css({
            "zIndex":"0",
            opacity:0
            
        }).eq(index).css({
            "zIndex":"10",
            opacity:1
            
        })
        dians.css('background-color',"yellow").eq(index).css('background-color',"green")
    }
    let t = setInterval(run,2000)
    banner.hover(function(){
        clearInterval(t)
    },function(){
        t = setInterval(run,2000)
    })
    next.click(function(){
        run()
    })
    prev.click(function(){
        run(1)
    })
    dians.click(function(){
        let i = $(this).index()
        index = i
        imgs.css({
            opacity:0,
            zIndex:0
        }).eq(index)
        .css({
            opacity:1,
            zIndex:10 
        })
        dians.css('background-color',"yellow").eq(index).css('background-color',"green")
    })
})
