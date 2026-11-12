const { check } = require("../utils.js")

class loa {
    constructor(melonly) {
        this.melonly = melonly;
    }

    /**
     * 
     * @param {string} id 
     * @returns {Promise<object>}
     */
    async approve(id) {
        const response = await fetch("https://melonly.com/api/trpc/loas.approveLoa?batch=1",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Cookie": this.melonly.token
        },
        body: JSON.stringify({
    0: {
        json: {
            serverId: this.melonly.serverid,
            loaId: String(id)
        }
    }
})
}
);

        const data = await response.json()
        const error = await check(data)
        if (error) {
            throw new Error(error)
        }
        return data[0].result.data.json
    }

    /**
     * 
     * @param {string} id 
     * @param {string} reason 
     * @returns {Promise<Object>}
     */
    async deny (id, reason = "Unkown") {
        const response = await fetch("https://melonly.com/api/trpc/loas.denyLoa?batch=1",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Cookie": this.melonly.token
        },
        body: JSON.stringify({
    0: {
        json: {
            serverId: this.melonly.serverid,
            loaId: String(id),
            reason: String(reason)
        }
    }
})
}
);

        const data = await response.json()
        const error = await check(data)
        if (error) {
            throw new Error(error)
        }
        return data[0].result.data.json
    }

    /**
     * 
     * @param {string} id 
     * @returns {Promise<object>}
     */
    async end(id) {
        const response = await fetch("https://melonly.com/api/trpc/loas.forceEndLoa?batch=1",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Cookie": this.melonly.token
        },
        body: JSON.stringify({
    0: {
        json: {
            serverId: this.melonly.serverid,
            id: String(id)
        }
    }
})
}
);

        const data = await response.json()
        const error = await check(data)
        if (error) {
            throw new Error(error)
        }
        return data[0].result.data.json
    }

    /**
     * 
     * @param {string} id 
     * @param {number} limit 
     * @returns {Promise<Object>}
     */
    async history(id, limit = 20) {
        const response = await fetch("https://melonly.com/api/trpc/loas.getLoasHistory?batch=1&input=" + encodeURIComponent(JSON.stringify({
    0: {
        json: {
            serverId: this.melonly.serverid,
            offset: 0,
            limit: Number(limit),
            userId: String(id)
        }
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
        return data[0].result.data.json
    }
}

module.exports = loa