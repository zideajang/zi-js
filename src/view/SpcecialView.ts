import BaseView from "./BaseView";
import UserModel from "../model/UserModel";
export default class SpecialView extends BaseView {
  constructor(model: UserModel) {
    super();
    this.model = model;
  }
}
