module.exports = (ws, client) => {
    ws.on("message", (message) => {
        const msg = message.toString();

        if (!msg.startsWith("42")) return;

        let parsed;
        try {
            parsed = JSON.parse(msg.slice(2));
        } catch (err) {
            console.error("[Melonly TRPC Api] Invalid WebSocket message:", err);
            return;
        }

        const [event, data] = parsed;

        if (event === "log_create") {
            client.emit("logCreate", data.log);
        }

        if (event === "log_edit") {
            client.emit("logEdit", data.log);
        }

        if (event === "log_delete") {
            client.emit("logDelete", data);
        }

        if (event === "member_status_update") {
            client.emit("memberShiftUpdate", data);
        }

        if (event === "bulk_member_statuses") {
            client.emit("bulkMemberStatuses", data);
        }
    });
};