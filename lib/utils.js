const path = require("path");
const fs = require("fs");

async function check(data) {
    if (data[0]?.error?.json !== undefined) {
    const error = data[0]?.error?.json
    return `[Melonly TRPC Api] Error: ${error.data.code} Status: ${error.data.httpStatus}\n Message: "${error.message}"\n Error Code: ${error.code}`
    } else {
        return false
    }
}

function neuer(remote, local) {
    const r = remote.split(".").map(Number);
    const l = local.split(".").map(Number);

    const length = Math.max(r.length, l.length);

    for (let i = 0; i < length; i++) {
        const rv = r[i] || 0;
        const lv = l[i] || 0;

        if (rv > lv) return true;
        if (rv < lv) return false;
    }

    return false;
}


async function update() {
    const remote_fetch = await fetch("https://raw.githubusercontent.com/Flummi24/melonly-trpc-api/refs/heads/main/package.json")
    const local_fetch = path.join(__dirname, "../package.json");

    const remote_json = await remote_fetch.json()
    const local_json = JSON.parse(fs.readFileSync(local_fetch, "utf8"));

    if (neuer(remote_json.version, local_json.version)) {
        return `[Melonly TRPC Api] Update Available: ${remote_json.version}`
    } else {
        return false
    }
}

module.exports = {
    'check': check,
    'update': update
}