const num1 = [1,2,3];
const num2 = [4,5,6];
let num = [];

// copy num1 and num2 array into num array
// Solution1
for(let i=0;i < num1.length;i++){
    num.push(num1[i]);
}

for(let i=0;i < num2.length;i++){
    num.push(num2[i]);
}

// Solution2
num = [...num1,...num2]
console.log(num);

// rest operator

function rest(...params){
    console.log(params);
}

rest(1,2,3,4,5,6,7,8,9,10,"hii");