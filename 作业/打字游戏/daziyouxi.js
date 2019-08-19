//面向对象
window.onload = function(){

    class Game{
        constructor(screenClassName,pauseClassName,footerconClassName,healthClassName){
            this.screen = document.querySelector(screenClassName)
            this.pause = document.querySelector(pauseClassName)
            this.footercon = document.querySelector(footerconClassName)
            this.health = document.querySelector(healthClassName)
            console.log(this.footercon)
            this.letters =[]
            this.createLetter()
            this.run()
            this.runToggle()
            this.flag = false 
            this.removerChild()
            this.isKill = false
            this.killLetter()
            
        
        }
        //创建字母  
        createLetter(num=5){
            for(let i = 0;i<num;i++){
                let div =document.createElement("div")
            
            div.classList.add("letter")

            let left = Math.random()*5.5
            while(this.isOverlap(left)){
                left = Math.random()*5.5
            }

    
            let letter  = String.fromCharCode(parseInt(Math.random()*26+65))
            while (this.isRepeat(letter)){
                letter = String.fromCharCode(parseInt(Math.random() * 26 + 65));
            }
            let top = Math.random()*1+1
            
            div.setAttribute("style",`background-image:url("./img/A_Z/${letter}.png");background-size:cover;top:${top}rem;left:${left}rem`)
           
            this.screen.appendChild(div)
            let obj ={}
            obj['title']=letter
            obj['left']=left
            obj['node']=div;
            obj['top'] =top;
    
            this.letters.unshift(obj);

            }           
        }
        //只要返回不是-1 重叠了
        isOverlap(left){
            console.log(left)
            let status = this.letters.findIndex((item)=>{
                if(Math.abs(left-item.left)<0.53){
                    return item
                }               
            })
            if(status!=-1){
                return true;
            }else{
                return false;
            }
        } 
        //重复
        isRepeat(letter){
            let status = this.letters.findIndex((item)=>{
                if (letter == item.title){
                    return item;
                }
            })
            if (status==-1){
                return false;
            }else {
                return true;
            }
        }
        run(){
            if(this.flag){
                this.t = setInterval((item)=> {
                    this.letters.forEach((item,index)=>{
                        item.top+=0.3;
                        item.node.style.top = item.top+'rem';
                        if (item.top>7.4){
                           this.removerChild(index)
                           this.health.innerText-=1
                        }
                    })
                },500)
            }
        }
       
        //暂停
        runToggle(){
            this.pause.ontouchstart = ()=>{
    
                if(this.flag){
                    this.run()
                    this.flag = false
                    this.isKill = true
                    this.pause.setAttribute("style",'background-image:url("./img/Pause.png")')
 
                }
                else{
                    clearInterval(this.t)
                    this.flag = true
                    this.isKill = false
                    this.pause.setAttribute("style",'background-image:url("./img/Play.png")')
                }
           }
        }
        //消除
        killLetter(){
            this.footercon.ontouchstart = (event)=>{
                if(!this.isKill){
                    return 
                }
                    let target = event.target
                    console.log(target)
                    if(target.nodeName =="LI"){
                        let zimu = target.innerText
                        let index = this.letters.findIndex((item)=>{
                            if(item.title==zimu){
                                return item
                        }
                    })
                    this.removeChild(index)
                    
                
            }
           
        }
        
    }
    removerChild(index){
        this.screen.removeChild(this.letters[index].node)
        this.letters.splice(index,1);
        this.createLetter(1);
    }
}
    let game = new Game(".screen",".pause",".footer-con",".health")
    
    
    
    
}

//方法：run()   createLetter()

// //打字游戏
// //属性：
// //


// //方法：
// // run()
// //创建字母makeWord
// //暂停stop
// //开始start



// }

