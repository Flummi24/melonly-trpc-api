const { check } = require("./utils.js")

class users {
    constructor(melonly) {
        this.melonly = melonly;
    }

    async get(userid) {
        const response = await fetch("https://melonly.com/api/trpc/users.gets?batch=1&input=" + encodeURIComponent(JSON.stringify({
        json: {
            userIds: [userid]
        }
})), {
    headers: {
        Cookie: this.melonly.token
    }
});

        const data = await response.json()
        const error = await check(data)
        if (error) {
            throw new Error(error)
        }
        return data.result.data.json[0];
    }
}

module.exports = users