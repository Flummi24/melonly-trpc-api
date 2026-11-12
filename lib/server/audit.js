const { check } = require("../utils.js")

class audit {
    constructor(melonly) {
        this.melonly = melonly;
        this.search = new search(melonly)
    }

    /**
     * 
     * @returns {Promise<Array>}
     */
    async latest() {
        const response = await fetch("https://melonly.com/api/trpc/auditLogs.get?batch=1&input=" + encodeURIComponent(JSON.stringify({
     "0":{"json":{"serverId": this.melonly.serverid,"after":null,"type":null,"userId":null,"search":null},"meta":{"values":{"after":["undefined"]},"v":1}}
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

class search {
    constructor(melonly) {
        this.melonly = melonly;
    }
    
    /**
     * 
     * @param {string} id 
     * @returns {Promise<Array>}
     */
    async user(id) {
        const response = await fetch("https://melonly.com/api/trpc/auditLogs.get?batch=1&input=" + encodeURIComponent(JSON.stringify({
     0: {
    json: {
      serverId: this.melonly.serverid,
      after: null,
      type: null,
      userId: String(id),
      search: null
    },
    meta: {
      values: {
        after: [
          "undefined"
        ]
      },
      v: 1
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

    /**
     * 
     * @param {number} type 
     * @returns {Promise<Array>}
     */
    async type(type) {
        const response = await fetch("https://melonly.com/api/trpc/auditLogs.get?batch=1&input=" + encodeURIComponent(JSON.stringify({
     0: {
    json: {
      serverId: this.melonly.serverid,
      after: null,
      type: Number(type),
      userId: null,
      search: null
    },
    meta: {
      values: {
        after: [
          "undefined"
        ]
      },
      v: 1
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

module.exports = audit