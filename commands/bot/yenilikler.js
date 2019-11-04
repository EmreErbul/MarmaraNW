const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');

module.exports = class NewsCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'yenilikler',
			group: 'bot',
			memberName: 'yenilikler',
			description: 'Bot ile ilgili yeni özellikleri gösterir.',
			guildOnly: false,
			throttling: {
				usages: 1,
				duration: 10
			}
		});
	}

	async run(message) {
		if (message.guild) {
			var embed = new RichEmbed()
			.setAuthor('Marmara Bot | Yenilikler', this.client.user.avatarURL)
			.setDescription(`Tüm komutları görmek için \`${this.client.commandPrefix}yardım\` yazabilirsiniz.`, this.client.user.avatarURL)
			.addField(`Yenilikler | v0.0.1`, stripIndents`
			(1) Resimli giriş çıkış mesajı eklendi.
			(2) !destek yazarak yetkililerden yardım alabilirsiniz.
			(3) !öneri / !tavsiye yazarak bize önerilerinizi/tavsiyelerinizi belirtebilirsiniz.
			(4) !başvuru eklenmiştir yetkili alımlarımızı burdan yapacağız.
			(5) !afk komutu eklenmiştir.
			`)
			.setColor("RANDOM")
			.setFooter('©' + (new Date()).getFullYear() + ' Marmara Bot', this.client.user.avatarURL)
			.setTimestamp()
			message.channel.send({embed});
		}
	}
};