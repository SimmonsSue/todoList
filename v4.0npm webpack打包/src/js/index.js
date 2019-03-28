define(function(require,exports,module){
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
var inputValue=document.getElementById("inputValue");
inputValue.addEventListener("keypress",function enterPress(event){
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
});

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

// window.load=myload();
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
    localData.forEach((item, i) => {
        //
            // console.log(i)
            if(!item.update){
                todoString+=
                // "<li id="+"drag"+i+" draggable='true' ondragstart= >"+
                // "<div class='bind'><input  type='checkbox'>"+
                // "<p id="+"p"+i+" >"+localData[i].value+"</p></div>"+
                // "<input id="+"input"+i+" style='display:none;'"+ "/>"+
                // "<a  href='javascript:;' title='删除'>-</a>"+
                // "</li>";
                `<li id='drag${i}' draggable='true'>
                <div class='bind'><input class='oncheck' value='${i}' type='checkbox'>
                    <p class='edit' value='${i}' id='p${i}' onclick='' >${item.value}</p>
                </div>
                <input id='input${i}'  style='display:none;'/>
                <a  class='delete' value='${i}' href='javascript:;' title='删除'>-</a>
                </li>`;
                // todoString+='1'
                //appendchild
                todoCountNum++;
                
            }
            else{
                finishString+=`<li >
                <div class='bind'><input class='retodo' value='${i}' type='checkbox'  checked='checked'>
                <p >${item.value}</p></div>
                <a class='delete' value='${i}' href='javascript:;' title='删除'>-</a>
                </li>`;
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
        });
        ul_a[0].innerHTML=todoString;
        ul_b[0].innerHTML=finishString;
        todoCount[0].innerText=todoCountNum;
        finishCount[0].innerText=finishCountNum;
    
        var lis=data1.getElementsByTagName('li');
        var lis2=data2.querySelectorAll('ul li');
        var inputs=document.getElementsByClassName('oncheck');
        var ps=data1.getElementsByClassName('edit');
        var as=document.getElementsByClassName('delete');
        var retodos=document.getElementsByClassName('retodo');
    
        [].forEach.call(lis, function(li) {
            li.addEventListener('dragstart', drag, false);
            li.addEventListener('dragover', ondrapstart, false);
            li.addEventListener('drop', drop, false);
            onmouseout =function(){
                mySort();
            };
        });	
        
        [].forEach.call(inputs, function(input) {
            input.addEventListener('change', finish, false);
        });	
    
        [].forEach.call(retodos, function(reto) {
            reto.addEventListener('change', retodo, false);
        });	
    
        [].forEach.call(ps, function(p) {
            p.addEventListener('click', edit, false);
        });	
    
        [].forEach.call(as, function(a) {
            a.addEventListener('click', remove, false);
        });	
    }
    // for(var i=0;i<=localData.length-1;i++){
    //     // console.log(i)
    //     if(!localData[i].update){
    //         todoString+=
    //         // "<li id="+"drag"+i+" draggable='true' ondragstart= >"+
    //         // "<div class='bind'><input  type='checkbox'>"+
    //         // "<p id="+"p"+i+" >"+localData[i].value+"</p></div>"+
    //         // "<input id="+"input"+i+" style='display:none;'"+ "/>"+
    //         // "<a  href='javascript:;' title='删除'>-</a>"+
    //         // "</li>";
    //         `<li id='drag${i}' draggable='true'>
    //         <div class='bind'><input class='oncheck'  value='${i}' type='checkbox'>
    //             <p class='edit' value='${i}' id='p${i}' onclick='' >${localData[i].value}</p>
    //         </div>
    //         <input id='input${i}'  style='display:none;'/>
    //         <a  class='delete'  href='javascript:;' title='删除'>-</a>
    //         </li>`;
    //         // todoString+='1'
    //         //appendchild
    //         todoCountNum++;
            
    //     }
    //     else{
    //         finishString+=`<li >
    //         <div class='bind'><input class='retodo' type='checkbox' value='${i}' checked='checked'>
    //         <p >${localData[i].value}</p></div>
    //         <a class='delete' href='javascript:;' title='删除'>-</a>
    //         </li>`;
    //         finishCountNum++;
            
    //     }
        
    //     //初始化chenckbox
    //     var checkbox1=document.getElementById("checkbox1");
    //     var checkbox2=document.getElementById("checkbox2");
    //     var checkbox3=document.getElementById("checkbox3");
    //     var checkbox4=document.getElementById("checkbox4");
    //     checkbox1.checked=false;
    //     checkbox2.checked=false;
    //     checkbox3.checked=false;
    //     checkbox4.checked=false;
    // }
    // ul_a[0].innerHTML=todoString;
    // ul_b[0].innerHTML=finishString;
    // todoCount[0].innerText=todoCountNum;
    // finishCount[0].innerText=finishCountNum;

    // var lis=data1.getElementsByTagName('li');
    // var lis2=data2.querySelectorAll('ul li');
    // var inputs=document.getElementsByClassName('oncheck');
    // var ps=data1.getElementsByClassName('edit');
    // var as=document.getElementsByClassName('delete');
    // var retodos=document.getElementsByClassName('retodo');

    // [].forEach.call(lis, function(li) {
    //     li.addEventListener('dragstart', drag, false);
    //     li.addEventListener('dragover', ondrapstart, false);
    //     li.addEventListener('drop', drop, false);
    //     onmouseout =function(){
    //         mySort();
    //     };
    // });	
    
    // [].forEach.call(inputs, function(input) {
    //     input.addEventListener('change', finish, false);
    // });	

    // [].forEach.call(retodos, function(reto) {
    //     reto.addEventListener('change', retodo, false);
    // });	

    // [].forEach.call(ps, function(p) {
    //     p.addEventListener('click', edit, false);
        
    // });	

    // [].forEach.call(as, function(a) {
    //     a.addEventListener('click', remove, false);
    // });	
// }
//完成操作  即修改其中选中数据的update为true
function finish(i){
    // console.log(i)
    var j=i.target.getAttribute("value");
    var data=loadData();
    var newData=data.splice(j,1);
    newData[0].update=true;
    // data=data.splice(i,0,newData);
    data=data.concat(newData);
    saveData(data);
    myload();
    mySort();
    animationFinish();
}
//重新返回到todo列表
function retodo(i){
    var j=i.target.getAttribute("value");
    var data=loadData();
    var newData=data.splice(j,1);
    newData[0].update=false;
    // data=data.splice(i,0,newData);
    data=data.concat(newData);
    saveData(data);
    myload();
    mySort();
    animationTodo();
}
//删除数据
function remove(i){
    var j=i.target.getAttribute("value");
    var data=loadData();
    data.splice(j,1);
    saveData(data);
    myload();
    mySort();
}
//编辑
function edit(i){
    mySort();
    var j=i.target.getAttribute("value");
    var data=loadData(); 
    var p=document.getElementById("p"+j);
    var primValue=p.innerHTML;
    var input=document.getElementById('input'+j);
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
            var newData=data.splice(j,1)[0];
            newData.value=input.value;
            data.splice(j,0,newData);
            saveData(data);
            myload();
            mySort();

        }
    }
}

function ondrapstart(event){
    event.dataTransfer.effectAllowed = 'move';
    event.preventDefault();
}

function drag(event){
    text1=this;
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('Text/html',text1.innerHTML);
}
function drop(event){
    event.preventDefault();
    text1.innerHTML=this.innerHTML;
    this.innerHTML=event.dataTransfer.getData('Text/html');
    mySort();
    myload();//修复拖动之后立即编辑的bug
}
//todo全部选中
var checkbox1=document.getElementById("checkbox1");
checkbox1.addEventListener("change",
    function selectAllTodoFuc(){
        var data=loadData();
        for(var i=0;i<=data.length-1;i++){
            if(!data[i].update){
                data[i].update=!data[i].update;
            }
        }
    saveData(data);
    myload();
    mySort();
});
//todo全部删除
var checkbox2=document.getElementById("checkbox2");
checkbox2.addEventListener("change",
    function deleteAllTodoFuc(){
        var data=loadData();
        for(var i=0;i<=data.length-1;){
            if(!data[i].update){
                // data[i].update=!data[i].update;
                // remove(i);
                // data=loadData();
                data.splice(i,1);
            }
            else{
                i++;
            }
        }
    saveData(data);
    myload();
    mySort();
});

//全部取消完成
var checkbox3=document.getElementById("checkbox3");
checkbox3.addEventListener("change",
    function cancelAllFinishFuc(){
        var data=loadData();
        for(var i=0;i<=data.length-1;i++){
            if(data[i].update){
                data[i].update=!data[i].update;
            }
        }
    saveData(data);
    myload();
    mySort();
});

//finish全部删除
var checkbox4=document.getElementById("checkbox4");
checkbox4.addEventListener("change",
    function deleteAllFinishFuc(){
        var data=loadData();
        for(var i=0;i<=data.length-1;){
            if(data[i].update){
                // data[i].update=!data[i].update;
                // remove(i);
                // data=loadData();
                data.splice(i,1);
            }
            else{
                i++;
            }
        }
    saveData(data);
    myload();
    mySort();
});
module.exports={
    loadData:loadData,
    saveData:saveData,
    myload:myload,
    mySort:mySort,
    // myaddEventListener:myaddEventListener
}
});
