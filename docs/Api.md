# Api Methods

These Methods are Executing different things on the Melonly Server. They Return Mostly old Data, that was written Before. If you want Live data use the [Client Events](Events.md). But some also Return Live Data or write new Data

## 📋 Logs

To **Get, Create or Delete Logs**, you can use the **melonly.logs** Feature

**Types:**

0 = Warning

1 = Kick

2 = Ban

3 = Ban Bolo

4 = Note

```js
const data = await melonly.logs.create("player", "RDM", 0) // Creates a Warning for The User "player" for RDM
console.log(data) // true or false

const data = await melonly.logs.get("player") // Retuns the Logs for the User "player"
console.log(data) // an Json Array with objects in it

const data = await melonly.logs.delete("123456789") // Deletes the Logs with the ID "123456789", The Logs id can be found in melonly.logs.get(), see abouve
console.log(data) // true or false
```

# 🖥️ Server

## 👤 Members

To use the **Server Member Feature**, you can use **melonly.server.members** Feature

```js
const data = await melonly.server.members.all() // Returns All Server Members
console.log(data) // An Json Array with Objects in it

const data = await melonly.server.members.get("123456789") // Gets a Server Member by there ID
console.log(data) // An Json Object

const data = await melonly.server.members.remove("123456789") // Kicks a Server Member from the Server
console.log(data) // true or False
```

## 📨 Join Requests

To use the **Server Member Join Requests Feature**, you can use **melonly.server.requests** Feature

```js
const data = await melonly.server.requests.all() // Returns All Join Requests
console.log(data) // An Object including Requests: [] and Users: []

const data = await melonly.server.requests.accept("123456789") // Accepts a Users Join Request by there ID
console.log(data) // true or false

const data = await melonly.server.requests.deny("123456789") // Denys a Users Join Request by there ID
console.log(data) // true or False
```

## Loa

To use the **Server Loa Feature**, you can use the **melonly.server.loa** Feature

```js
const data = await melonly.server.loa.history("123456789") // Shows the Loa History of the User
console.log(data) // An Json Array

const data = await melonly.server.loa.end("123456789") // Ends a Users Loa Request
console.log(data) // An Json Array

const data = await melonly.server.loa.approve("123456789") // Accepts a Users Loa Request
console.log(data) // An Json Array

const data = await melonly.server.loa.deny("123456789", "reason") // Denys a Users Loa Request with a Reason
console.log(data) // An Json Array
```

## Audit Logs

To use the **Server Audit Logs Feature**, you can use the **melonly.server.audit**

```js
const data = await melonly.server.audit.search.type() // Searches the  Server Audit Logs by the Type of The Action 
console.log(data)

const data = melonly.server.audit.search.user("123456789") // Searches the  Server Audit Logs by the UserId
console.log(data)

const data = melonly.server.audit.latest() // Latest Server Audit Logs
console.log(data)
```

# 🕐 Shift

## 🟢 Active

```js
const data = await melonly.shifts.active.all() // Returns all On Shift Staff Members 
console.log(data) // Returns an Json Object with Objects in it

const data = await melonly.shifts.active.get("123456789") // Gets a Singe User from there ID
console.log(data) // an Json Object or null. if they are not not on Shift
```

## 🔴 Not Active

```js
const data = await melonly.shifts.leaderboard(34) // Returns the Leaderboard of the Selected Wave
console.log(data) // An Json Array with Objects in it

const data = await melonly.shifts.get("123456789", 34) // Gets All the SINGLE Shifts of an User of the Selected Wave
console.log(data) // An Json Object

const data = await melonly.shifts.end("123456789") // Ends the Shift of an User, if he is On Shift
console.log(data) // true or False
```

## Example

```js
const client = require("melonly-trpc-api");

const melonly = new client({
    serverid: "7412495179740876800",
    token: "Your-Browser-Cookie"
});

(async () => {

const data = await melonly.server.members.all() // Returns All Server Members
console.log(data) // An Json Array with Objects in it

})()
```