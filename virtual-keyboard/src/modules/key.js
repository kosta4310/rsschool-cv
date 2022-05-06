export default class Key {
  constructor(code, kirKey, engKey) {
    this.code = code;
    this.kirKey = kirKey;
    this.engKey = engKey;
  }

  createKey(language) {
    const key = document.createElement('span');
    key.innerHTML = language === 'eng' ? this.engKey : this.kirKey;

    return key;
  }
}
