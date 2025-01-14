console.log("math");

function quadraticFormula(a, b, c) {
  let positiveOperand = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
  let negativeOperand = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
  return [negativeOperand, positiveOperand];
}

console.log(quadraticFormula(1, 2, 1));

module.exports = {
  quadraticFormula,
};
