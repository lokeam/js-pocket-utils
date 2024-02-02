function Emitter() {
  this.events = {};
}

// Add listener
Emitter.prototype.on = function(type, listener) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
}

// Say that an event happened
Emitter.prototype.emit = function(type) {
  // this particular prop exists
  if (this.events[type]) {
    // traverse the array of functions and execute each one
    this.events[type].forEach(function(listener) {
      listener();
    });
  }
}

module.exports = Emitter;
