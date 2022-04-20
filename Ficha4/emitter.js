class Emitter {
    constructor() {
        this.events = {};
    }
}

Emitter.prototype.on = function (type, listener) {
    if (this.events[type] == undefined) {
        this.events[type] = [];
        this.events[type].push(listener);
    }
    else {
        this.events[type].push(listener);
    }

}

Emitter.prototype.emit = function (type) {
    if (this.events[type] != undefined) {
        this.events[type].forEach(element => {
            element();
        })
    }
    else {
        this.events[type] = [];
    }
}

module.exports = Emitter;