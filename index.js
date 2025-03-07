const {EmbedBuilder} = require ('discord.js');
        
        const embed = new EmbedBuilder()
            .setTitle("Dev:72.20")
            .setDescription("https://discord.gg/KXGnFx4TDK")
            .setColor("#0099FF") 
            .setFooter({ text: "72.20", iconURL: "https://cdn.discordapp.com/avatars/877717735801487360/88eae1703e41b4a05cb8825804492d16.webp" }) 
            .setTimestamp();

        channel.send({ embeds: [embed] });
