import UserModel from "../model/UserModel";
export default class BaseView {
  element: HTMLElement;
  model: any;
  context: any;
  constructor(elememnt: HTMLElement, model: any, context: any) {
    this.element = elememnt;
    this.model = model;
    this.context = context;
  }
}
