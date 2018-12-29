/*接口 一种规范
*
* 1.属性接口
*   ts中自定义方法传入参数json进行约束
*   function printLabel(labelInfo:{label:string}):void{

    console.log('bbb')
}
let labelJosn =  {
    label: 'aaa'
}
printLabel(labelJosn)
interface Params {
    firstName: string; //注意以分毫结束
    sec: string;
}
function printLabel(param:Params):void{

    console.log(param.firstName+'你好')
}
printLabel({
    firstName: 'lee',
    sec: 'jack',
    age: 20
})
  2.可选属性接口
*
* */

interface Params {
    firstName: string; //注意以分毫结束
    sec?: string;     //+?
}
function printLabel(param:Params):void{

    console.log(param.firstName+'你好')
}
printLabel({
    firstName: 'lee',
    sec: 'jack'

})
