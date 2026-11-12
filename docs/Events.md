# Events

Firstly all events arrive on **melonly.events.on()**. Some Events, like **ready** and **disconnect** to NOT Return Data!

All Available Events are:

- ready

- disconnect

- error

- logCreate

- logEdit

- logDelete

- memberShiftUpdate

- bulkMemberStatuses

An Example is on the End of This Document!

```js
(async () => {
    const melonly = new Melonly({
        serverid: "7412495179740876800",
        token: process.env.TOKEN
    });

    // Events
    melonly.events.on("ready", () => {
        console.log("WebSocket connected!");
    });

    melonly.events.on("disconnect", () => {
        console.log("WebSocket disconnected!");
    });

    melonly.events.on("bulkMemberStatuses", (members) => {
        console.log("Initial member statuses:", members);
    });

})();
```

## Ready and Bulk Member Statuses

The ready event is emitted once the WebSocket connection has been successfully established and is ready to use.

Shortly after the connection is established, Melonly also sends a bulkMemberStatuses event containing a list of all members who are currently on shift.

## Disconnect and Error

The disconnect and error events are primarily used to report WebSocket-related issues.

They are rarely needed for handling regular application errors, as most errors are reported directly through the respective events themselves.

# Log Events

Whenever a log is created, edited, or deleted, the corresponding event sends a real-time notification.

Each event includes the relevant log data:

- logCreate: Contains the newly created log.

- logEdit: Contains the updated log.

- logDelete: Contains the deleted log.

## MemberShift Update

Whenever a member's shift status changes, the memberShiftUpdate event is emitted.

The event includes the member's ID and their new status.

Example: { id: '123456789', status: 'BREAK' }

## Example

The following example demonstrates how to listen to all available events and log their names and received data to the console.

```js
(async () => {
    const melonly = new Melonly({
        serverid: "7412495179740876800",
        token: process.env.TOKEN
    });

    // WebSocket Events
    melonly.events.on("ready", () => {
        console.log("🟢 WebSocket connected!");
    });

    melonly.events.on("disconnect", () => {
        console.log("🔴 WebSocket disconnected!");
    });

    melonly.events.on("error", (error) => {
        console.error("WebSocket error:", error);
    });

    // Log Events
    melonly.events.on("logCreate", (log) => {
        console.log("📝 Log created:", log);
    });

    melonly.events.on("logEdit", (log) => {
        console.log("✏️ Log edited:", log);
    });

    melonly.events.on("logDelete", (log) => {
        console.log("🗑️ Log deleted:", log);
    });

    // Member Events
    melonly.events.on("memberShiftUpdate", (member) => {
        console.log("👤 Member status updated:", member);
    });

    melonly.events.on("bulkMemberStatuses", (members) => {
        console.log("👥 Initial member statuses:", members);
    });

})();
```

If anything in this documentation is unclear, simply try running the example above. It will print each event and its corresponding data to the console, making it easier to understand what each event does.