const commandclass = require("./class-commands");

class commands extends commandclass {
    
    get _help() {
        this.commands.help = async (ctx) => {
            //Help code goes here.
        };
    };

};

module.exports = commands;