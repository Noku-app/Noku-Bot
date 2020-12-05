const discord = require("discord.js");
const client = new discord.Client();

let config;

const commandlib = require("./commands");
const command = new commandlib();

command.get

client.on(
    "message",
    async message => {
        let prefix = config.prefix || "n!";
        
        if (message.content.startsWith(prefix)) {
            let ctx = {
                message: message,
                prefix: prefix
            };

            command.processcommand(ctx);
        }
    }
)

const run = async (_config) => {
    config = _config;
    console.log(config.token);
    (
        async () => {
            client.login(config.token);
        }
    )();    
}

module.exports = {
    run: run
};