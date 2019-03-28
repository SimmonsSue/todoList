import {ul_todo, ul_finish, todoCount, finishCount} from './../const.js'

//键盘enter输入单个数据
export const enterPress = (event)=>{
    const inputValue= document.getElementById('inputValue').value.trim();
    let data = loadData();
    if(event.keyCode === 13){
        if(!inputValue){
            alert("输入不能为空！");
        }
        else{
            data.push({"value":inputValue, "update":false});
            saveData(data);
            add(inputValue);
            // animationLi(ul_todo);
        }
        document.getElementById("inputValue").value = "";
        document.getElementById("inputValue").focus();
    }
}

//从localstorage获取数据并转换格式
export const loadData = ()=>{
    const historyData = localStorage.getItem('myTodoList');
    return historyData ? JSON.parse(historyData) : [];
}

//转换数据格式并保存到localstorage
export const saveData = (todoList) => localStorage.setItem("myTodoList", JSON.stringify(todoList));

// 创建todo的li
const setTodoEleLi = (index, value, li) => {
    li.setAttribute('id', `drag${index}`);
    li.setAttribute('draggable', 'true');

    li.addEventListener('dragstart', function (e) {drag(e, this, index)});//箭头函数会改变this
    li.addEventListener('drop', function (e) {drop(e, this, index)});
    li.addEventListener('dragover', (e) => allowDrop(e));
    
    createEleTodoDiv(index, value, li);
    createEleInput(index, li);
    createEleA(index, li);
}

// 创建done的li
const setDoneEleLi = (index, value, li) => {
    li.setAttribute('id', `drag${index}`);
    li.setAttribute('draggable', 'true');

    li.addEventListener('dragstart', function (e) {drag(e, this, index)});//箭头函数会改变this
    li.addEventListener('drop', function (e) {drop(e, this, index)});
    li.addEventListener('dragover', (e) => allowDrop(e));
    
    createEleDoneDiv(index, value, li);
    // createEleInput(index, li);
    createEleA(index, li);
}

//在todo li里面创建一个div
const createEleTodoDiv = (index, value, li) => {
    const div = document.createElement('div');
    const input = document.createElement('input');
    const p = document.createElement('p');
    div.setAttribute('class', `bind`);

    input.setAttribute('class', `checkbox`);
    input.setAttribute('type', `checkbox`);
    input.addEventListener('change', () => changeState(index));

    p.setAttribute('id',`p${index}`);
    p.innerHTML = value;
    p.addEventListener('click', () => edit(index));

    li.appendChild(div);
    div.appendChild(input);
    div.appendChild(p);
    // return div;
}

//在done li里面创建一个div
const createEleDoneDiv = (index, value, li) => {
    const div = document.createElement('div');
    const input = document.createElement('input');
    const p = document.createElement('p');
    div.setAttribute('class', `bind`);

    input.setAttribute('class', `checkbox`);
    input.setAttribute('type', `checkbox`);
    input.setAttribute('checked', `checked`);
    input.addEventListener('change', () => changeState(index));

    p.setAttribute('id',`p${index}`);
    p.innerHTML = value;
    p.addEventListener('click', () => edit(index));

    li.appendChild(div);
    div.appendChild(input);
    div.appendChild(p);
    // return div;
}
//在li里创建a标签
const createEleA = (index, li) => {
    const a = document.createElement('a');
    a.addEventListener('click',() =>remove(index));
    a.innerText = '-';
    li.appendChild(a);
    // return a;
}

//在li里创建input标签
const createEleInput = (index, li) => {
    const input_hide = document.createElement('input'); 
    input_hide.setAttribute('id', `input${index}`);
    input_hide.setAttribute('style', `display:none`);
    li.appendChild(input_hide);
    // return input_hide;
}
////创建一条todo列表的li
export const getEleLiTodo = (index, value) => {
    const li = document.createElement('li');
    setTodoEleLi(index,value, li);
    return li;
}

//创建一条done列表的li
export const getEleLiDone = (index, value) => {
    const li = document.createElement('li');
    setDoneEleLi(index,value, li);
    return li;
}

//计算todo的条数
const getTodoCount = () => {
    return getCount(false)
}

//计算done的条数
const getDoneCount = () => {
    return getCount(true)
}

//计数
const getCount = (value) => {
    const data = loadData()
    return data.filter(item => item.update === value).length
}

//加载数据
export const myload = ()=>{
    const data = loadData();
    ul_todo.innerHTML = '';
    ul_finish.innerHTML = '';
    data.map((item, index)=>{
        if(!item.update){
            ul_todo.appendChild(getEleLiTodo(index, item.value));
        }
        else{
            ul_finish.appendChild(getEleLiDone(index, item.value));
        }
    });
    todoCount[0].innerText = getTodoCount();
    finishCount[0].innerText = getDoneCount();
}

//改变完成状态
export const changeState = (i) => {
    let data = loadData();
    let newData = data.splice(i, 1);
    newData[0].update = !newData[0].update;
    // data = data.concat(newData);
    data = [...data,...newData];
    saveData(data);
    myload();
    // newData[0].update ? animationLi(ul_finish) : animationLi(ul_todo);
}
//删除
export const remove = (i) => {
    let data = loadData();
    data.splice(i, 1);
    saveData(data);
    myload();
}
//编辑
export const edit = (i) => {
    let data = loadData();
    const _p = document.getElementById("p"+i);
    const _primValue = _p.innerHTML;
    const _input = document.getElementById('input'+i);
    _p.style.display = "none";
    _input.style.display = "block";
    _input.value = _primValue;
    _input.setSelectionRange(0, _input.value.length);
    _input.focus();
    _input.onblur = () => {
        if(!_input.value){
            _p.innerHTML = _primValue;
            alert('输入不能为空');
            myload();
        }
        else{
            const newData = data.splice(i, 1)[0];
            newData.value = _input.value;
            data.splice(i, 0, newData);
            saveData(data);
            myload();
        }
    }
}

//todo全部选中
export const selectAllTodoFuc = () => {
    let data = loadData();
    // data.map((item) => {item.update ? item.update : item.update = !item.update})
    data.map(function (item){if(item.update) {return } ; item.update = !item.update})
    saveData(data);
    myload();
    selectAllTodo.checked = false;
}

//全部取消完成
export const cancelAllFinishFuc = () => {
    let data = loadData();
    // data.map((item = {value,update}) => {item.update ? item.update = !item.update : item.update})
    data.map(function (item){if(!item.update) {return } ; item.update = !item.update})
    // data.map((item) => {item.update ? item.update = !item.update : item.update})
    saveData(data);
    myload();
    cancelAllFinish.checked = false;
}

// const getTodoData = (data) => {
//     data.filter((item) => {
//         return item.update === false;
//     })
// }
export const getTodoData = () => {
    return getData(true);
}

export const getFinishData = () => {
    return getData(false);
}
const getData = (type) => {
    const data = loadData();
    return data.filter(item =>item.update === type)
}
//todo全部删除
export const deleteAllTodoFuc = () => {
    console.time('删除todo列表')
    saveData(getTodoData());
    myload();
    deleteAllTodo.checked = false;
    console.timeEnd('删除todo列表')
}
    //finish全部删除
export const deleteAllFinishFuc = () => {
    console.time('删除finish列表')
    saveData(getFinishData());
    myload();
    deleteAllFinish.checked = false;
    console.timeEnd('删除finish列表')
}

//交换
// export const exchange = (text1, text2) => {
//     let _temp = text1;
//     text1 = text2;
//     text2 = _temp;
// }
//拖拽功能
export const ondrapstart = (event) => {
    event.preventDefault();
}

let text1 = null;
let index1 = 0;
export const drag = (event, text2, index2) => {
    text1 = text2;
    index1 = index2;
    event.dataTransfer.setData('Text/html', text1.innerHTML);
}

export const drop = (event, text2, index2) => {
    let data = loadData();
    let tempData = '';
    event.preventDefault();
    // exchange(data[index1].value, data[index2].value);
    tempData = data[index1].value;
    data[index1].value = data[index2].value;
    data[index2].value = tempData;
    saveData(data);
    text1.innerHTML = text2.innerHTML;
    text2.innerHTML = event.dataTransfer.getData('Text/html');
}

export const allowDrop = (event) => {
    event.preventDefault();
}

export const appendMuchElement = (i) => {
    const len = 9999;
    let data = loadData();
    for(let j = i;j<=len+i;j++){
        const todo_obj={"value":j,"update":false};
        ul_todo.appendChild(getEleLiTodo(j, j-i));
        data.push(todo_obj);   
    }
    saveData(data);
}

//添加一条
export const add = (inputValue) => {
    let data = loadData();
    const i = data.length-1;
    ul_todo.appendChild(getEleLiTodo(i, inputValue));
    todoCount[0].innerText = getTodoCount();
}

//添加一万条
export const addBatch = () => {
    console.time("添加10000Li");
    const i = ul_todo.childNodes.length;
    appendMuchElement(i);
    todoCount[0].innerText = getTodoCount();
    console.timeEnd("添加10000Li");
}