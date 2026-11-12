const EventEmitter = require("node:events");
const WebSocket = require("./websocket.js");

class Client extends EventEmitter {
    constructor(client) {
        super();

        this._client = client;
        this.websocket = WebSocket(this);
    }
}

module.exports = Client;