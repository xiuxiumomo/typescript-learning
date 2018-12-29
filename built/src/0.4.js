/*
* 静态属性方法
* function Person(name){
*   this.name = name
* }
    let p = new Person();
    p.name 这个是shillings属性，实例属性一定是先new 出对象来
    Person.name = 'lee'; 这个是静态属性

    class Preson{
        public name:string;
        static name2:string = 'aaa';
        constructor(name:string){
            this.name = name;
        }
        getName():string{
            return this.name
        }
        //静态方法 无法直接访问类属性
        static getB(){
            console.log('xxxx'+this.name2)

        }
    }
    Preson.getB();
    类的多态
* */
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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        //不写，只是定义
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        return this.name + '狗吃东西';
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.eat = function () {
        return this.name + '猫吃东西';
    };
    return Cat;
}(Animal));
//# sourceMappingURL=0.4.js.map