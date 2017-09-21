class Message {

  constructor() {
    this.success = false;
    this.payload = new Object();
    this.activity = "";
    this.errors = [];
  }

  setMessage(success, activity, payload, errors) {
    this.success = success;
    this.payload = payload;
    this.activity = activity;
    this.errors = errors;
  }
}

module.exports = new Message();
