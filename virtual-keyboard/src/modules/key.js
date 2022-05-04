export default class Keybutton {
  constructor(value) {
    this.value = value;
  }

  getKey() {
    const key = document.createElement('span');
    key.dataset = this.value;
  }
}
