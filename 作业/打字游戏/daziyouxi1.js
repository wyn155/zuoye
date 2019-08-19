window.onload = function(){
    class Game{
        constructor(screenClassName,stopClassName,keyClassName,lifeClassName,gradeClassName,stopBackgroundName,audioClassName){     //构造函数

            this.footer = document.querySelector(keyClassName) 
            this.btnPause = document.querySelector(stopClassName)
            this.screen = document.querySelector(screenClassName)
            this.life = document.querySelector(lifeClassName)
            this.grade = document.querySelector(gradeClassName)
            this.stopBackground = document.querySelector(stopBackgroundName)
            this.audio = document.querySelector(audioClassName)
            // this.lifeNum = 99
            // this.gradeNum = 1
            this.words = []
            this.createLetter()
            this.flag = false
            this.openMusic = true
            this.iskill = false
            this.runToggle()
            this.killWord()
            this.run()
            this.broadCast()
            
        }
        //创建字母
        createLetter(num=5){
            for(let i=0;i<num;i++){
                let div = document.createElement("div")
                div.classList.add("letter")
                //随机字母
                let word = String.fromCharCode(parseInt(Math.random()*26+65))

                //取消重复
                while(this.isReapeat(word)){
                    word = String.fromCharCode(parseInt(Math.random()*26+65))
                    
                }


                //平行随机位置
                let left = Math.random()*6.9

                //取消重叠
                while(this.isOverlap(left)){
                    left = Math.random()*6.9
                }

                let top = Math.random()+1
                div.setAttribute("style",`background-image:url(./img/A_Z/${word}.png);
                background-size:cover;top:${top}rem;left:${left}rem;`)
                //随机位置
                

                let obj = {}
                obj['title'] = word
                obj['top'] = top
                obj['left'] = left
                obj['node'] = div
                this.words.unshift(obj)
                

                //添加到屏幕
                this.screen.appendChild(div)
            }
        }

        //取消重叠
        isOverlap(left){
            let status = this.words.findIndex((item)=>{
                if(Math.abs(left-item.left)<0.53){
                    return item
                }
            })
            if(status!=-1){
                return true
            }else{
                return false
            }
        }


        //取消重复
        isReapeat(word){
            let status = this.words.findIndex((item)=>{
                if(word == item.title){
                    return item
                }
            })
            if(status == -1){
                return false
            }else{
                return true
            }
        }
        
        run(){
            if(this.flag){
                this.t=setInterval((item)=>{
                    this.words.forEach((item,index)=>{
                        item.top += 0.3
                        item.node.style.top = item.top+"rem"
                        if(item.top>7){
                            this.removeChild(index)
                            this.life.innerText -= 1
                            if(life.innerText<0){
                                this.flag=false
                                alert(123)
                            }
                        }
                    })
                },500)
            }
        }
        

        

        runToggle(){
            
            this.btnPause.ontouchstart = ()=>{ 
                if(this.flag){
                    this.run()
                    this.flag = false
                    this.iskill = true
                    this.stopBackground.setAttribute("style","background-image:url(./img/Pause.png);")
                }else{
                    this.flag = true
                    this.iskill = false
                    clearInterval(this.t)
                    this.stopBackground.setAttribute("style","background-image:url(./img/Play.png);")
                }
            }
        }
       
        killWord(){
            this.footer.ontouchstart = (event) => {
                if(!this.iskill){
                return 
                }
                let target = event.target
                if(target.nodeName == "LI"){
                    let colword = target.innerText
                    let index = this.words.findIndex((item)=>{
                        if(item.title == colword){
                            return item
                        }
                    })
                    if(index!=-1){
                        this.removeChild(index)
                        let g = parseInt(this.grade.innerText)
                        g+=1
                        this.grade.innerText = g
                    }
                }
            }
        }

         
        removeChild(index){
            this.screen.removeChild(this.words[index].node)
            this.words.splice(index,1)
            this.createLetter(1)
            // this.life.innerText = this.lifeNum 
            // this.grade.innerText = this.gradeNum
            
        }
        
        broadCast(){
            this.audio.ontouchstart = () => {
                if(this.openMusic){
                    this.openMusic = false
                    this.audio.setAttribute("style","background-image:url(./img/Aplay.png);")
                }else{
                    this.audio.setAttribute("style","background-image:url(./img/Apause.png);")
                    this.openMusic = true
                } 
            }
        }

    }
    

    let game =new Game(".screen",".pause",".footer-con",".health",".point",".pause",".laba")
    
}
    
