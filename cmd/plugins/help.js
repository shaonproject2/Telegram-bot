module.exports = {
  config: {
    name: "help",
    credits: "Shaon Ahmed",
    aliases: ["menu", "commands"],
    prefix: true,
    permission: 0,
    description: "Displays the help menu with commands",
    tags: ["Utility"],
  },
  start: async ({ event, api, pluginsLoad }) => {
    const commandsPerPage = 10;
    const chatId = event.msg.chat.id;

    
    const getAllCommands = () => {
      return pluginsLoad.map((plugin) => plugin.config);
    };

    const commands = getAllCommands();
    const totalCommands = commands.length;
    const totalPages = Math.ceil(totalCommands / commandsPerPage);

    
    const match = event.msg.text.match(/^\/help\s*(\S+)?/);
    const input = match && match[1];

    if (input && isNaN(input)) {
      
      const command = commands.find((cmd) => cmd.name === input || (cmd.aliases || []).includes(input));
      if (command) {
        const { name, credits, permission, description, aliases } = command;
        const permissionMessage = permission === 2 ? "⚠️ Admin only" : "✅ All users can use";
        const aliasesMessage = aliases && aliases.length ? `Aliases: ${aliases.join(", ")}` : "Aliases: None";

        const response = `ℹ️ Command: *${name}*\n` +
          `👤 Author: ${credits || "Unknown"}\n` +
          `🔒 Permission: ${permissionMessage}\n` +
          `📝 Description: ${description || "No description provided"}\n` +
          `${aliasesMessage}`;

        return api.sendMessage(chatId, response, { parse_mode: "Markdown" });
      } else {
        return api.sendMessage(chatId, `⚠️ Command '${input}' not found. Please check the command name.`);
      }
    }

    
    const currentPage = input ? parseInt(input, 10) : 1;

    
    if (currentPage < 1 || currentPage > totalPages) {
      return api.sendMessage(chatId, `⚠️ Invalid page number! Please choose a page between 1 and ${totalPages}.`);
    }

    
    const start = (currentPage - 1) * commandsPerPage;
    const end = start + commandsPerPage;
    const pageCommands = commands.slice(start, end);

    
    let response = `📋 *Help Menu* (Page ${currentPage}/${totalPages})\n\n`;
    pageCommands.forEach((cmd, index) => {
      response += `${start + index + 1}. ${cmd.name}\n`;
    });

    response += `\n⚙️ Total Commands: ${totalCommands}\n👤 Author: Shaon Ahmed`;

    
    await api.sendMessage(chatId, response, { parse_mode: "Markdown" });
  },
};
