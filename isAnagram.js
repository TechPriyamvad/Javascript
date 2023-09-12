function isAnagram(str1, str2) {
  let str1Obj = {};
  let str2Obj = {};
  if (str1.length != str2.length) {
    console.log('string length mismatch');
    return false;
  }
  for (let i = 0; i < str1.length; i++) {
    let ch1 = str1[i];
    // console.log(ch1);
    // console.log(str1Obj.hasOwnProperty(str1[i]))
    if (str1Obj.hasOwnProperty(ch1)) {
      str1Obj[ch1] = str1Obj[ch1] + 1;
    } else {
      str1Obj[ch1] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    let ch2 = str2[i];
    if (str2Obj.hasOwnProperty(ch2)) {
      str2Obj[ch2] = str2Obj[ch2] + 1;
    } else {
      str2Obj[ch2] = 1;
    }
  }
  // console.log(str1Obj,"\n",str2Obj)
  // console.log(str1Obj.size);

  // console.log(Object.keys(str1Obj));
  for (const ch in str1Obj) {
    if (str1Obj[ch] != str2Obj[ch]) {
      console.log("string letters doesn't match");
      return false;
    }
  }
  return true;
}

console.log(isAnagram('aace', 'acae'));
