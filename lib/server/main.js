const requests = require("./requests.js")
const audit = require("./audit.js")
const loa = require("./loa.js")
const members = require("./members.js")

class server {
    constructor(melonly) {
        this.melonly = melonly;
        this.members = new members(this.melonly)
        this.requests = new requests(this.melonly)
        this.audit = new audit(this.melonly)
        this.loa = new loa(this.melonly)
    }
}

module.exports = server