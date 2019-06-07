
console.log("hello");

function* fibs() {
    let a = 0;
    let b = 1;
    while (true) {
      yield a;
      [a, b] = [b, a + b];
    }
  }

let fib = fibs();
console.log(fib.next().value);
console.log(fib.next().value);
let [first, second, third, fourth, fifth, sixth] = fib;
console.log(fib.next().done);

console.log(sixth);

function* idMaker(){
    var index = 0;
    while(index<3)
      yield index++;
    
    console.log("aaaa")
    return 10
  }
  
  var gen = idMaker();
  console.log(gen.next().value); // 0
  console.log(gen.next().value); // 1
  console.log(gen.next().value); // 2
  console.log(gen.next().value); // undefined


// module.exports = (function(){
//     console.log("aaa");
// })()


