import {parse} from './node_modules/acorn/dist/acorn.mjs';
import {Interpreter} from './interpreter.js';

document.addEventListener('DOMContentLoaded', init);

function init() {
  const input = document.getElementById('input');
  const output = document.getElementById('output');
  input.addEventListener('keyup', (e) => {
    new Promise((res, rej) => {
      //const body = parse(e.target.value).body;
      //res(new Interpreter(body));
      res(eval(e.target.value));
    }).then((body) => {
      output.textContent = body;
    }).catch((e) => {
      output.textContent = e;
    });
  });

window.addEventListener('unhandledrejection', function(event) {
  // prevent Default debug logging
  event.preventDefault();
  console.warn(event.promise); // [object Promise] - the promise that generated the error
  console.warn(event.reason); // Error: Whoops! - the unhandled error object
});
}
