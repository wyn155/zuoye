
//     window.onload = function(){

//     let doingData =  localStorage.doingData?localStorage.doingData.split(","):[]
//     let doneData = localStorage.doneData?localStorage.doneData.split(","):[]


//     let doingCon = document.querySelector(".doingcon")
//     let doneCon = document.querySelector(".doencon")
//     let num1Node = document.querySelector(".num1")
//     let num2Node = document.querySelector(".num2")


//     let input = document.querySelector('#input')


//     render()

//     input.onkeydown = function(event){
//         if(event.keyCode==13 && this.value!=""){
//             doingData.unshift(this.value)
//             localStorage.doingData = doingData
//             localStorage.doneData = doneData
//             // 渲染数据
//             render()
//             this.value=""
//         }
//     }

//     function render(){
//         let str = ""
//         let str1 = ""
//         doingData.forEach((item,index)=>{
//             str+=` <div>
//                 <input type="checkBox" checked class='change'>
//                 <p>${item}</p>
//                 <a href="" class="iconfont icon-shanchu"></a>
//             </div>`
//         })
//         doingCon.innerHTML = str

//         doneData.forEach((item,index)=>{
//             str1+=` <div>
//                 <input type="checkBox" checked class='change'>
//                 <p>${item}</p>
//                 <a href="" class="iconfont icon-shanchu"></a>
//             </div>`
//         })
//         doneCon.innerHTML = str1
//         num1Node.innerHTML = doingData.length
//         num2Node.innerHTML = doneData.length
//     }
//     doingCon.onclick = function(event){
//         let p = document.querySelector("p")
//         let target = event.target
//         console.log(target)
//         if(target.className=="change"){
//             let value = target.nextElementSibling.innerText
//             let index = doingData.indexOf(value)
//             doneData.unshift(doingData.splice(index,1)[0])
//             render()
//             localStorage.doingData = doingData
//             localStorage.doneData = doneData
//         }
//     }
// }
// /*
// localStorage.todolist = {title:'adf',}
// localStorage 可以永久性得存储 
// //Json  对象 用于
// JSON.Stringify() 将json数据转换为字符窜
// JSON.parse() 将字符串数据转换为json
//  */
window.onload = function(){
    let data = localStorage.todolist ? JSON.parse(localStorage.todolist) :[]
    let doingcon = document.querySelector(".doingcon")
    let doencon = document.querySelector(".doencon")
    let num1Node = document.querySelector(".num1")
    let num2Node = document.querySelector(".num2")
    let doing = document.querySelector(".doing")
    let doen = document.querySelector(".doen")

    let input = document.querySelector("#input")
    render()
    function render(){
        let num1=0
        let num2=0
        let str=''
        let str1=''
        data.forEach(function(item,index){
            if(item.doen){
                str1 += ` <div>
                <input type="checkbox" checked index=${index} tp="doen" class="dianji">
                <p index=${index}>${item.title}</p>
                <a href="" class="iconfont icon-shanchu" index=${index}></a>
                </div>`
                num2 += 1
            }else{
                str += `<div>
                <input type="checkbox" index=${index} tp="doing" class="dianji">
                <p index=${index}>${item.title}</p>
                <a href="" class="iconfont icon-shanchu" index=${index}></a>
                </div>`
                num1 += 1
            }   
        })
        doingcon.innerHTML = str
        doencon.innerHTML = str1
        localStorage.todolist = JSON.stringify(data)
        console.log(num1)
        console.log(num2)
        
    }

    input.onkeydown =function(event){
        if(event.keyCode ==13 && this.value !=""){
            data.unshift({'title':this.value,doen:false})
            this.value = ''
            render()
        }
    }
    let section = document.querySelector("section")
    section.onclick = function(event){
        let target = event.target
        if(target.nodeName=='INPUT' && target.getAttribute('type')=="checkbox"){
            let index = target.getAttribute("index")
            if(target.getAttribute('tp')=="doing"){
                data[index].doen = true
            }else{
                data[index].doen = false
            }
            render()
        
        }
        if(target.nodeName=='A'){
            let index = target.getAttribute("index")
            data.splice(index,1)
            render()
        }
    }
    section.ondblclick = function(event){
        let target = event.target
        if(target.nodeName=='P'){
            let str = target.innerHTML
            let index = target.getAttribute('index')
            target.innerHTML = ""
            let input = document.createElement("input")
            input.value = str
            input.onblur = function(){
                data[index].title = this.value
                render()
            }
            target.appendChild(input)
            input.focus()

        }
    }
}