export default class Key {
  constructor(code, kirKey, engKey, kirilShift, engShift) {
    this.code = code;
    this.kirKey = kirKey;
    this.engKey = engKey;
    this.kirilShift = kirilShift;
    this.engShift = engShift;
  }

  createKey(language) {
    const key = document.createElement('div');
    let extra;

    if (language === 'eng') {
      if (this.engShift) {
        key.innerHTML = this.engKey;
        extra = document.createElement('span');
        extra.innerHTML = this.engShift;
        key.appendChild(extra);
        return key;
      }

        key.innerHTML = this.engKey;
    } else {
      if (this.kirilShift) {
        key.innerHTML = this.kirKey;
        extra = document.createElement('span');
        extra.innerHTML = this.kirilShift;
        key.appendChild(extra);
        return key;
      }
        key.innerHTML = this.kirKey;
    }

    return key;
  }
}
