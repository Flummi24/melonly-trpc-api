# Melonly.xyz tRPC API Client

[![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)](https://github.com/Flummi24/melonly-trpc-api)
[![npm Package](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white)](https://www.npmjs.com/package/melonly-trpc-api)


This Api Client allowes you to Use The **Melonly.xyz API Without An Official API Key**

## ✨ Features

- **Made in Javascript**
- **Lightweight (Only requires ws)**
- **Simple Debugging**
- **Many Features**

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

**Important!**: Do NOT use your Main Account as your API Account! The Account can get Banned, for being Controlled by an Script!

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
})()
```

**Server Id**: The Server Id can be found in the Webside Url: https://melonly.xyz/panel/7412495179740876800   <-- This Last Number is the ServerID

**Token**: The "Token" is in this Case your **Browser Cookie**. You can get it with the **F12** / **Browser Dev Tools**

## The Entire Documentation

The Entiere Documentation can be found after Downloading at /node_modules/melonly-trpc-api/docs/


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made by **@flummi_24**

If you have any Questions or Something else: **Discord: @flummi_24**

[**Github**](https://github.com/Flummi24/melonly-trpc-api)

[**NPM**](https://www.npmjs.com/package/melonly-trpc-api)