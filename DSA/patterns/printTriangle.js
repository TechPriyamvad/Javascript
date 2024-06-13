// function print_triangle(3, 5) will print this:
    //  ***
    //  ****
    //  *****
    //  *****
    //  ****
    //  ***

// param1: numbers of stars we need to print in first row 
// param2: how many rows,number of stars to print in middle row


function print_triangle1(param1, param2) {
    // Print the increasing part
    for (let i = param1; i <= param2; i++) {
      console.log('*'.repeat(i));
    }
  
    // Print the decreasing part
    for (let i = param2; i >= param1; i--) {
      console.log('*'.repeat(i));
    }
  }
  
  function print_triangle2(param1,param2){
    // print the increasing part
    for(let i=param1;i <= param2;i++){
      for(j=1;j <=i;j++){
        process.stdout.write("*");
      }
      console.log();
    }
    
    // print the decreasing part
    for(let i=param2;i >= param1;i--){
      for(let j=1;j <=i ;j++){
        process.stdout.write("*");
      }
      console.log();
    }
  }
  // Example usage
  print_triangle1(3, 5);
//   2470294
// 9414514518