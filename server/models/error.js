const Dictionary = {
  100: "Empty Error",
  101: "MongoDB error",
  102: "102",
  103: "103",
  104: "104",
  200: "Get users failed",

}


class Error {
  constructor() {
    this.code = 100;
    this.description = this.getErrorDescriptionByCode(this.code);
  }

  setError(code) {
    this.code = code;
    this.description = this.getErrorDescriptionByCode(code);
  }

  getErrorDescriptionByCode (code) {
    return Dictionary[code];
  }
}

module.exports = new Error();
