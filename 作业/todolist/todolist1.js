window.onload = function(){
    let data = localStorage.todolist1 ? JSON.parse(localStorage.todolist1) :[]
    let doingcon = document.querySelector(".doingcon")
    let doencon = document.querySelector(".doencon")

    let input = document.querySelector("#input")
    render()
    function render(){
        let str=''
        let str1=''
        data.forEach(function(item,index){
            if(item.doen){
                str1 += ` <div>
                <input type="checkBox" ;checked;  index=${index} tp="done">
                <p index=${index}>${item.title}</p>
                <a href="" class="iconfont icon-shanchu" index=${index}></a>
                </div>`
            }else{
                str += `<div>
                <input type="checkBox" ;checked;  index=${index} tp="doing">
                <p index=${index}>${item.title}</p>
                <a href="" class="iconfont icon-shanchu" index=${index}></a>
                </div>`
            }
        })
        doingcon.innerHTML = str
        doencon.innerHTML = str1
        localStorage.todolist1 = JSON.stringify(data)
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
        if(target.nodeName=='INPUT' && target.getAttribute(type)=="checkBox"){
            let index = target.getAttribute("index")
            if(target.getAttribute('tp')=="doing"){
                data[index].done = true
            }else{
                data[index].done = false
            }
            render()
        }
        if(target.nodeName=="A"){
            let index = target.getAttribute("index")
            data.splice(index,1)
            render()
        }
    }
    Selection.ondblclick = function(event){
        let target = event.target
        if(target.nodeName=="P"){
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
