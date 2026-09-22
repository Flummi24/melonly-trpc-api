class requests {
    constructor(melonly) {
        this.melonly = melonly;
    }

    /**
 * @returns {Promise<Array>}
 */
    async all() {
        const response = await fetch("https://melonly.xyz/api/trpc/joinRequests.getJoinRequests?batch=1",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Cookie": this.melonly.token
        },
        body: JSON.stringify({
    0: {
        json: {
            serverId: this.melonly.serverid
        }
    }
})
}
);
    const data = await response.json()
    return data[0].result.data.json   
}
/**
 * @param {string} id
 * @returns {Promise<boolean>}
 */
    async deny(id) {
        const response = await fetch("https://melonly.xyz/api/trpc/joinRequests.denyJoinRequest?batch=1",
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
            userId: id.toString()
        }
    }
})
}
);
    if (response.status === 200) {
    return true
} else {
    return false
}
    }


    /**
 * @param {string} id
 * @returns {Promise<boolean>}
 */
    async accept(id) {
        const response = await fetch("https://melonly.xyz/api/trpc/joinRequests.acceptJoinRequest?batch=1",
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
            userId: id.toString()
        }
    }
})
}
);
    if (response.status === 200) {
    return true
} else {
    return false
}
    }
}

module.exports = requests