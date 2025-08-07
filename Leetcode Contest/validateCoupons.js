/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function (code, businessLine, isActive) {
  let ans = [];
  let eBusiness = [];
  let gBusiness = [];
  let pBusiness = [];
  let rBusiness = [];
  for (let i = 0; i < code.length; i++) {
    let codeCheck = false,
      businessCheck = false,
      isActiveCheck = false;
    if (/^[a-zA-Z0-9_]+$/.test(code[i])) {
      codeCheck = true;
    }
    let allowedBusinesses = [
      "electronics",
      "grocery",
      "pharmacy",
      "restaurant",
    ];
    businessCheck = allowedBusinesses.includes(businessLine[i]);
    isActiveCheck = isActive[i];
    if (codeCheck && businessCheck && isActiveCheck) {
      if (businessLine[i] === "electronics") {
        eBusiness.push(code[i]);
      } else if (businessLine[i] === "grocery") {
        gBusiness.push(code[i]);
      } else if (businessLine[i] === "pharmacy") {
        pBusiness.push(code[i]);
      } else if (businessLine[i] === "restaurant") {
        rBusiness.push(code[i]);
      }
    }
  }
  eBusiness.sort((a, b) => a - b);
  gBusiness.sort((a, b) => a - b);
  pBusiness.sort((a, b) => a - b);
  rBusiness.sort((a, b) => a - b);
  ans = [eBusiness, gBusiness, pBusiness, rBusiness].flat();
  return ans;
};

const answer = validateCoupons(
  ["GROCERY15", "ELECTRONICS_50", "DISCOUNT10"],
  (businessLine = ["grocery", "electronics", "grocery"]),
  (isActive = [true, true, true])
);
console.log(answer);
