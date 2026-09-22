const members = require("./lib/members.js")
const logs = require("./lib/logs.js")
const shifts = require("./lib/shifts.js")
const requests = require("./lib/requests.js")

class melonly {
    constructor({ serverid, token }) {
        this.serverid = serverid;
        this.token = token;

        this.logs = new logs(this)
        this.server = new server(this)
        this.shifts = new shifts(this)
    }
}

class server {
    constructor(melonly) {
        this.melonly = melonly;
        this.members = new members(this.melonly)
        this.requests = new requests(this.melonly)
    }
}

module.exports = melonly