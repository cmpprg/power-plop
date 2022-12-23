export default (leftOperand, operator, rightOperand) => {
  const operatorToComparison = {
    "===": leftOperand === rightOperand,
    "==": leftOperand == rightOperand,
    "!==": leftOperand !== rightOperand,
    "!=": leftOperand != rightOperand,
    ">": leftOperand > rightOperand,
    "<": leftOperand < rightOperand,
    ">=": leftOperand >= rightOperand,
    "<=": leftOperand <= rightOperand,
    "<": leftOperand < rightOperand,
    "||": leftOperand || rightOperand,
    "&&": leftOperand && rightOperand,
    "or": leftOperand || rightOperand,
    "and": leftOperand && rightOperand,
  };

  return operatorToComparison[operator];
};
