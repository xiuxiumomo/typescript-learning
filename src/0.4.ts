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

class Animal{
    name: string;

    constructor(name:string) {
        this.name = name;
    }
    eat(){
        //不写，只是定义
    }

}
class Dog extends Animal{
    constructor(name:string){
        super(name)
    }
    eat(){
        return this.name+'狗吃东西';
    }
}
class Cat extends Animal{
    constructor(name:string) {
        super(name);
    }
    eat(){
        return this.name+'猫吃东西2';
    }

}
let c = new Cat('ccc');
console.log(c.eat())


