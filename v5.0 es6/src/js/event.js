import {enterPress, selectAllTodoFuc, deleteAllTodoFuc, cancelAllFinishFuc, deleteAllFinishFuc, addBatch} from './utils/utils'
export const bindEvent = () => {
    const inputEle = document.getElementById('inputValue');
    inputEle.addEventListener('keypress', enterPress, false);

    const addMuch = document.getElementById('addMuch');
    addMuch.addEventListener('click', addBatch, false);

    const selectAllTodo = document.getElementById('selectAllTodo');
    selectAllTodo.addEventListener('change', selectAllTodoFuc, false);

    const deleteAllTodo = document.getElementById('deleteAllTodo');
    deleteAllTodo.addEventListener('change', deleteAllTodoFuc, false);

    const cancelAllFinish = document.getElementById('cancelAllFinish');
    cancelAllFinish.addEventListener('change', cancelAllFinishFuc, false);

    const deleteAllFinish = document.getElementById('deleteAllFinish');
    deleteAllFinish.addEventListener('change', deleteAllFinishFuc, false);

    
}