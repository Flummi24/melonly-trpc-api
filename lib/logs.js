class logs {
    constructor(melonly) {
        this.melonly = melonly;
    }

    /**
 * @param {string} username
 * @returns {Promise<Array>}
 */
    async get(username) {
        const response = await fetch("https://melonly.xyz/api/trpc/panel.getLogs?batch=1&input=" + encodeURIComponent(JSON.stringify({
    0: {
        json: {
            serverId: this.melonly.serverid,
            username: username
        }
    }
})), {
    headers: {
        Cookie: this.melonly.token
    }
});

const data = await response.json();
return data[0].result.data.json.logs;
}

/**
 * @param {string} id
 * @returns {Promise<boolean>}
 */
async delete(id) {
        const response = await fetch("https://melonly.xyz/api/trpc/logs.deleteLog?batch=1",
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
            logId: id
        }
    }
})
}
);

const data = await response.json();

if (!data?.[0]?.result?.data?.json?.ok) {
    return false;
}

if (data[0].result.data.json.ok === 1) {
    return true
} else {
    return false
}
}


/**
 * @param {string} username
 * @param {string} reason
 * @param {int} type
 * @returns {Promise<boolean>}
 */
async create(username, reason, type) {
    const response = await fetch("https://melonly.xyz/api/trpc/logs.createLog?batch=1",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Cookie": this.melonly.token
        },
        body: JSON.stringify({
  "0": {
    "json": {
      "serverId": this.melonly.serverid,
      "type": Number(type),
      "typeId": null,
      "text": reason,
      "description": "",
      "proof": [],
      "resetPunishmentsCount": false,
      "slateDescription": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": ""
            }
          ]
        }
      ],
      "slateText": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": reason
            }
          ]
        }
      ],
      "tempBan": null,
      "timestamp": Date.now(),
      "unbanAt": null,
      "username": username
    },
    "meta": {
      "values": {
        "tempBan": [
          "undefined"
        ],
        "unbanAt": [
          "undefined"
        ]
      },
      "v": 1
    }
  }
}
)
}
);

if (response.status === 200) {
    return true
} else {
    return false
}

}
}

module.exports = logs