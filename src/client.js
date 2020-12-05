const discord = require("discord.js");
const client = new discord.Client();

const run = async (config) => {
    (
        async () => {
            client.login(config.token);
        }
    )();    
}

module.exports = {
    run: run
};