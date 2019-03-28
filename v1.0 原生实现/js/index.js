
//把数据存进localstorage中
function saveData(todoList){
    localStorage.setItem("myTodoList",JSON.stringify(todoList))
}
//从localstorage获取数据
function loadData(){
    var historyData=localStorage.getItem('myTodoList');
    if(historyData!=null){
        return JSON.parse(historyData)
    }
    else{
        return [];
    }
}

//保存顺序
function mySort(){
    var ul_a=document.getElementsByTagName('ul')[0];
    var todoList=ul_a.getElementsByTagName("p");
    var ul_b=document.getElementsByTagName("ul")[1];
    var finishList=ul_b.getElementsByTagName("p");
    var data=[];
    for(let i=0;i<=todoList.length-1;i++){
        var todo={"value":todoList[i].innerHTML,"update":false};
        data.push(todo);
    }
    for(let i=0;i<=finishList.length-1;i++){
        var finish={"value":finishList[i].innerHTML,"update":true};
        data.push(finish);
    }
    // localStorage.clear();
    saveData(data);
}
//添加新的todoList
function enterPress(event){
    // var todoList=[{value:''},{update:'false'}];
    var inputValue=document.getElementById('inputValue').value.trim();
    var todo_obj={"value":inputValue,"update":false};
    var todoList=loadData();
    if(event.keyCode==13){
        if(inputValue==''){
            alert("输入不能为空！");
        }
        else{
            todoList.push(todo_obj);
            saveData(todoList);
            // console.log("ok")
            // updateList(todoList);
        }
        document.getElementById("inputValue").value="";
        myload();//为什么去掉也能加载？
        mySort();
        document.getElementById("inputValue").focus();
    }
    animationTodo();
}
//动画效果
function animationTodo(){
    var ul_a=document.getElementsByTagName("ul")[0];
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
    var ul_b=document.getElementsByTagName("ul")[1];
    if(ul_b.childNodes.length>0){
        setTimeout(function(){
            ul_b.lastChild.classList.add("animation1");
        },0);
        setTimeout(function(){
            ul_b.lastChild.classList.add("animation2");
        },200);
        
    }
}
// function animationDelete(i){
//     var li=document.getElementsByTagName("li");
//     if(li.length>0){
//         setTimeout(function(){
//             li[i].classList.add("animation3");
//         },0); 
//     }
// }



window.load=myload();
//加载数据
function myload(){
    var localData=loadData();
    var ul_a=document.getElementsByClassName('doingList');
    var ul_b=document.getElementsByClassName('finishList');
    var todoCount=document.getElementsByClassName('todoCount');
    var finishCount=document.getElementsByClassName('finishCount');
    var todoCountNum=0;
    var finishCountNum=0;
    var todoString='';
    var finishString='';
    //删除最后一个时，todoString=““因为跳过了    ul_a[0].innerHTML=todoString;所以最后一个没有显示删除
    for(var i=0;i<=localData.length-1;i++){
        // console.log(i)
        if(!localData[i].update){
            todoString+="<li id="+"drag"+i+" draggable='true'  ondragstart="+"drag(event,this"+") ondrop="+"drop(event,this"+") ondragover='allowDrop(event)'>"+
            "<input class='left' type='checkbox' onchange='finish("+i+")'>"+
            "<p id="+"p"+i+" class='left'onclick='edit("+(i)+")'>"+localData[i].value+"</p>"+
            "<input id="+"input"+i+" style='display:none;'"+ "/>"+
            "<a class='left' href='javascript:remove("+(i)+")' title='删除'>-</a>"+
            "</li>";
            // todoString+='1'
            //appendchild
            todoCountNum++;
            
        }
        else{
            finishString+="<li >"+
            "<input class='left' type='checkbox' onchange='retodo("+i+")' checked='checked'>"+
            "<p class='left'>"+localData[i].value+"</p>"+
            "<a class='left' href='javascript:remove("+(i)+")' title='删除'>-</a>"+
            "</li>";
            finishCountNum++;
            
        }
        
        //初始化chenckbox
        var checkbox1=document.getElementById("checkbox1");
        var checkbox2=document.getElementById("checkbox2");
        var checkbox3=document.getElementById("checkbox3");
        var checkbox4=document.getElementById("checkbox4");
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
    // console.log(i)
    var data=loadData();
    var newData=data.splice(i,1);
    newData[0].update=true;
    // data=data.splice(i,0,newData);
    data=data.concat(newData);
    saveData(data);
    myload();
    animationFinish();
}
//重新返回到todo列表
function retodo(i){
    var data=loadData();
    var newData=data.splice(i,1);
    newData[0].update=false;
    // data=data.splice(i,0,newData);
    data=data.concat(newData);
    saveData(data);
    myload();
    animationTodo();
}
//删除数据
function remove(i){
    var data=loadData();
    data.splice(i,1);
    saveData(data);
    myload();
    mySort();
    // animationDelete(i);
}
//编辑
function edit(i){
    mySort();
    var data=loadData(); 
    var p=document.getElementById("p"+i);
    var primValue=p.innerHTML;
    // p.innerHTML="<input id="+"input"+i+" value="+primValue+" />";
    var input=document.getElementById('input'+i);
    p.style.display="none";
    input.style.display="block";
    input.value=primValue;
    input.setSelectionRange(0,input.value.length);
    input.focus();
    input.onblur=function(){
        //注意=null导致bug
        if(input.value==null){
            p.innerHTML=primValue;
            alert('输入不能为空');
        }
        else{//实现序列不变只能插入不能concat
            // var newData=data.splice(i,1);
            // newData[0].value=input.value;
            // // p.innerHTML=input.value;
            // //data.splice(i,0,{newData});
            // data=data.concat(newData);
            var newData=data.splice(i,1)[0];
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
    myload();//修复拖动之后立即编辑的bug
    console.log(this.i);
}
function allowDrop(event){
    event.preventDefault();
}
//没有实现在最后添加
