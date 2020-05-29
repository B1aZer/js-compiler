import Observable from './utils/observable.js';

export default class BindEvents extends Observable {

  constructor() {
    super();
    this.on('ready', () => {
      this.bindEvents();
    });
  }

  bindEvents() {
    const input = document.getElementById('input');
    const output = document.getElementById('output');

    input.addEventListener('keyup', (e) => {
        //const body = parse(e.target.value).body;
        //res(new Interpreter(body));
        this.webEval(e.target.value)
      .then((body) => {
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

  webEval(code) {
    var response = "self.onmessage=function(e){postMessage(eval(e.data));}";
    let blob = new Blob([response], { type: 'application/javascript' });
    let worker = new Worker(URL.createObjectURL(blob))
    worker.postMessage(code);
    return new Promise((res, rej) => {
      worker.onmessage = function (e) {
        console.info(e);
        res(e.data);
        worker.terminate();
      };
    });
  }

}
