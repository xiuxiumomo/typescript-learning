/*
* 函数
* 参数和返回值必须申明类型
* */
//没有返回值
function getA() {
}
//返回值为string
function getName() {
    return 'aaa';
}
//参数指定类型
function getInfo(name, age) {
    return 'bbb';
}
//参数可传可不传可选参数一定是放在后面
function getB(name, age) {
    if (age) {
        return '1';
    }
    else {
        return '2';
    }
}
//设置默认参数
function getC(name, age) {
    if (age === void 0) { age = 20; }
    if (age) {
        return '1';
    }
    else {
        return '2';
    }
}
//剩余参数把实参传给函数的参数数组
function getD() {
    var res = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        res[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < res.length; i++) {
        sum += res[i];
    }
    return sum;
}
function getG(str) {
    if (typeof str === 'string') {
        return '返回了GetE';
    }
    else {
        return '返回了GetF';
    }
}
console.log(getG('lee'));
//箭头函数
//# sourceMappingURL=0.2.js.map