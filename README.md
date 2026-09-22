# Melonly.xyz tRPC API Client

[![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)](https://github.com/Flummi24/melonly-trpc-api)
[![npm Package](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white)](https://www.npmjs.com/package/melonly-trpc-api)


This Api Client allowes you to Use The **Melonly.xyz API Without ANY API Key**

## ✨ Features

- **Made in Javascript**
- **No External Dependencies**
- **Server Members and Join Requests**
- **Logs Featurse**
- **Shift Features**

## 📦 Installation

```bash
npm install melonly-trpc-api
```

```bash
yarn add melonly-trpc-api
```

```bash
pnpm add melonly-trpc-api
```

## 🚀 How to Use:

**Important: The User IDs** required to work with this project can be retrieved using **melonly.server.members.all()**

```js
const client = require("melonly-trpc-api")

const melonly = new client({
    serverid: "7412495179740876800",
    token: process.env.TOKEN
});

(async () => {
    const members = await melonly.server.members.all();
    console.log(members)
})
```

**Server Id**: The Server Id can be found in the Webside Url: https://melonly.xyz/panel/7412495179740876800   <-- This Last Number is the ServerID

**Token**: The "Token" is in this Case your **Browser Cookie**. You can get it with the **F12** / **Browser Dev Tools**



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


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made by **@flummi_24**

If you have any Questions or Somethings else: **Discord: @flummi_24**

[**Github**](https://github.com/Flummi24/melonly-trpc-api)

[**NPM**](https://www.npmjs.com/package/melonly-trpc-api)