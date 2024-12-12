<h3 align="center">
  
  <p align="center"><img src="https://img.shields.io/badge/WLCM%20TO -SHAON TELEGRAM BOT-green?colorA=%23ff0000&colorB=%23017e40&style=flat-square">  
  
</h3>

![Bot Preview](https://i.postimg.cc/9XDfjVR3/20241203-103021.gif)

---
<img alt="version" src="https://img.shields.io/github/package-json/v/shaonproject/Tle-bot?label=github&style=flat-square"></img>
[![GitHub contributors](https://img.shields.io/github/contributors/shaonproject/Tle-bot)](https://github.com/shaonproject/Tle-bot/graphs/contributors) [![GitHub issues](https://img.shields.io/github/issues/shaonproject/Tle-bot)](https://github.com/shaonproject/Tle-bot/issues) [![HitCount](https://views.whatilearened.today/views/github/shaonproject/Tle-bot.svg)](https://github.com/shaonproject/Tle-bot)
---


## ABOUT ME

name : ```Shaon Developer```</br>
age : ```20```</br>
link : [facebook](https://www.facebook.com/profile.php?id=Hey.Its.Me.Shaon.Ahmed).</br>
channel: [SHAON PROJECT BOT]([https://t.me/shaon_bot_group/]) <br>
tutorial: [youtube](https://youtu.be/aqYP28Mog6U)
## CREDITS
---
Original File: [SHAON](https://github.com/shaonproject/Tle-bot/) by ```Shaon Developer```


## Telegram Bot Documentation

### Step 1: Create a Telegram Bot with BotFather

1. **Open Telegram** and search for **BotFather** (a bot provided by Telegram to create other bots).

2. **Start a conversation** with BotFather by clicking **Start**.

3. Type the following command to create a new bot:
   ```
   /newbot
   ```

4. **Choose a name** for your bot (this will be the display name).
   - Example: `MyFirstBot`

5. **Choose a username** for your bot (this must be unique and end in `bot`).
   - Example: `my_first_bot`

6. After creating the bot, **BotFather will give you a token**. It will look something like:
   ```
   1234567890:ABCDEFghijKLMNOPQRSTUVWXyz
   ```
   **Save this token** as you'll need it to interact with the Telegram API.

   ## Step 2: Bot Configuration

The configuration file (`config.js`) contains essential settings for your bot, such as admin IDs, bot token, error messages, and more.

**Configurable Parameters:**
- **ownerUsernames**: List of usernames for the bot's owner.
- **ownerNumber**: The phone number of the bot's owner.
- **admin**: List of admin IDs who have special permissions.
- **prefix**: The command prefix for the bot (default is `/`).
- **telegramBotToken**: Your Telegram Bot token (from BotFather).
- **imageUrl**: URL for the bot's thumbnail image.
- **port**: The port for the bot's server (default 8053).
- **mess**: Various messages for errors, permissions, and commands.

### Example of `config.js`:
```javascript
module.exports = {
ownerUsernames: ["yourUsername"], // Your Telegram Username
ownerNumber: "+1234567890", // Your Phone Number
admin: ["adminID1", "adminID2"], // Admin Telegram IDs
prefix: "/", // Command Prefix
telegramBotToken: "your-bot-token-here", // Your Bot Token from BotFather
imageUrl: "https://your-image-url-here", // Thumbnail Image URL
port: process.env.PORT || 8053, // Port for the server
mess: {
 ownerlink: "https://t.me/yourUsername", // Link to your Telegram profile
 error: "Internal Server Error 😵",
 owner: "Sorry, this command can only be accessed by the owner!",
 group: "Sorry, this command can only be used within a group!",
 wait: "Your request is being processed...",
},
};
```

**Configurable Parameters:**
- **ownerUsernames:** List of usernames for the bot's owner.
- **ownerNumber:** Phone number of the bot's owner.
- **admin:** List of admin IDs.
- **prefix:** The command prefix (default is `/`).
- **telegramBotToken:** Your Telegram Bot token.
- **imageUrl:** URL for the bot's thumbnail image.
- **port:** The port for the bot's server.
- **mess:** Various messages for errors and permissions.

---


### Overview
This Telegram bot is designed to respond to certain commands and handle messages using a modular approach. The bot supports greetings like "hi" or "hello" and is configurable to allow owner and admin-only commands.

### 1. **Message Handler Module**
This module listens for messages and responds to greetings like "hi" or "hello".

```javascript
module.exports = {
  event: "message", // Specifies the event type (message event)
  handle: async ({ msg, bot }) => {
    // The "handle" function is triggered for each new message.
    const chatId = msg.chat.id; // Get the chat ID from the incoming message
    const text = msg.text;      // Extract the message text

    // Check if the message text matches "hi" or "hello" (case-insensitive)
    if (text && (text.toLowerCase() === "hi" || text.toLowerCase() === "hello")) {
      // Send a reply to the chat
      await bot.sendMessage(chatId, "Hi there! How are you?");
    }
  },
};
```

**How it works:**
- Listens to the `message` event.
- Responds to "hi" or "hello" with "Hi there! How are you?".

---

### 2. **Command Handler for "hi"**
This command responds when users send "/hi", "/hello", or "/hlw".

```javascript
module.exports = {
  config: {
    name: "hi", // Command name
    credits: "Nayan", // Command creator
    aliases: ["hello", "hlw"], // Alternative names for the command
    prefix: true, // Indicates the command requires a prefix (e.g., "/hi")
    permission: 0, // Sets the permission level (0 = accessible to all users)
  },

  start: async ({ api, event }) => {
    // The "start" function is executed when the command is triggered.
    const { chat, from } = event.msg; // Extract chat and message details
    const { senderId, threadId, messageId } = event; // Get the senderId, group id, message id

    // Send a reply to the user
    await api.sendMessage(threadId, "Hi there! How are you?", { reply_to_message_id: messageId });
  },
};
```

**How it works:**
- Configures the command to respond to `/hi`, `/hello`, or `/hlw`.
- Sends "Hi there! How are you?" when the command is triggered.

---


**Configurable Parameters:**
- **ownerUsernames:** List of usernames for the bot's owner.
- **ownerNumber:** Phone number of the bot's owner.
- **admin:** List of admin IDs.
- **prefix:** The command prefix (default is `/`).
- **telegramBotToken:** Your Telegram Bot token.
- **imageUrl:** URL for the bot's thumbnail image.
- **port:** The port for the bot's server.
- **mess:** Various messages for errors and permissions.

---

### 4. **How to Use**
1. **Install Dependencies:**  
## **Installation**
1. Clone this repository:
   ```bash
   git clone https://github.com/your-repo-name/telegram-bot.git
   cd telegram-bot
   ```
   Make sure you have all necessary dependencies installed.
   ```bash
   npm install
   ```

2. **Configure Your Bot Token:**  
   Replace `"token"` with your actual Telegram bot token in the configuration.

3. **Run the Bot:**
   Start the bot by running:
   ```bash
   node index.js
   ```

4. **Command Usage:**  
   - Send `/hi`, `/hello`, or `/hlw` to trigger a response from the bot.
   - The bot will reply with: "Hi there! How are you?"

---

### 5. **Error Handling**
- **Internal Server Error:**  
  If there's an error, the bot will send the message:  
  `"Internal Server Error 😵"`

- **Permissions:**
  - **Owner Only:**  
    Commands marked for the owner can only be used by the bot's owner.
  - **Group Only:**  
    Some commands may require the bot to be in a group.

---

### Conclusion
This bot is a basic implementation of a Telegram bot that handles simple interactions. It can be expanded with more features and commands depending on your needs.
