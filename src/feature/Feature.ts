import IRenderable from "../IRenderable";

class Header implements IRenderable {
  render(): string {
    return "render header";
  }
}

export default class Feature {
  header: IRenderable;
  content: IRenderable;
  footer: IRenderable;
  constructor(header: IRenderable, content: IRenderable, footer: IRenderable) {
    this.header = header;
    this.content = content;
    this.footer = footer;
  }

  render() {
    let headerHtmlStr = this.header.render();
    let contentHtmlStr = this.content.render();
    let footerHtmlStr = this.footer.render();
  }
}
