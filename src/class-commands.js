class commands {

    commands = {};

    constructor() {
    };

    async processcommand (ctx) {
        const args = ctx.message.content.slice(ctx.prefix.length).trim().split(' ');

        const command = args.shift().toLowerCase();

        if (!this.commands[command]) {
            console.log(this.commands)
            return ctx.message.reply(`${command} is not a command`)
        } else {
            let ctx = {
                message: ctx.message,
                args: args,
                command: command,
                prefix: ctx.prefix  
            };

            this.commands[command](ctx);
        };
    };

};

module.exports = commands;