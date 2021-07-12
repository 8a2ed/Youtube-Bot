const discord = require('discord.js');
const client = new discord.Client();
///
const { DiscordTogether } = require('discord-together');
const fetch = require('node-fetch');
const prefix = ""; // PREFix
client.login(''); // TOKEN
///
client.on('ready', () => {
    client.user.setActivity('Yt_bot 8a2ed');
});
///

client.on('message', message => {
    if(message.channel.type === 'dm' || !message.channel) return; // No DM

    if(message.content.startsWith( prefix + 'yt_together')) {
        client.discordTogether = new DiscordTogether(client);

        if(!message.member.voice.channel) return message.channel.send(`Join voice channel.`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`Join the same voice channel.`);

        const channelID = message.member.voice.channelID;

        fetch(`https://discord.com/api/v8/channels/${channelID}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "755600276941176913",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(invite => {
            if(!invite.code) return message.channel.send(`Cannot start yt-together.`);

            const embed = new discord.MessageEmbed()
            .setTitle(`Joined`)
            .setColor(`RANDOM`)
            .setDescription(`Joined, [Click me](https://discord.com/invite/${invite.code})`)
            return message.channel.send(embed)
        });
    }
});
////

client.on('message', message => {
    if(message.channel.type === 'dm' || !message.channel) return; // No DM

    if(message.content.startsWith( prefix + 'fishing')) {
        client.discordTogether = new DiscordTogether(client);

        if(!message.member.voice.channel) return message.channel.send(`Join voice channel.`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`Join the same voice channel.`);

        const channelID = message.member.voice.channelID;

        fetch(`https://discord.com/api/v8/channels/${channelID}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "814288819477020702",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(invite => {
            if(!invite.code) return message.channel.send(`Cannot start fishing game.`);

            const embed = new discord.MessageEmbed()
            .setTitle(`Joined`)
            .setColor(`RANDOM`)
            .setDescription(`Joined, [Click me](https://discord.com/invite/${invite.code})`)
            return message.channel.send(embed)
        });
    }
});

///

client.on('message', message => {
    if(message.channel.type === 'dm' || !message.channel) return;

    if(message.content.startsWith( prefix + 'poker')) {
        client.discordTogether = new DiscordTogether(client);

        if(!message.member.voice.channel) return message.channel.send(`Join voice channel first.`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`Join the same voice channel.`);

        client.discordTogether.createTogetherCode(message.member.voice.channelID, 'poker').then(async invite => {
            const embed = new discord.MessageEmbed()
            .setTitle(`Joined.`)
            .setColor(`RANDOM`)
            .setDescription(`Joined, [Click me](${invite.code})`)
            return message.channel.send(embed)
    })
}
})