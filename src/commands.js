const commandclass = require("./class-commands");

class _commands extends commandclass {
    
    commands["help"] = async function(ctx) {
            ctx.message.reply("Test response");
    };
};

module.exports = _commands;