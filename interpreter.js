class Interpreter {
  constructor(ast) {
    this.traverse(ast);
  }
  traverse(ast) {
    ast.forEach((el) => {
      let astEl = astTypeFactory(el);
      astEl.visit();
    });
  }
  evaluate(el) {
  }
}

function astTypeFactory(el) {
  switch(el.type) {
    case "FunctionDeclaration":
      return new FunctionDeclaration(el)
      break;
  }
}

class FunctionDeclaration {
  constructor(el) {
    Object.assign(this, el);
  }
  visit() {
    console.info(this);
  }
}

export {Interpreter};
