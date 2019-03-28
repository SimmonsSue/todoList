
function superAdd1(){
console.log("文档碎片化");
console.time("superAdd");
var oUl=document.getElementsByClassName("doingList")[0];
var fragElement=document.createDocumentFragment();
for(var i=0;i<=9999;i++){
    var oLi = document.createElement('li');
    oLi.innerHTML=
    // "<li id="+"drag"+i+" draggable='true'  ondragstart="+"drag(event,this"+") ondrop="+"drop(event,this"+") ondragover='allowDrop(event)'>"+
    "<input class='left' type='checkbox' onchange='finish("+i+")'>"+
    "<p class='left'onclick='edit("+(i)+")'>"+(i)+"</p>"+
    "<a class='left' href='javascript:remove("+(i)+")' title='删除'>-</a>";
    fragElement.appendChild(oLi);
    oLi.setAttribute('id',drag+i);
    oLi.setAttribute('draggable',true);
    oLi.setAttribute("ondragstart",drag);
    oLi.setAttribute('ondrop',drop);
    oLi.setAttribute('ondragover',allowDrop);
}
oUl.appendChild(fragElement);
// var inputValue=oUl.getElementsByTagName("p").value.trim();
// superAdd1();
console.timeEnd("superAdd");
}


function superAdd2(){
    console.time("superAdd2");
    const n=9999;
    var todoList=loadData();
    for(var i=0;i<=n;i++){
        var todo_obj={"value":"","update":false};//放里面否则为9999
        todo_obj.value=i;
        todoList.push(todo_obj);
    }
    saveData(todoList);
    myload();
    mySort();
    console.timeEnd("superAdd2");
}

function superAdd3(){
    var oUl=document.getElementsByClassName("doingList")[0];
    var str=oUl.innerHTML;
    for(var i=0;i<=9999;i++){
        str+=
        // "<li id="+"drag"+i+" draggable='true'  ondragstart="+"drag(event,this"+") ondrop="+"drop(event,this"+") ondragover='allowDrop(event)'>"+
        "<input class='left' type='checkbox' onchange='finish("+i+")'>"+
        "<p class='left'onclick='edit("+(i)+")'>"+(i+20000)+"</p>"+
        "<a class='left' href='javascript:remove("+(i)+")' title='删除'>-</a>";
        // "</li>";
        // "<li>"+(i+20000)+"</li>";
    }
    oUl.innerHTML=str;
}


//todo全部选中
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
}
//todo全部删除
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
}

//全部取消完成
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
}

//finish全部删除
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
}


