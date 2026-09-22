async function all(server, token) {
        const response = await fetch("https://melonly.xyz/api/trpc/servers.getMembers?batch=1&input=" + encodeURIComponent(JSON.stringify({
    0: {
        json: {
            serverId: server
        }
    }
})), {
    headers: {
        Cookie: token
    }
});

const data = await response.json();
return data[0].result.data.json.members
}

class active {
    constructor(melonly) {
        this.melonly = melonly;
    }

    /**
 * @returns {Promise<Object>}
 */
    async all() {
        const result = {}
        const user = await all(this.melonly.serverid, this.melonly.token)

        for (const member of user) {
            const response = await fetch("https://melonly.xyz/api/trpc/shifts.getMemberActiveShift?batch=1&input=" + encodeURIComponent(JSON.stringify({
    0: {
        json: {
            serverId: this.melonly.serverid,
            memberId: member.id
        }
    }
})), {
    headers: {
        Cookie: this.melonly.token
    }
});

const data = await response.json()

if (!data[0].result.data.json) continue

result[member.id] = data[0].result.data.json

        }

    return result
    }

    /**
     * @param {string} id
 * @returns {Promise<Array>}
 */
    async get(id) {
        const response = await fetch("https://melonly.xyz/api/trpc/shifts.getMemberActiveShift?batch=1&input=" + encodeURIComponent(JSON.stringify({
    0: {
        json: {
            serverId: this.melonly.serverid,
            memberId: id.toString()
        }
    }
})), {
    headers: {
        Cookie: this.melonly.token
    }
});

const data = await response.json()

return data[0].result.data.json

    }
}

module.exports = active