const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello Express app!')
});
app.listen(0, () => {
    console.log('server started');
});
const Discord = require("discord.js");
const client = new Discord.Client();
let config = require('./config')
let prefix = config.Prefix;
let token = config.token;
let owners = config.owners;
let timeS = config.Time

client.on('ready', () => {
    console.log(`
                    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                    @@@@@@@@@@@@@@@@5YB&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&B5P@@@@@@@@@@@@@@@@
                    @@@@@@@@@@@@@@@@5!7?5B&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&B5J77P@@@@@@@@@@@@@@@@
                    @@@@@@@@@@@@@@@@5!77!7?5B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&B5?77777P@@@@@@@@@@@@@@@@
                    @@@@@@@@@@@@@@@@5!7777!!!?5B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B5?7!7!7777P@@@@@@@@@@@@@@@@
                    @@@@@@@@@@@@@@@@P!7777777!!!?5B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#5?!!777777777P@@@@@@@@@@@@@@@@
                    @@@@@@@@@@@@@@@@P777777777!7!!!?5#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#5J7!7!7!!7777777P@@@@@@@@@@@@@@@@
                    @@@@@@@@@@@@@@@@P!7777777!!!!!!!!7?P#@@@@@@@@@@@@@@@@@@@@@@@@@@#PJ7!7777777!7777777G@@@@@@@@@@@@@@@@
                    @@@@@@@@@@@@@@@@G!!!!!!7!!!!!!!77!!!7?P#@@@@@@@@@@@@@@@@@@@@#PJ7!!777777777!!777777G@@@@@@@@@@@@@@@@
                    @@@@@@@@@@@@@@@@G!!!!7777!77777!77777!!7JP#@@@@@@@@@@@@@@#PJ7!77777777777777!77!77!G@@@@@@@@@@@@@@@@
                    @@@@@@@@@@@@@@@@G!!77!77!7777777!77!7!7!!!7JP#@@@@@@@@#PJ7!!!!7777777777777777777!!G@@@@@@@@@@@@@@@@
                    @@@@@@@@@@@@@@@@G!!77777777777777!!!!!77!!7!!7JP#@@#PJ7!7777777777!!!7777!77777!77!G@@@@@@@@@@@@@@@@
                    @@@@@@@@@@@@@@@@G!!77777777777!7777!7777!!!!!!!!7JJ7!!777777777!777777777!777777777G@@@@@@@@@@@@@@@@
                    @@@@@@@@@@@@@@@@B!!!!!777777!!!!77!!!77!77!7777!!!7!!!7777777777777777777!777!77777B@@@@@@@@@@@@@@@@
                    @@@@@@@@@@@@@@@@&?!!!77!!777!!!!!777777!77777777777!777777777!77777777777!7!7777!7?&@@@@@@@@@@@@@@@@
                    @@@@@@@@@@@@@@@@@B7!!77!!7777!!!!7777777!77777777!!77777777777777777777777!!7777!7B@@@@@@@@@@@@@@@@@
                    @@@@@@@@@@@@@@@@@@#5?!!!!7777!!777777777!77!7!!!!!!7777777777777777777777777777?5#@@@@@@@@@@@@@@@@@@
                    @@@@@@@@@@@@@@@@@@@@&B5?7!!77!!77!!77777!!7!!7!!!7!77777777777777777777777!7?5B&@@@@@@@@@@@@@@@@@@@@
                    @@@@@@@@@@@@@&###@@@@@@@B5?!!!!777!!777!!777!!777777777777777777777777!!7?5B@@@@@@@&#&&@@@@@@@@@@@@@
                    @@@@@@@@@@&#GGPPPGB#@@@@@@&B5?!!77!7777777!7777777777777777777777777!7?5B&@@@@@@&BGPPGGB#&@@@@@@@@@@
                    @@@@@@@@&BPPPPGPPGPPGB&@@@@@@&BY?!!!!77777!!77777777777777777777777?5B&@@@@@@&BGPPGGPPPPPGB&@@@@@@@@
                    @@@@@@@BPPPPGGGPPGGGPPGGB&@@@@@@&BY?!!77777!77!77777777777777777?5B&@@@@@@&BGPPPPGGPPGGGGGPGB@@@@@@@
                    @@@@@@BPGGGPGGGGGGGGPPGPGGGB&@@@@@@&BY?!!77!777777!!!!77!!!!!?YB&@@@@@@&#GGPPGPPGGGGPGGGGGGGPB@@@@@@
                    @@@@@&GGGGGGGGGGGGGGGGGGGGGGGB#&@@@@@@&BY?!!777777!!7!7!!!7YB&@@@@@@&#GGGGGGGGGGGGGGGGGGGGGGGG&@@@@@
                    @@@@@&GGGGGGGGGGGGGGGGGGGGGGGGGGB&@@@@@@@&BY7!!!777!!!!7YG&@@@@@@@@BGGGGGGGGGGGGGGGGGGGGGGGGGG&@@@@@
                    @@@@@&GGGGGGGGGGGGGGGGGGGGGGGGGGG&@@@@@@@@@@&GY7!!!!7YG&@@@@@@@@@@&GGGGGGGGGGGGGGGGGGGGGGGGGGG&@@@@@
                    @@@@@&GGGGGGGGGGGGGGGGGGGGGGGGB#&@@@@@@@@@@@@@@&GYYG&@@@@@@@@@@@@@@&#BGBBBBGBGGGGGGGGGGGGGGGGG&@@@@@
                    @@@@@&GGGGGGGGGGGGGGGGGGGGGB#&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&#BBBBBGGGBBBBBGGGGGGGGG&@@@@@
                    @@@@@&GGGGGGGGGGGGGGGGGGB#&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&#BBBGGBBBBBBBGBGGBGG&@@@
                    @@@@@&GGGGGGGBBGGBBGGB#&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&#BGBBBBBBBBBGBBBB&@@@
                    @@@@@&BBBBBBBBBGGBB#&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&#BBBBBBBBBBBBB&@@@
                    @@@@@&BBBBBBBBBB#&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&#BBBBBBBBBB&@@@
                    @@@@@&BBBBBBB#&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&#BBBBBBB&@@@
                    @@@@@@#BBB#&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&####&@@@@
                    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                    `);
    console.log(`                    [🤖] : ${client.user.tag} [💜] : https://discord.gg/wrt    [⏱️] : Ends in (Life Time)    [🤩] : iSoLo506    [💭] : (Wonder Love Yoy)`);
    console.log(`-> Servers / Members: ${client.guilds.cache.size} server / ${client.users.cache.size} member`);
    client.user.setPresence({
        activities: [{ name: config.statusname, type: 'STREAMING', url: 'https://www.twitch.tv/isolo506/about' }],
        status: 'dnd'
    });
});

const timeIIa = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

client.on("message", async message => {

    if (!message.channel.guild) return;
    if (message.content === prefix + "bc") {

        if (owners.includes(message.author.id)) {

            let loading = new Discord.MessageEmbed()

                .setTitle(" Broadcast")
                .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
                .setColor(message.member.roles.highest.hexColor)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .addField("Loading . . .", "Loading . . .")
                .addField("Loading . . .", "Loading . . .")
                .addField("Loading . . .", "Loading . . .")
                .addField("Loading . . .", "**Loading . . .**")
                .setFooter("iSolo506")

            let embed = new Discord.MessageEmbed()

                .setTitle(" Broadcast")
                .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
                .setColor(message.member.roles.highest.hexColor)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .addField("🟢", "Send to online members **only** `[ " + message.guild.members.cache.filter(m => m.presence.status === "dnd" || m.presence.status === "idle" || m.presence.status === "online" && !m.user.bot).size + " ] member`")
                .addField("🟠", "Send to **role** members")
                .addField("🔵", "Send to **all** members `[ " + message.guild.memberCount + " ] member`")
                .addField("❌", "**Cancel**")
                .setFooter("iSolo506")

            message.channel.send(loading).then(async (m) => {

                await m.react("🟢");
                await m.react("🟠");
                await m.react("🔵")
                await m.react("❌").then(() => {

                    m.edit(embed);

                })

                let ReactionFilter = (r, user) => {
                    return user.id === message.author.id && ["🟢", "🟠", "🔵", "❌"].includes(r.emoji.name);
                };
                let ReactionCollector = m.createReactionCollector(ReactionFilter, { time: 15000 });

                ReactionCollector.on("collect", re => {

                    if (re.emoji.name === "❌") {

                        m.delete({ timeout: 150 });
                        message.channel.send(`**❌ Canceled by: ${message.member}**`)

                        return;
                    }

                    if (re.emoji.name === "🔵") {

                        m.reactions.removeAll();

                        ReactionCollector.stop("Done2");

                    } else if (re.emoji.name === "🟢") {

                        m.reactions.removeAll();

                        ReactionCollector.stop("Done1");

                    } else if (re.emoji.name === "🟠") {

                        m.reactions.removeAll();

                        ReactionCollector.stop("Done3");

                    }

                });

                ReactionCollector.on("end", async (col, reason) => {

                    if (reason === "Done1") {

                        //Online only

                        let msgEmbed = new Discord.MessageEmbed()

                            .setTitle("iSolo506")
                            .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
                            .setColor(message.member.roles.highest.hexColor)
                            .setThumbnail(message.guild.iconURL({ dynamic: true }))
                            .setDescription(":white_check_mark:** | Write your message.**")
                            .setFooter("iSolo506")

                        m.edit(msgEmbed).then(() => {


                            let MsgFilter = m => m.author.id === message.author.id;

                            let MsgCollector = m.channel.createMessageCollector(MsgFilter, { time: 60000, max: 1 });

                            MsgCollector.on("collect", msg => {

                                let SureEmbed = new Discord.MessageEmbed()

                                    .setTitle("Are you sure you want to send this message ?")
                                    .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
                                    .setColor(message.member.roles.highest.hexColor)
                                    .setThumbnail(message.guild.iconURL({ dynamic: true }))
                                    .setDescription(msg.content)
                                    .setFooter("iSolo506")

                                msg.delete({ timeout: 500 });
                                m.delete({ timeout: 500 });

                                msg.channel.send(SureEmbed).then(async (mSure) => {


                                    await mSure.react("✅");
                                    await mSure.react("❌");

                                    let ReactionFilter = (r, user) => {

                                        return user.id === message.author.id && ["✅", "❌"].includes(r.emoji.name);

                                    }

                                    let ReactionCollector = mSure.createReactionCollector(ReactionFilter, { time: 15000 });

                                    ReactionCollector.on("collect", r => {

                                        if (r.emoji.name === "✅") {


                                            mSure.reactions.removeAll();
                                            ReactionCollector.stop("Done1" + msg.content);

                                        } else if (r.emoji.name === "❌") {

                                            mSure.reactions.removeAll();

                                            ReactionCollector.stop("Done2");

                                        }

                                    })

                                    ReactionCollector.on("end", async (col, reason) => {

                                        if (reason.startsWith("Done1")) {

                                            let msg = reason.replace("Done1", "");

                                            //Send


                                            let sendEmbed = new Discord.MessageEmbed()
                                                .setTitle(" Broadcast")
                                                .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
                                                .setColor(message.member.roles.highest.hexColor)
                                                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                                                .setDescription(`:white_check_mark: **| Sending... | All Members: ${message.guild.members.cache.filter(m => m.presence.status === "dnd" || m.presence.status === "idle" || m.presence.status === "online" && !m.user.bot).size}**`)
                                                .setFooter("iSolo506")

                                            mSure.edit(sendEmbed);

                                            let members = message.guild.members.cache.filter(m => m.presence.status === "dnd" || m.presence.status === "idle" || m.presence.status === "online" && !m.user.bot).array();


                                            for (var i = 0; i < members.length; i++) {

                                                try {

                                                    await members[i].send(msg) // Send Message;

                                                    await timeIIa(timeS);


                                                } catch {

                                                }

                                            }

                                            setInterval(() => {

                                                let edddd = new Discord.MessageEmbed()
                                                    .setTitle(" Broadcast")
                                                    .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
                                                    .setColor(message.member.roles.highest.hexColor)
                                                    .setThumbnail(message.guild.iconURL({ dynamic: true }))
                                                    .setDescription(`:white_check_mark: **| Sending... | All Members: ${message.guild.members.cache.filter(m => m.presence.status === "dnd" || m.presence.status === "idle" || m.presence.status === "online" && !m.user.bot).size}**`)
                                                    .setFooter("iSolo506")

                                                mSure.edit(edddd);

                                            }, 1 * 10000);

                                        } else if (reason === "Done2") {

                                            //Cancel

                                            let cancelEmbed = new Discord.MessageEmbed()
                                                .setTitle(" Broadcast")
                                                .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
                                                .setColor(message.member.roles.highest.hexColor)
                                                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                                                .setDescription("❌** | Canceled.**")
                                                .setFooter("iSolo506")

                                            mSure.edit(cancelEmbed);
                                            mSure.reactions.removeAll();

                                        } else if (!reason.startsWith("Done1") && !reason.startsWith("Done2")) {

                                            let timeoutEmbed = new Discord.MessageEmbed()
                                                .setTitle(" Broadcast")
                                                .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
                                                .setColor(message.member.roles.highest.hexColor)
                                                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                                                .setDescription("❌** | Reaction timeout.**")
                                                .setFooter("iSolo506")


                                            mSure.reactions.removeAll();
                                            mSure.edit(timeoutEmbed);

                                        }



                                    })


                                })

                            });

                            MsgCollector.on("end", async (ccol, reason) => {


                            });

                        })

                    } else if (reason === "Done2") {

                        //All

                        let msgEmbed = new Discord.MessageEmbed()

                            .setTitle(" Broadcast")
                            .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
                            .setColor(message.member.roles.highest.hexColor)
                            .setThumbnail(message.guild.iconURL({ dynamic: true }))
                            .setDescription(":white_check_mark:** | Write your message.**")
                            .setFooter("iSolo506")

                        m.edit(msgEmbed).then(() => {

                            let MsgFilter = m => m.author.id === message.author.id;
                            let MsgCollector = m.channel.createMessageCollector(MsgFilter, { time: 60000, max: 1 });

                            MsgCollector.on("collect", msg => {

                                let SureEmbed = new Discord.MessageEmbed()

                                    .setTitle("Are you sure you want to send this message ?")
                                    .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
                                    .setColor(message.member.roles.highest.hexColor)
                                    .setThumbnail(message.guild.iconURL({ dynamic: true }))
                                    .setDescription(msg.content)
                                    .setFooter("iSolo506")

                                msg.delete({ timeout: 500 });
                                m.delete({ timeout: 500 });

                                msg.channel.send(SureEmbed).then(async (mSure) => {

                                    await mSure.react("✅");
                                    await mSure.react("❌");

                                    let ReactionFilter = (r, user) => {

                                        return user.id === message.author.id && ["✅", "❌"].includes(r.emoji.name);

                                    }
                                    let ReactionCollector = mSure.createReactionCollector(ReactionFilter, { time: 15000 });

                                    ReactionCollector.on("collect", r => {

                                        if (r.emoji.name === "✅") {


                                            mSure.reactions.removeAll();
                                            ReactionCollector.stop("Done1" + msg.content);

                                        } else if (r.emoji.name === "❌") {

                                            mSure.reactions.removeAll();

                                            ReactionCollector.stop("Done2");

                                        }

                                    })

                                    ReactionCollector.on("end", async (col, reason) => {


                                        if (reason.startsWith("Done1")) {

                                            let msg = reason.replace("Done1", "");

                                            //Send

                                            let sendEmbed = new Discord.MessageEmbed()
                                                .setTitle(" Broadcast")
                                                .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
                                                .setColor(message.member.roles.highest.hexColor)
                                                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                                                .setDescription(`:white_check_mark: **| Sending... | All Members: ${message.guild.members.cache.filter(m => !m.user.bot).size}**`)
                                                .setFooter("iSolo506")

                                            mSure.edit(sendEmbed);

                                            let members = message.guild.members.cache.filter(m => !m.user.bot).array();

                                            for (var i = 0; i < members.length; i++) {

                                                try {

                                                    await members[i].send(msg) // Send Message;

                                                    await timeIIa(timeS);


                                                } catch {

                                                }

                                            }



                                            setInterval(() => {

                                                let edddd = new Discord.MessageEmbed()
                                                    .setTitle(" Broadcast")
                                                    .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
                                                    .setColor(message.member.roles.highest.hexColor)
                                                    .setThumbnail(message.guild.iconURL({ dynamic: true }))
                                                    .setDescription(`:white_check_mark: **| Sending... | All Members: ${message.guild.memberCount}**`)
                                                    .setFooter("iSolo506")

                                                mSure.edit(edddd);

                                            }, 1 * 10000);

                                        } else if (reason === "Done2") {

                                            //Cancel

                                            let cancelEmbed = new Discord.MessageEmbed()
                                                .setTitle(" Broadcast")
                                                .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
                                                .setColor(message.member.roles.highest.hexColor)
                                                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                                                .setDescription("❌** | Canceled.**")
                                                .setFooter("iSolo506")

                                            mSure.reactions.removeAll();
                                            mSure.edit(cancelEmbed);


                                        } else if (!reason.startsWith("Done1") && !reason.startsWith("Done2")) {

                                            let timeoutEmbed = new Discord.MessageEmbed()
                                                .setTitle(" Broadcast")
                                                .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
                                                .setColor(message.member.roles.highest.hexColor)
                                                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                                                .setDescription("❌** | Reaction timeout.**")
                                                .setFooter("iSolo506")

                                            mSure.reactions.removeAll();
                                            mSure.edit(timeoutEmbed);

                                        }



                                    })


                                })

                            });

                            MsgCollector.on("end", reason => {


                            });
                        })

                    } else if (reason === "Done3") {

                        //Role

                        message.channel.send("🟠 **| Mention the role: **").then((rmm) => {

                            let MsgFilter = m => m.author.id === message.author.id;
                            let MsgCollector = rmm.channel.createMessageCollector(MsgFilter, { time: 60000, max: 1 });

                            MsgCollector.on("collect", msg => {

                                let role = msg.mentions.roles.first();

                                if (role) {

                                    rmm.delete({ timeout: 150 });
                                    msg.delete({ timeout: 150 })
                                    let msgEmbed = new Discord.MessageEmbed()

                                        .setTitle(" Broadcast")
                                        .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
                                        .setColor(message.member.roles.highest.hexColor)
                                        .setThumbnail(message.guild.iconURL({ dynamic: true }))
                                        .setDescription(":white_check_mark:** | Write your message.**")
                                        .setFooter("iSolo506")

                                    m.edit(msgEmbed).then(() => {

                                        let MsgFilter = m => m.author.id === message.author.id;
                                        let MsgCollector = m.channel.createMessageCollector(MsgFilter, { time: 60000, max: 1 });

                                        MsgCollector.on("collect", msg => {

                                            let SureEmbed = new Discord.MessageEmbed()

                                                .setTitle("Are you sure you want to send this message ?")
                                                .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
                                                .setColor(message.member.roles.highest.hexColor)
                                                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                                                .setDescription(msg.content)
                                                .setFooter("iSolo506")

                                            msg.delete({ timeout: 500 });
                                            m.delete({ timeout: 500 });

                                            msg.channel.send(SureEmbed).then(async (mSure) => {

                                                await mSure.react("✅");
                                                await mSure.react("❌");

                                                let ReactionFilter = (r, user) => {

                                                    return user.id === message.author.id && ["✅", "❌"].includes(r.emoji.name);

                                                }
                                                let ReactionCollector = mSure.createReactionCollector(ReactionFilter, { time: 15000 });

                                                ReactionCollector.on("collect", r => {

                                                    if (r.emoji.name === "✅") {


                                                        mSure.reactions.removeAll();
                                                        ReactionCollector.stop("Done1" + msg.content);

                                                    } else if (r.emoji.name === "❌") {

                                                        mSure.reactions.removeAll();

                                                        ReactionCollector.stop("Done2");

                                                    }

                                                })

                                                ReactionCollector.on("end", async (col, reason) => {

                                                    if (reason.startsWith("Done1")) {

                                                        let msg = reason.replace("Done1", "");

                                                        //Send


                                                        let sendEmbed = new Discord.MessageEmbed()
                                                            .setTitle(" Broadcast")
                                                            .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
                                                            .setColor(message.member.roles.highest.hexColor)
                                                            .setThumbnail(message.guild.iconURL({ dynamic: true }))
                                                            .setDescription(`:white_check_mark: **| Sending... | All Members: ${message.guild.members.cache.filter(m => m.roles.cache.find(r => r.id === role.id) && !m.user.bot).size}**`)
                                                            .setFooter("iSolo506")

                                                        mSure.edit(sendEmbed);

                                                        let members = message.guild.members.cache.filter(m => m.roles.cache.find(r => r.id === role.id) && !m.user.bot).array();


                                                        for (var i = 0; i < members.length; i++) {

                                                            try {

                                                                await members[i].send(msg) // Send Message;

                                                                await timeIIa(timeS);


                                                            } catch {

                                                            }

                                                        }

                                                        setInterval(() => {

                                                            let edddd = new Discord.MessageEmbed()
                                                                .setTitle(" Broadcast")
                                                                .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
                                                                .setColor(message.member.roles.highest.hexColor)
                                                                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                                                                .setDescription(`:white_check_mark: **| Sending... | All Members: ${message.guild.members.cache.filter(m => m.roles.cache.find(r => r.id === role.id) && !m.user.bot).size}**`)
                                                                .setFooter("iSolo506")

                                                            mSure.edit(edddd);

                                                        }, 1 * 10000);

                                                    } else if (reason === "Done2") {

                                                        //Cancel

                                                        let cancelEmbed = new Discord.MessageEmbed()
                                                            .setTitle(" Broadcast")
                                                            .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
                                                            .setColor(message.member.roles.highest.hexColor)
                                                            .setThumbnail(message.guild.iconURL({ dynamic: true }))
                                                            .setDescription("❌** | Canceled.**")
                                                            .setFooter("iSolo506")

                                                        mSure.reactions.removeAll();
                                                        mSure.edit(cancelEmbed);

                                                    } else if (!reason.startsWith("Done1") && !reason.startsWith("Done2")) {

                                                        let timeoutEmbed = new Discord.MessageEmbed()
                                                            .setTitle(" Broadcast")
                                                            .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
                                                            .setColor(message.member.roles.highest.hexColor)
                                                            .setThumbnail(message.guild.iconURL({ dynamic: true }))
                                                            .setDescription("❌** | Reaction timeout.**")
                                                            .setFooter("iSolo506")

                                                        mSure.reactions.removeAll();
                                                        mSure.edit(timeoutEmbed);

                                                    }



                                                })


                                            })

                                        });

                                        MsgCollector.on("end", reason => {


                                        });
                                    })

                                } else {

                                    MsgCollector.stop();
                                    rmm.edit("❌ ** | Bad answer.**")
                                }

                            });

                        })


                    } else if (reason != "Done1" && reason != "Done2" && reason != "Done3") {

                        let timeoutEmbed = new Discord.MessageEmbed()

                            .setTitle(" Broadcast")
                            .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
                            .setColor(message.member.roles.highest.hexColor)
                            .setThumbnail(message.guild.iconURL({ dynamic: true }))
                            .setDescription("❌** | Reaction timeout**")
                            .setFooter("iSolo506")

                        m.reactions.removeAll();
                        m.edit(timeoutEmbed);

                    }

                })

            })

        }

    }

});

client.login(config.token);
client.login(process.env.TOKEN);