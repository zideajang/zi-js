import Event from "../Event";

export default class TutModel extends Event {
  private _enabled: boolean = false;
  constructor(enabled: boolean) {
    super();
  }
  set enabled(enabled: boolean) {
    this.enabled = enabled;
    this.trigger();
  }
  get enabled(): boolean {
    return this._enabled;
  }
}
