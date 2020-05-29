import Observable from './utils/observable.js';
import BindEvents from './bind-events.js';

class App extends Observable {

  init() {
    new BindEvents();
    this.fireEvent('ready');
  }

}
window.App = new App();
