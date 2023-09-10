const fullName = "Priyamvad Acharya";
const fNameRegex = /vad/;

const result = fNameRegex.test(fullName);
console.log(result);

const data = fullName.match(fNameRegex);
console.log(data);