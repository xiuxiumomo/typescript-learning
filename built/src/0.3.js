var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
* 类的概念Es5
function Person(name,age){
    this.name = name;
    this.age = age;
    this.getName = function(){

    }
}
Person.prototype.getB = function(){
    return 'aaa'
}


function Web(name,age){
    Person.call(this,name,age); //属性继承和方法
}
Web.prototype  = Person.prototype; //原型链继承
let w = new Web('lee',20);
console.log(w.name)
Es6定义类
class Person{
    name: string; //属性省略public
    constructor(name:string){ //构造函数实例化触发方法
        this.name = name;
    }
    getName():string{
        return this.name;
    }
    setName(name:string):void{
        this.name = name;
    }
}
let p = new Person('lee')
Es6类继承
class Person{
    name: string; //属性省略public
    constructor(name:string){ //构造函数实例化触发方法
        this.name = name;
    }
    getName():string{
        return this.name;
    }
    setName(name:string):void{
        this.name = name;
    }
}

class Web extends Person {
    //extends 原型继承
    constructor(name:string){
        super(name) //属性继承
    }
    work():void{
        console.log(`${this.name}在工作`)
    }
    //方法重写
    getName():string{
        return 'wwww'
    }
}
let w = new Web('wwww');
//类里面的修饰符
public 公开 子类 类外面都可以访问
protected 保护 类子类可以访问，类外部无法访问
private 私有 类里面可以访问 外部和子类均无法访问
类外部的概念
let p = new Person();
p.name //这个就是外部访问
* */
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    return Person;
}());
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    //extends 原型继承
    function Web(name) {
        return _super.call(this, name) || this; //属性继承
    }
    Web.prototype.work = function () {
        console.log(this.name + "\u5728\u5DE5\u4F5C");
    };
    //方法重写
    Web.prototype.getName = function () {
        return 'wwww';
    };
    return Web;
}(Person));
//# sourceMappingURL=0.3.js.map