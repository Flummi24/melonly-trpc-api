const logs = require("./lib/logs.js");
const shifts = require("./lib/shifts/main.js");
const server = require("./lib/server/main.js");
const users = require("./lib/users.js");
const EventEmitter = require("./lib/events/main.js");

class melonly {
    constructor({ serverid, token, hint = true }) {
        this.serverid = serverid;
        this.token = token;

        this.events = new EventEmitter(this);

        this.logs = new logs(this);
        this.server = new server(this);
        this.shifts = new shifts(this);
        this.users = new users(this);

        if (hint) {
            console.log("[\x1b[31mMelonly TRPC API\x1b[0m] Hint: Have you seen the new Functions of the V2 Update? Check them out at https://www.npmjs.com/package/melonly-trpc-api\n[\x1b[31mMelonly TRPC API\x1b[0m] To Disable this hint, set hint: false in new Melonly({ serverid, token, hint: false })\n[\x1b[31mMelonly TRPC API\x1b[0m] If you encounter any issues, feel free to contact me on Discord: @flummi_24");
        }
    }
}

module.exports = melonly;