const { Client } = require('discord.js');
const { Events } = require("discord-addons");
const client = new Client();

new Events(client);

const config = {
    guildID: "Guild ID",
    roleID: "Role ID"
};

client.on("ready", () => {
    console.log(`${client.user.tag} is ready !`);
});

client.on("voiceChannelCameraStart", (member, voiceChannel) => {
    if (member.guild.id !== config.guildID) return;
    member.roles.add(config.roleID);
});

client.on("voiceChannelCameraStop", (member, voiceChannel) => {
    if (member.guild.id !== config.guildID) return;
    member.roles.remove(config.roleID);
});

client.login("token")