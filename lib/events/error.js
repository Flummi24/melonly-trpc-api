module.exports = (ws, client) => {
    ws.on("message", (message) => {
        const msg = message.toString();

        if (!msg.startsWith("44")) return;

        try {
            const data = JSON.parse(msg.slice(2));

            console.log("[Melonly TRPC Api] Error: Socket.IO Error!", data);
        } catch (err) {
            console.error(err);
        }
    });
};