/*
数据类型
1.String
2.Boolean
3.Number
4.array
5.tuple
6.enum
7.any
8.null和undefined
9.void

*/
//string number boolean
var str = 'hello';
//array
var arr = [1231, 23];
var arr2 = [1, 22];
var arr4 = [1, 3, 'a'];
//tuple 属于数组的一种 可以是混合的 为每一个位置指定类型
var arr3 = [123, 'asd'];
/*
* 枚举类型 enum
* enum Name{
*   标识符 = 常量
* }
* 如果标识符没有赋值默认0,1,2,3
* 如果自定义赋值后面的每一项自动+1
* */
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 3] = "error";
    Flag[Flag["none"] = 4] = "none";
})(Flag || (Flag = {}));
var s = Flag.none;
/*
* any类型
* 任意类型的用处 本来Obox是一个对象但是没有Object
* let oBox:any = document.getElementById('box');
oBox.style.color = 'red';
*
* */
var num = 111;
/*
* null undefined 属于其他类型（never）
* */
var num2;
/*
* void 方法没有任何返回值
* */
function run() {
    console.log('aa');
}
function run2() {
}
function run3() {
    return 123;
}
//# sourceMappingURL=0.1.js.map