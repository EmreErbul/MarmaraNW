const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');

module.exports = class channelinfoCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'ayarlar',
			group: 'ayarlar',
			memberName: 'ayarlar',
			description: 'Sunucudaki ayarları gösterir.',
			guildOnly: true,
		});
	}
	
	hasPermission(msg) {
        if(!msg.guild) return this.client.isOwner(msg.author);
        return this.client.isOwner(msg.author) || msg.member.hasPermission('MANAGE_GUILD');
    }
	
	async run(message) {
        
		const modlog = message.guild.channels.get(message.guild.settings.get('modLog'))
		const logsChannel = message.guild.channels.get(message.guild.settings.get('logsChannel'))
		const basvuru = message.guild.channels.get(message.guild.settings.get('başvuruKanal'))
		const girisCikis = message.guild.channels.get(message.guild.settings.get('girisCikis'))
		const anons = message.guild.channels.get(message.guild.settings.get('anonsKanal'))
		const girisRol = message.guild.roles.get(message.guild.settings.get('girisRol'))
		const linkEngel = message.guild.settings.get('linkEngel')

		const embed = new RichEmbed()
		.setColor("RANDOM")
		.setAuthor(`${message.guild.name} | Ayarlar`)
		.setThumbnail(message.guild.iconURL)
		.addField('❯ Mod-Log Kanalı', modlog ? modlog : `Ayarlanmamış.`, true)
		.addField('❯ Log Kanalı', logsChannel ? logsChannel : `Ayarlanmamış.`, true)
		.addField(`❯ Başvuru Kanalı`, basvuru ? basvuru : `Ayarlanmamış.`, true)
		.addField(`❯ Giriş Çıkış Kanalı`, girisCikis ? girisCikis : `Ayarlanmamış.`, true)
		.addField('❯ Anons kanalı', anons ? anons : `Ayarlanmamış.`, true)
		.addField(`❯ Otomatik Rol/Giriş Rolü`, girisRol ? girisRol : `Ayarlanmamış.`, true)
		.addField(`❯ Link Engelleme Sistemi`, this.client.provider.get(message.guild.id, 'linkEngel', []) ? `Açık.` : `Kapalı.`, true)
		return message.embed(embed)

	}
}