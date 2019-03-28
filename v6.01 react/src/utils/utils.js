
//从localstorage获取数据并转换格式
export const loadData = ()=>{
    const historyData = localStorage.getItem('myTodoList');
    return historyData ? JSON.parse(historyData) : [];
}

//转换数据格式并保存到localstorage
export const saveData = (todoList) => localStorage.setItem("myTodoList", JSON.stringify(todoList));

export const getTodoData = (data) => {
    return data.filter((item )=>item.update === false) 
}

export const getDoneData = (data) =>{
    return data.filter((item )=>item.update === true) 
}