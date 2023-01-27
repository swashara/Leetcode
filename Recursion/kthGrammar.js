var kthGrammar = function (n, k) {
  return (k - 1).toString(2).replace(/0/g, "").length & 1;
};

let ans = kthGrammar(1, 1);
console.log(ans);
