import {parse} from './node_modules/acorn/dist/acorn.mjs';
import {Interpreter} from './interpreter.js';

document.addEventListener('DOMContentLoaded', init);

function init() {
  const input = document.getElementById('input');
  const output = document.getElementById('output');
  input.addEventListener('change', (e) => {
    const body = parse(e.target.value).body;
    new Interpreter(body);
    output.textContent = body;
  });
}
