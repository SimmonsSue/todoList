/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/const.js":
/*!*************************!*\
  !*** ./src/js/const.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar ul_todo = document.getElementsByClassName('doingList')[0];\nvar ul_finish = document.getElementsByClassName('finishList')[0];\nvar todoCount = document.getElementsByClassName('todoCount');\nvar finishCount = document.getElementsByClassName('finishCount');\n\nexports.ul_todo = ul_todo;\nexports.ul_finish = ul_finish;\nexports.todoCount = todoCount;\nexports.finishCount = finishCount;\n\n//# sourceURL=webpack:///./src/js/const.js?");

/***/ }),

/***/ "./src/js/event.js":
/*!*************************!*\
  !*** ./src/js/event.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.bindEvent = undefined;\n\nvar _utils = __webpack_require__(/*! ./utils/utils */ \"./src/js/utils/utils.js\");\n\nvar bindEvent = exports.bindEvent = function bindEvent() {\n    var inputEle = document.getElementById('inputValue');\n    inputEle.addEventListener('keypress', _utils.enterPress, false);\n\n    var addMuch = document.getElementById('addMuch');\n    addMuch.addEventListener('click', _utils.addBatch, false);\n\n    var selectAllTodo = document.getElementById('selectAllTodo');\n    selectAllTodo.addEventListener('change', _utils.selectAllTodoFuc, false);\n\n    var deleteAllTodo = document.getElementById('deleteAllTodo');\n    deleteAllTodo.addEventListener('change', _utils.deleteAllTodoFuc, false);\n\n    var cancelAllFinish = document.getElementById('cancelAllFinish');\n    cancelAllFinish.addEventListener('change', _utils.cancelAllFinishFuc, false);\n\n    var deleteAllFinish = document.getElementById('deleteAllFinish');\n    deleteAllFinish.addEventListener('change', _utils.deleteAllFinishFuc, false);\n};\n\n//# sourceURL=webpack:///./src/js/event.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _event = __webpack_require__(/*! ./event */ \"./src/js/event.js\");\n\nvar _utils = __webpack_require__(/*! ./utils/utils */ \"./src/js/utils/utils.js\");\n\n!function () {\n    (0, _utils.myload)();\n    (0, _event.bindEvent)();\n}();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/utils/utils.js":
/*!*******************************!*\
  !*** ./src/js/utils/utils.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.addBatch = exports.add = exports.appendMuchElement = exports.allowDrop = exports.drop = exports.drag = exports.ondrapstart = exports.deleteAllFinishFuc = exports.deleteAllTodoFuc = exports.getFinishData = exports.getTodoData = exports.cancelAllFinishFuc = exports.selectAllTodoFuc = exports.edit = exports.remove = exports.changeState = exports.myload = exports.getEleLiDone = exports.getEleLiTodo = exports.saveData = exports.loadData = exports.enterPress = undefined;\n\nvar _const = __webpack_require__(/*! ./../const.js */ \"./src/js/const.js\");\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n//键盘enter输入单个数据\nvar enterPress = exports.enterPress = function enterPress(event) {\n    var inputValue = document.getElementById('inputValue').value.trim();\n    var data = loadData();\n    if (event.keyCode === 13) {\n        if (!inputValue) {\n            alert(\"输入不能为空！\");\n        } else {\n            data.push({ \"value\": inputValue, \"update\": false });\n            saveData(data);\n            add(inputValue);\n            // animationLi(ul_todo);\n        }\n        document.getElementById(\"inputValue\").value = \"\";\n        document.getElementById(\"inputValue\").focus();\n    }\n};\n\n//从localstorage获取数据并转换格式\nvar loadData = exports.loadData = function loadData() {\n    var historyData = localStorage.getItem('myTodoList');\n    return historyData ? JSON.parse(historyData) : [];\n};\n\n//转换数据格式并保存到localstorage\nvar saveData = exports.saveData = function saveData(todoList) {\n    return localStorage.setItem(\"myTodoList\", JSON.stringify(todoList));\n};\n\n// 创建todo的li\nvar setTodoEleLi = function setTodoEleLi(index, value, li) {\n    li.setAttribute('id', 'drag' + index);\n    li.setAttribute('draggable', 'true');\n\n    li.addEventListener('dragstart', function (e) {\n        drag(e, this, index);\n    }); //箭头函数会改变this\n    li.addEventListener('drop', function (e) {\n        drop(e, this, index);\n    });\n    li.addEventListener('dragover', function (e) {\n        return allowDrop(e);\n    });\n\n    createEleTodoDiv(index, value, li);\n    createEleInput(index, li);\n    createEleA(index, li);\n};\n\n// 创建done的li\nvar setDoneEleLi = function setDoneEleLi(index, value, li) {\n    li.setAttribute('id', 'drag' + index);\n    li.setAttribute('draggable', 'true');\n\n    li.addEventListener('dragstart', function (e) {\n        drag(e, this, index);\n    }); //箭头函数会改变this\n    li.addEventListener('drop', function (e) {\n        drop(e, this, index);\n    });\n    li.addEventListener('dragover', function (e) {\n        return allowDrop(e);\n    });\n\n    createEleDoneDiv(index, value, li);\n    // createEleInput(index, li);\n    createEleA(index, li);\n};\n\n//在todo li里面创建一个div\nvar createEleTodoDiv = function createEleTodoDiv(index, value, li) {\n    var div = document.createElement('div');\n    var input = document.createElement('input');\n    var p = document.createElement('p');\n    div.setAttribute('class', 'bind');\n\n    input.setAttribute('class', 'checkbox');\n    input.setAttribute('type', 'checkbox');\n    input.addEventListener('change', function () {\n        return changeState(index);\n    });\n\n    p.setAttribute('id', 'p' + index);\n    p.innerHTML = value;\n    p.addEventListener('click', function () {\n        return edit(index);\n    });\n\n    li.appendChild(div);\n    div.appendChild(input);\n    div.appendChild(p);\n    // return div;\n};\n\n//在done li里面创建一个div\nvar createEleDoneDiv = function createEleDoneDiv(index, value, li) {\n    var div = document.createElement('div');\n    var input = document.createElement('input');\n    var p = document.createElement('p');\n    div.setAttribute('class', 'bind');\n\n    input.setAttribute('class', 'checkbox');\n    input.setAttribute('type', 'checkbox');\n    input.setAttribute('checked', 'checked');\n    input.addEventListener('change', function () {\n        return changeState(index);\n    });\n\n    p.setAttribute('id', 'p' + index);\n    p.innerHTML = value;\n    p.addEventListener('click', function () {\n        return edit(index);\n    });\n\n    li.appendChild(div);\n    div.appendChild(input);\n    div.appendChild(p);\n    // return div;\n};\n//在li里创建a标签\nvar createEleA = function createEleA(index, li) {\n    var a = document.createElement('a');\n    a.addEventListener('click', function () {\n        return remove(index);\n    });\n    a.innerText = '-';\n    li.appendChild(a);\n    // return a;\n};\n\n//在li里创建input标签\nvar createEleInput = function createEleInput(index, li) {\n    var input_hide = document.createElement('input');\n    input_hide.setAttribute('id', 'input' + index);\n    input_hide.setAttribute('style', 'display:none');\n    li.appendChild(input_hide);\n    // return input_hide;\n};\n////创建一条todo列表的li\nvar getEleLiTodo = exports.getEleLiTodo = function getEleLiTodo(index, value) {\n    var li = document.createElement('li');\n    setTodoEleLi(index, value, li);\n    return li;\n};\n\n//创建一条done列表的li\nvar getEleLiDone = exports.getEleLiDone = function getEleLiDone(index, value) {\n    var li = document.createElement('li');\n    setDoneEleLi(index, value, li);\n    return li;\n};\n\n//计算todo的条数\nvar getTodoCount = function getTodoCount() {\n    return getCount(false);\n};\n\n//计算done的条数\nvar getDoneCount = function getDoneCount() {\n    return getCount(true);\n};\n\n//计数\nvar getCount = function getCount(value) {\n    var data = loadData();\n    return data.filter(function (item) {\n        return item.update === value;\n    }).length;\n};\n\n//加载数据\nvar myload = exports.myload = function myload() {\n    var data = loadData();\n    _const.ul_todo.innerHTML = '';\n    _const.ul_finish.innerHTML = '';\n    data.map(function (item, index) {\n        if (!item.update) {\n            _const.ul_todo.appendChild(getEleLiTodo(index, item.value));\n        } else {\n            _const.ul_finish.appendChild(getEleLiDone(index, item.value));\n        }\n    });\n    _const.todoCount[0].innerText = getTodoCount();\n    _const.finishCount[0].innerText = getDoneCount();\n};\n\n//改变完成状态\nvar changeState = exports.changeState = function changeState(i) {\n    var data = loadData();\n    var newData = data.splice(i, 1);\n    newData[0].update = !newData[0].update;\n    // data = data.concat(newData);\n    data = [].concat(_toConsumableArray(data), _toConsumableArray(newData));\n    saveData(data);\n    myload();\n    // newData[0].update ? animationLi(ul_finish) : animationLi(ul_todo);\n};\n//删除\nvar remove = exports.remove = function remove(i) {\n    var data = loadData();\n    data.splice(i, 1);\n    saveData(data);\n    myload();\n};\n//编辑\nvar edit = exports.edit = function edit(i) {\n    var data = loadData();\n    var _p = document.getElementById(\"p\" + i);\n    var _primValue = _p.innerHTML;\n    var _input = document.getElementById('input' + i);\n    _p.style.display = \"none\";\n    _input.style.display = \"block\";\n    _input.value = _primValue;\n    _input.setSelectionRange(0, _input.value.length);\n    _input.focus();\n    _input.onblur = function () {\n        if (!_input.value) {\n            _p.innerHTML = _primValue;\n            alert('输入不能为空');\n            myload();\n        } else {\n            var newData = data.splice(i, 1)[0];\n            newData.value = _input.value;\n            data.splice(i, 0, newData);\n            saveData(data);\n            myload();\n        }\n    };\n};\n\n//todo全部选中\nvar selectAllTodoFuc = exports.selectAllTodoFuc = function selectAllTodoFuc() {\n    var data = loadData();\n    data.map(function (item) {\n        item.update ? item.update : item.update = !item.update;\n    });\n    saveData(data);\n    myload();\n    selectAllTodo.checked = false;\n};\n\n//全部取消完成\nvar cancelAllFinishFuc = exports.cancelAllFinishFuc = function cancelAllFinishFuc() {\n    var data = loadData();\n    data.map(function () {\n        var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { value: value, update: update };\n        item.update ? item.update = !item.update : item.update;\n    });\n    // data.map((item) => {item.update ? item.update = !item.update : item.update})\n    saveData(data);\n    myload();\n    cancelAllFinish.checked = false;\n};\n\n// const getTodoData = (data) => {\n//     data.filter((item) => {\n//         return item.update === false;\n//     })\n// }\nvar getTodoData = exports.getTodoData = function getTodoData() {\n    return getData(true);\n};\n\nvar getFinishData = exports.getFinishData = function getFinishData() {\n    return getData(false);\n};\nvar getData = function getData(type) {\n    var data = loadData();\n    return data.filter(function (item) {\n        return item.update === type;\n    });\n};\n//todo全部删除\nvar deleteAllTodoFuc = exports.deleteAllTodoFuc = function deleteAllTodoFuc() {\n    console.time('删除todo列表');\n    saveData(getTodoData());\n    myload();\n    deleteAllTodo.checked = false;\n    console.timeEnd('删除todo列表');\n};\n//finish全部删除\nvar deleteAllFinishFuc = exports.deleteAllFinishFuc = function deleteAllFinishFuc() {\n    console.time('删除finish列表');\n    saveData(getFinishData());\n    myload();\n    deleteAllFinish.checked = false;\n    console.timeEnd('删除finish列表');\n};\n\n//交换\n// export const exchange = (text1, text2) => {\n//     let _temp = text1;\n//     text1 = text2;\n//     text2 = _temp;\n// }\n//拖拽功能\nvar ondrapstart = exports.ondrapstart = function ondrapstart(event) {\n    event.preventDefault();\n};\n\nvar text1 = null;\nvar index1 = 0;\nvar drag = exports.drag = function drag(event, text2, index2) {\n    text1 = text2;\n    index1 = index2;\n    event.dataTransfer.setData('Text/html', text1.innerHTML);\n};\n\nvar drop = exports.drop = function drop(event, text2, index2) {\n    var data = loadData();\n    var tempData = '';\n    event.preventDefault();\n    // exchange(data[index1].value, data[index2].value);\n    tempData = data[index1].value;\n    data[index1].value = data[index2].value;\n    data[index2].value = tempData;\n    saveData(data);\n    text1.innerHTML = text2.innerHTML;\n    text2.innerHTML = event.dataTransfer.getData('Text/html');\n};\n\nvar allowDrop = exports.allowDrop = function allowDrop(event) {\n    event.preventDefault();\n};\n\nvar appendMuchElement = exports.appendMuchElement = function appendMuchElement(i) {\n    var len = 9999;\n    var data = loadData();\n    for (var j = i; j <= len + i; j++) {\n        var todo_obj = { \"value\": j, \"update\": false };\n        _const.ul_todo.appendChild(getEleLiTodo(j, j - i));\n        data.push(todo_obj);\n    }\n    saveData(data);\n};\n\n//添加一条\nvar add = exports.add = function add(inputValue) {\n    var data = loadData();\n    var i = data.length - 1;\n    _const.ul_todo.appendChild(getEleLiTodo(i, inputValue));\n    _const.todoCount[0].innerText = getTodoCount();\n};\n\n//添加一万条\nvar addBatch = exports.addBatch = function addBatch() {\n    console.time(\"添加10000Li\");\n    var i = _const.ul_todo.childNodes.length;\n    appendMuchElement(i);\n    _const.todoCount[0].innerText = getTodoCount();\n    console.timeEnd(\"添加10000Li\");\n};\n\n//# sourceURL=webpack:///./src/js/utils/utils.js?");

/***/ }),

/***/ 0:
/*!*******************************************************************************!*\
  !*** multi ./src/js/index ./src/js/const ./src/js/utils/utils ./src/js/event ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/js/index */\"./src/js/index.js\");\n__webpack_require__(/*! ./src/js/const */\"./src/js/const.js\");\n__webpack_require__(/*! ./src/js/utils/utils */\"./src/js/utils/utils.js\");\nmodule.exports = __webpack_require__(/*! ./src/js/event */\"./src/js/event.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/index_./src/js/const_./src/js/utils/utils_./src/js/event?");

/***/ })

/******/ });