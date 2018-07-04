const Discord = require('discord.js');
const Client = new Discord.Client();

const prefix = "!"



Client.on("ready", () => {
	console.log("online");
	Client.user.setPresence({ game: { name: `A Server`, type: 0} });
});

// welcome message

Client.on("guildMemberAdd", member => {
   member.guild.defaultChannel.send("Welcome to: " + member.guild.name + " Hope you enjoy it here")
});

Client.on("guildMemberRemove", member => {
   member.guild.defaultChannel.send("Goodbye: " + member.user.username + " from " + member.guild.name)
});

Client.on("guildCreate", guild => {
	console.log("Some one added the test bot to a server created by: " + guild.owner.user.username)
});

Client.on("message", async (message) => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;
	
	let command = message.content.split(" ")[0];
	command = command.slice(prefix.length);
	
	let args = message.content.split(" ").slice(1);
	
	if (command === "ping") {
		message.channel.send(`Pong! Time took: ${Date.now() - message.createdTimestamp} ms`);
	} else

	if (command === "say") {
		message.delete()
        const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setDescription(message.author.username + " says: " + args.join(" "));
		message.channel.send({embed})
	} else

	if (command == "help") {
		const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setTitle("Command List:")
		.addField("!help", "Will give the current command list")
		.addField("!ping", "WIll show the ping time for the bot")
		.addField("!say [text]", "Will make the bot say something")
                                .addField("!creator", "Will show creator of bot")
		message.channel.send({embed})
	}

	if (command == "creator") {
		const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setTitle("Bot Creator:")
		.addField("Main Creator", "Dollars_#5032")
		message.channel.send({embed})
	}


//Require Modules
const antiswear = require("./modules/antiswear.js");
const classes = require("./modules/classes.js");


//Prepare modules
var modules = {
    [antiswear.id] : {"status":function() { return antiswear.status() }, "toggle":function() { antiswear.toggle(); console.log("Toggle called") } },
    [classes.id] : {"status":function() { return classes.status() }, "toggle":function() { classes.toggle(); console.log("Toggle called") } },
    //[Module.id] : {"status":function() { return module.status() }, "toggle":function() { module.toggle(); console.log("Toggle called") } },

}



//Initialize Modules
antiswear.initialize();
classes.initialize();

//Enable Bot
client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

//Listen to messages
client.on('message', msg => {
    if (msg.guild)
    {
        console.log("<" + msg.author.username + ">" + ": " + msg.content)
        if (msg.guild.roles.find("name", "Developer").members.find("user", msg.author))
        {
            var isDeveloper = msg.guild.roles.find("name", "Developer").members.find("user", msg.author).id;
        }
        var string = msg.content;
        var word = string.split(" ");
	       if (word[0] === '!misty') {
		 msg.reply('Hello!');
	    }

        //if (msg.guild.roles.find("name", "Developer").members.username)
        //{
        //    console.log("Yup he's a dev!")
        //}

        
        if (isDeveloper && word[0] === "!module")
        {
            if (word[1] === "toggle")
            {
                if (modules[word[2]])
                {
                    modules[word[2]].toggle();
                    msg.reply(word[2] + " was toggled, status: " + modules[word[2]].status())
                }
                else
                {
                    msg.reply (word[2] + " is not a valid module!");
                }
            }
        }
    }
});

//message.channel.sendEmbed({
//    hexColor: 3447003,
//    author: {
//      name: <Client>.user.username,
//      icon_url: <Client>.user.avatarURL
//    },
//    title: 'This is an embed',
//    url: 'http://google.com',
//    description: 'This is a test embed to showcase what they look like and what they can do.',
//    fields: [{
//        name: 'Fields',
//        value: 'They can have different fields with small headlines.'
//      },
//      {
//        name: 'Masked links',
//        value: 'You can put [masked links](http://google.com) inside of rich embeds.'
//      },
//      {
//        name: 'Markdown',
//        value: 'You can put all the *usual* **__Markdown__** inside of them.'
//      }
//    ],
//    timestamp: new Date(),
//    footer: {
//      icon_url: <Client>.user.avatarURL,
//      text: '© Example'
//    }});
//My key

});

Client.login("NDY0MTUwODk1Njg5NDY1ODY2.Dh6x2w.mrH5LpH_Iu_WulshcGTCARtV9Fs");