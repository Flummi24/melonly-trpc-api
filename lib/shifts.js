const active = require("./active.js")

class shifts {
    constructor(melonly) {
        this.melonly = melonly;
        this.active = new active(this.melonly)
    }

    /**
 * @returns {Promise<boolean>}
 */
    async end(id) {
        const response = await fetch("https://melonly.xyz/api/trpc/shifts.endMemberShift?batch=1",
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


    /**
     * @param {int} wave
 * @returns {Promise<Array>}
 */
    async leaderboard(wave) {
        const response = await fetch("https://melonly.xyz/api/trpc/activityWaves.getActivityList?batch=1&input=" + encodeURIComponent(JSON.stringify({
    0: {
        json: {
            serverId: this.melonly.serverid,
            waveNum: wave
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

    /**
     * @param {string} id
     * @param {int} wave
 * @returns {Promise<Array>}
 */
    async get(id, wave) {
        const response = await fetch("https://melonly.xyz/api/trpc/shifts.getMemberShifts?batch=1&input=" + encodeURIComponent(JSON.stringify({
    0: {
        json: {
            serverId: this.melonly.serverid,
            memberId: id.toString(),
            waveNum: wave
        }
    }
})), {
    headers: {
        Cookie: this.melonly.token
    }
});

const data = await response.json()
return data[0].result.data.json.shifts
    }
}

module.exports = shifts