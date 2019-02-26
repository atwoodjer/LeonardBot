const Discord = require('discord.js');
const reactionRoles = require('../reactionroles.json');

module.exports = (messageReaction, user) => {
    if(guild.id == "182894318913191936"){
        if(messageReaction.message.id == "473570562984378378"){
            
            messageReaction.guild.fetchMember(user)
                                 .then(user => user.addRole(user.guild.roles.find('name', reactionRoles[messageReaction.emoji.name])))
                                 .catch(err);
        }
    }
}
