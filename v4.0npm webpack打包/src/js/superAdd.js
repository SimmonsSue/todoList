define(function(require,exports,module){
    var index=require("./index");
    var superAdd=document.getElementById("superAdd");
    superAdd.addEventListener("click",function superAdd(){
        console.time("superAdd2");
        const n=9999;
        var todoList=index.loadData();
        for(var i=0;i<=n;i++){
            var todo_obj={"value":"","update":false};//放里面否则为9999
            todo_obj.value=i;
            todoList.push(todo_obj);
        }
        index.saveData(todoList);
        index.myload();
        index.mySort();
        console.timeEnd("superAdd2");
    });
});





