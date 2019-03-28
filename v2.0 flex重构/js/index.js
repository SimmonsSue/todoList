
//把数据存进localstorage中
function saveData(todoList){
    localStorage.setItem("myTodoList",JSON.stringify(todoList))
}
//从localstorage获取数据
function loadData(){
    const historyData=localStorage.getItem('myTodoList');
    return historyData ? JSON.parse(historyData) : [];
    // if(historyData!=null){
    //     return JSON.parse(historyData)
    // }
    // return [];
}

//保存顺序
function mySort(){
    const ul_a=document.getElementsByTagName('ul')[0];
    const todoList=ul_a.getElementsByTagName("p");
    const ul_b=document.getElementsByTagName("ul")[1];
    const finishList=ul_b.getElementsByTagName("p");
    let data=[];
    for(let i=0;i<=todoList.length-1;i++){
        // const todo={"value":todoList[i].innerHTML,"update":false};
        data.push({"value":todoList[i].innerHTML,"update":false});
    }
    for(let i=0;i<=finishList.length-1;i++){
        // const finish={"value":finishList[i].innerHTML,"update":true};
        data.push({"value":finishList[i].innerHTML,"update":true});
    }
    saveData(data);
}
//添加新的todoList
function enterPress(event){
    // var todoList=[{value:''},{update:'false'}];
    const inputValue=document.getElementById('inputValue').value.trim();
    // var todo_obj={"value":inputValue,"update":false};
    const todoList=loadData();
    if(event.keyCode==13){
        if(inputValue==''){
            alert("输入不能为空！");
        }
        else{
            todoList.push({"value":inputValue,"update":false});
            saveData(todoList);
        }
        document.getElementById("inputValue").value="";
        myload();
        mySort();
        document.getElementById("inputValue").focus();
    }
    animationTodo();
}
//动画效果
function animationTodo(){
    const ul_a=document.getElementsByTagName("ul")[0];
    if(ul_a.childNodes.length>0){
        setTimeout(function(){
            ul_a.lastChild.classList.add("animation1");
        },0);
        setTimeout(function(){
            ul_a.lastChild.classList.add("animation2");
        },200);
    }
}
//
function animationFinish(){
    const ul_b=document.getElementsByTagName("ul")[1];
    if(ul_b.childNodes.length>0){
        setTimeout(function(){
            ul_b.lastChild.classList.add("animation1");
        },0);
        setTimeout(function(){
            ul_b.lastChild.classList.add("animation2");
        },200);
        
    }
}

window.load=myload();
//加载数据
function myload(){
    const localData=loadData();
    const ul_a=document.getElementsByClassName('doingList');
    const ul_b=document.getElementsByClassName('finishList');
    const todoCount=document.getElementsByClassName('todoCount');
    const finishCount=document.getElementsByClassName('finishCount');
    let todoCountNum=0;
    let finishCountNum=0;
    let todoString='';
    let finishString='';
    //删除最后一个时，todoString=““因为跳过了    ul_a[0].innerHTML=todoString;所以最后一个没有显示删除
    for(let i=0;i<=localData.length-1;i++){
        // console.log(i)
        if(!localData[i].update){
            todoString+=
            // "<li id="+"drag"+i+" draggable='true'  ondragstart="+"drag(event,this"+") ondrop="+"drop(event,this"+") ondragover='allowDrop(event)'>"+
            // "<div class='bind'><input  type='checkbox' onchange='finish("+i+")'>"+
            // "<p id="+"p"+i+" onclick='edit("+(i)+")'>"+localData[i].value+"</p></div>"+
            // "<input id="+"input"+i+" style='display:none;'"+ "/>"+
            // "<a  href='javascript:remove("+(i)+")' title='删除'>-</a>"+
            // "</li>";
            `<li id='drag${i}' draggable='true'  ondragstart='drag(event,this)' ondrop='drop(event,this)' ondragover='allowDrop(event)'>
            <div class='bind'><input  type='checkbox' onchange='finish(${i})'>
            <p id='p${i}' onclick='edit(${i})'>${localData[i].value}</p></div>
            <input id='input${i}' style='display:none;'/>
            <a  href='javascript:remove(${i})' title='删除'>-</a>
            </li>`;
            // todoString+='1'
            //appendchild
            todoCountNum++;
            
        }
        else{
            finishString+=`<li >
            <div class='bind'><input type='checkbox' onchange='retodo(${i})' checked='checked'>
            <p >${localData[i].value}</p></div>
            <a  href='javascript:remove(${i})' title='删除'>-</a>
            </li>`;
            finishCountNum++;
            
        }
        
        //初始化chenckbox
        const checkbox1=document.getElementById("checkbox1");
        const checkbox2=document.getElementById("checkbox2");
        const checkbox3=document.getElementById("checkbox3");
        const checkbox4=document.getElementById("checkbox4");
        checkbox1.checked=false;
        checkbox2.checked=false;
        checkbox3.checked=false;
        checkbox4.checked=false;
    }
    ul_a[0].innerHTML=todoString;
    ul_b[0].innerHTML=finishString;
    todoCount[0].innerText=todoCountNum;
    finishCount[0].innerText=finishCountNum;
}
//完成操作  即修改其中选中数据的update为true
function finish(i){
    let data=loadData();
    let newData=data.splice(i,1);
    newData[0].update=true;
    data=data.concat(newData);
    saveData(data);
    myload();
    animationFinish();
}
//重新返回到todo列表
function retodo(i){
    let data=loadData();
    let newData=data.splice(i,1);
    newData[0].update=false;
    data=data.concat(newData);
    saveData(data);
    myload();
    animationTodo();
}
//删除数据
function remove(i){
    const data=loadData();
    data.splice(i,1);
    saveData(data);
    myload();
    mySort();
}
//编辑
function edit(i){
    mySort();
    const data = loadData(); 
    const p = document.getElementById("p"+i);
    const primValue = p.innerHTML;
    // p.innerHTML="<input id="+"input"+i+" value="+primValue+" />";
    const input = document.getElementById('input'+i);
    p.style.display = "none";
    input.style.display="block";
    input.value=primValue;
    input.setSelectionRange(0,input.value.length);
    input.focus();
    input.onblur=function(){
        if(input.value === null){
            p.innerHTML = primValue;
            alert('输入不能为空');
        }
        else{
            const newData=data.splice(i,1)[0];
            newData.value=input.value;
            data.splice(i,0,newData);
            saveData(data);
            myload();
            mySort();

        }
    }
}
//拖拽功能
function ondrapstart(event){
    event.preventDefault();
}
var text1=null;
function drag(event,text2){
    text1=text2;
    event.dataTransfer.setData('Text/html',text1.innerHTML);
}
function drop(event,text2){
    event.preventDefault();
    text1.innerHTML=text2.innerHTML;
    text2.innerHTML=event.dataTransfer.getData('Text/html');
    mySort();
    myload();
}
function allowDrop(event){
    event.preventDefault();
}
