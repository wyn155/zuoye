window.onload = function(){
    let content = document.querySelector(".content")
    let xiaobox = document.querySelector(".xiao-box")
    let bigbox = document.querySelector(".big-box")
    let fangdajing = document.querySelector(".fangdajing")
    let mark = document.querySelector(".mark")
    let img = bigbox.getElementsByTagName("img")[0];

    xiaobox.onmouseover = function(){
        fangdajing.style.display = "block"
        bigbox.style.display = "block"
    }

    xiaobox.onmouseout = function(){
        fangdajing.style.display = "none"
        bigbox.style.display = "none"
    }

    mark.onmousemove=function(ev){
        let _event=ev||window.event;//做兼容性，兼容IE
        //1计算值：
        let left=_event.clientX-content.offsetLeft-xiaobox.offsetLeft-fangdajing.offsetWidth/2;
        let top=_event.clientY-content.offsetTop-xiaobox.offsetTop-fangdajing.offsetHeight/2;

        if(left<0) left=0;
        if(top<0) top=0;
        if(left>xiaobox.offsetWidth-fangdajing.offsetWidth)
                left=xiaobox.offsetWidth-fangdajing.offsetWidth;
        if(top>xiaobox.offsetHeight-fangdajing.offsetHeight)
                top=xiaobox.offsetHeight-fangdajing.offsetHeight;

        fangdajing.style.left = left+"px";
        fangdajing.style.top = top+"px"

        let percentX=left/(mark.offsetWidth-fangdajing.offsetWidth);
        let percentY=top/(mark.offsetHeight-fangdajing.offsetHeight);

        img.style.left=-percentX*(img.offsetWidth-bigbox.offsetWidth)+"px";
        img.style.top=-percentY*(img.offsetHeight-bigbox.offsetHeight)+"px";
    }
}