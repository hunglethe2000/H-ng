const lab3 = {
  bai1_1() {
    let count = 1+1
    console.log(count);
    return count  
  },
  bai1_2(a:3, b:4){
    let count2 = a+b
    console.log(count2);
    return count2
  },
  bai1_3() {
    let a = ["hello"];
    let b = ["world"];
    a = [...a, ...b];
    console.log(a);
  }
}
export default lab3