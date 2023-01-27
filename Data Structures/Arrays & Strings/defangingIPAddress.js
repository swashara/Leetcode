/**
 * @param {string} address
 * @return {string}
 */
// var defangIPaddr = function (address) {
//   address = address.replace(/\./g, "[.]");
//   return address;
// };

var defangIPaddr = function (address) {
  let resAddress = "";
  let inputAddress = address.split("");
  console.log(inputAddress);
  for (let i = 0; i < inputAddress.length; i++) {
    if (inputAddress[i] === ".") {
      resAddress += "[.]";
    } else {
      resAddress = resAddress + inputAddress[i];
    }
  }
  return resAddress;
};

let addr = "1.1.1.1";
let res = defangIPaddr(addr);
console.log(res);
