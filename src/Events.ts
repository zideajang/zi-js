export default class Events {
  listeners: object;
  constructor() {
    this.listeners = {};
  }

  trigger(name: string, data: any) {
    if (!(name in this.listeners)) {
      return;
    }

    var error = false,
      mapped;
    mapped = this.listeners[name].map(callback);
  }
}
