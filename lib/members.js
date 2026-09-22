class members {
    constructor(melonly) {
        this.melonly = melonly;
    }
    /**
 * @returns {Promise<Array>}
 */
    async all() {
        const response = await fetch("https://melonly.xyz/api/trpc/servers.getMembers?batch=1&input=" + encodeURIComponent(JSON.stringify({
    0: {
        json: {
            serverId: this.melonly.serverid
        }
    }
})), {
    headers: {
        Cookie: this.melonly.token
    }
});

const data = await response.json();
return data[0].result.data.json.members
}

   
    /**
     * @param {string} id
     * @returns {Promise<Object>}
     */
    async get(id) {
        const string = id.toString()
        const response = await fetch("https://melonly.xyz/api/trpc/users.gets?batch=1&input=" + encodeURIComponent(JSON.stringify({
    0: {
        json: {
            "userIds": [string]
        }
    }
})), {
    headers: {
        Cookie: this.melonly.token
    }
});

const data = await response.json();
return data[0].result.data.json[0]
}

    /**
     * @param {string} id
     * @returns {Promise<boolean>}
     */
    async remove(id) {
        const response = await fetch("https://melonly.xyz/api/trpc/servers.removeMember?batch=1",
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
            memberId: id.toString()
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

module.exports = members