
function superAdd(){
    console.time("superAdd");
    const n=9999;
    const todoList=loadData();
    for(var i=0;i<=n;i++){
        var todo_obj={"value":"","update":false};//放里面否则为9999
        todo_obj.value=i;
        todoList.push(todo_obj);
    }
    saveData(todoList);
    myload();
    mySort();
    console.timeEnd("superAdd");
}

//todo全部选中
function selectAllTodoFuc(){
    const data=loadData();
    for(let i=0;i<=data.length-1;i++){
        if(!data[i].update){
            data[i].update=!data[i].update;
        }
    }
    saveData(data);
    myload();
    mySort();
    checkbox1.checked=false;
}
//todo全部删除
function deleteAllTodoFuc(){
    const data=loadData();
    // data.splice(0);删除全部
    for(let i=0;i<=data.length-1;){
        if(!data[i].update){
            data.splice(i,1);
        }
        else{
            i++;
        }
    }
    saveData(data);
    myload();
    checkbox2.checked=false;
    // mySort();
}

//全部取消完成
function cancelAllFinishFuc(){
    const data=loadData();
    for(let i=0;i<=data.length-1;i++){
        if(data[i].update){
            data[i].update=!data[i].update;
        }
    }
    saveData(data);
    myload();
    mySort();
    checkbox3.checked=false;
}

//finish全部删除
function deleteAllFinishFuc(){
    const data=loadData();
    for(let i=0;i<=data.length-1;){
        if(data[i].update){
            data.splice(i,1);
        }
        else{
            i++;
        }
    }
    saveData(data);
    myload();
    mySort();
    checkbox4.checked=false;
}


