
const WebSocket = require("ws");
const message = require("./message.js");
const error = require("./error.js");

module.exports = (client) => {
    const ws = new WebSocket(
        "wss://ws.melonly.com/socket.io/?EIO=4&transport=websocket",
        {
            headers: {
                Cookie: client._client.token,
                Origin: "https://melonly.com"
            }
        }
    );

    let connected = false;

    const serverId = client._client.serverid;

    ws.on("open", () => {
        // WebSocket geöffnet
    });

    // Message-Handler aus message.js registrieren
    message(ws, client);
    error(ws, client);

    ws.on("message", (event) => {
        const msg = event.toString();

        if (msg.startsWith("0")) {
            JSON.parse(msg.slice(1));
            ws.send("40");
        }

        else if (msg.startsWith("40")) {
            const data = JSON.parse(msg.slice(2));

            connected = true;
            client.emit("ready");

            ws.send("42" + JSON.stringify(["server", serverId]));
        }

        else if (msg === "2") {
            ws.send("3");
        }
    });

    ws.on("close", () => {
        connected = false;
        client.emit("disconnect");
    });

    ws.on("error", (error) => {
        client.emit("error", error);
    });

    return ws;
};
