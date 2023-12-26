// commands/ping.js
module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args) {
		if (args.length === 0) {
			message.reply('Pong!');
		}
		else {
			message.reply(`Pong with arguments: ${args.join(', ')}`);
		}
	},
};