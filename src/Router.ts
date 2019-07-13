import Event from "./Event";

interface Route {
  id: string;
  path: string;
  callback: any;
}

export default class Router extends Event {
  routes: {};
  constructor(routes: {}) {
    super();
    this.routes = routes;
    if (routes != null) {
      for (let key of Object.keys(routes)) {
        // this.listen(key, routes[key]);
      }
    }
  }

  start() {
    window.addEventListener("hascange", this.onHashChange.bind(this));
  }

  onHashChange() {
    this.trigger();
  }
}
