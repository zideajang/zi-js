export default class Renderer {
  renderer: Renderer;
  constructor(renderer: Renderer) {
    this.renderer = renderer;
  }

  render() {
    const self = this;
    return this.renderer ? this.renderer(self) : "";
  }
}
