/*
* 函数
* 参数和返回值必须申明类型
* */
//没有返回值
function getA():void{

}
//返回值为string
function getName():string {
    return 'aaa';
}
//参数指定类型
function getInfo(name:string,age:number):string{
    return 'bbb'
}
//参数可传可不传可选参数一定是放在后面
function getB(name:string,age?:number):string{
    if(age){
        return '1'
    }else{
        return '2'
    }
}
//设置默认参数
function getC(name:string,age:number=20):string{
    if(age){
        return '1'
    }else{
        return '2'
    }
}
//剩余参数把实参传给函数的参数数组
function getD(...res:number[]):number{
    let sum = 0;
    for(let i=0;i<res.length;i++){
        sum+=res[i];
    }
    return sum
}

//函数重载Es5同名函数下面的会覆盖上面的
function getE(name:string):string;
function getF(age:number):number;
function getG(str:any):any{
    if(typeof str==='string'){
        return '返回了GetE'
    }else{
        return '返回了GetF'
    }
}
console.log(getG('lee'))
//箭头函数

