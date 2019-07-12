
import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div>
        {/* <Link to="/order">order</Link>   */}
        <h3>Login</h3>
      </div>
    );
  }
}
// const p1 = new Promise((resolve) => {
//   console.log(3)
//   resolve(4)
// })
// const p2 = new Promise((resolve) => {
//   console.log(1)
//   resolve(p1)
// })
// p1.then((res) => {
//   console.log(res)
// })
// p2.then((res) => {
//   console.log(res)
// })
// console.log(5)
// //3,1,5,4,4
// function Observe(data ){
//   this.data = data;
//   this.walk(data)
// }
// Object.assign(Observe.prototype,{
//   walk(data){
//     Object.keys(data).forEach((k,v)=>{
//       this.defineReactive(data,k,data[k])
//     })
//   },
//   defineReactive(data,key,val){
//     let dep = new Dep()
//     Object.defineProperty(data,key,{
//       enumerable:true,
//       configurable:false,
//       get(){
//         if(Dep.target){
//           dep.depend()
//         }
//         return val
//       },
//       set(newVal){
//         if(newVal === val){
//           return
//         }
//         val = newVal 
//         let childObject = observer(newVal)
//         dep.notify()
//       }
//     })
//   }
// })

// var id = 1
// function Dep(){
//   this.id = id++
//   this.subs = []
// }
// Object.assign(Dep.prototype,{
//   addSub(sub){
//     this.subs.push(sub)
//   },
//   depend(){
//     Dep.target.addDep(this)
//   },
//   notify(){
//     this.subs.forEach(function(sub) {
//         sub.update();
//     });
//   }
// })

// function Watch(vm,exp,cb){
//   this.vm = vm;
//   this.exp = exp;
//   this.cb = cb;
//   this.depIds = {}
//   this.val = this.get()
// }
// Object.assign(Watch.prototype,{
//   update(){
//     this.run()
//   },
//   addDep(dep){
//     if (!this.depIds.hasOwnProperty(dep.id)) {
//         dep.addSub(this);
//         this.depIds[dep.id] = dep;
//     }
//   },
//   run(){
//     var value = this.get(); // 取到最新值
//     var oldVal = this.value;
//     if (value !== oldVal) {
//         this.value = value;
//         this.cb.call(this.vm, value, oldVal); // 执行Compile中绑定的回调，更新视图
//     }
//   },
//   get(){
//     Dep.target = this;
//     let value = this.vm[exp]
//     Dep.target = null;
//     return value
//   }
// })

// function observer(value){
//   if(!value || typeof value !== 'object') return 
//   return new Observer(value)
// }



export default Login