const weeb_embed = require('../../weebsh.js');

module.exports = {
    name: 'shrug',
    description: 'Kawaii Emotes: Shrug Emote',
    usage: '<@mention>',
    guildOnly: true,
    aliases: [],
    execute(message, args) {

        message.guild.fetchMember(message.client.user).then(clientMember => {
            if (!clientMember.permissionsIn(message.channel).has('EMBED_LINKS')) {
                return message.channel.send(`**I'm not allowed to sent Embed's in this channel, gomensai desu~**\n${message.guild.owner}, you b-baka! Fix my permissions! <:kawaiiBaka:437030808696520724>`);
            }

            if (message.mentions.users.size > 5) {
                return message.channel.send(`**B-baka, more then five members is not allowed due spam, gomenesai~**`)
            }

            var author = message.author
            const users = message.mentions.users.map(user => user);
            const last = users.pop();
            const others = users.join(', ');
            const usersWithCommaAnd = (others ? [others, last].join(' and ') : last) || 'themself';
    
            if (!message.mentions.users.size) {
                return weeb_embed('shrug', `**${author} shrugs, nani~**`, message);
            }
            return weeb_embed('shrug', `**${author} shrugs at ${usersWithCommaAnd}, nani~**`, message);

        })
    },
};