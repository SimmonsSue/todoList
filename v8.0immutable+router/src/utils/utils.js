
//从localstorage获取数据并转换格式
// export const loadTodoData = ()=>{
//     const historyData = localStorage.getItem('todoList');
//     return historyData ? JSON.parse(historyData) : [];
// }
// export const loadDoneData = ()=>{
//     const historyData = localStorage.getItem('doneList');
//     return historyData ? JSON.parse(historyData) : [];
// }
export const loadData = ()=>{
    const historyData = localStorage.getItem('todoList');
    return historyData ? JSON.parse(historyData) : [];
}
export const saveData = (data) => localStorage.setItem("todoList", JSON.stringify(data));
//转换数据格式并保存到localstorage
// export const saveTodoData = (data) => localStorage.setItem("todoList", JSON.stringify(data));
// export const saveDoneData = (data) => localStorage.setItem("doneList", JSON.stringify(data));

// export const getTodoData = (data) => {
//     return data.filter((item )=>item.update === false) 
// }

// export const getDoneData = (data) =>{
//     return data.filter((item )=>item.update === true) 
// }