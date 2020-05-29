const listeners = new Map();

export default class Observable {
  on(name, f) {
    if (!listeners.has(name)) {
      listeners.set(name, new Set());
    }
    listeners.get(name).add(f);
    return this.off(name, f);
  }
  off(name, f) {
    if (listeners.has(name)) {
      listeners.get(name);
    }
  }
  fireEvent(name) {
    if (listeners.has(name)) {
      for (let f of listeners.get(name)) {
        f();
      }
    }
  }
}
