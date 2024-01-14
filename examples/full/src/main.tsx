import "dotenv/config";
import { Client, Events, GatewayIntentBits } from "discord.js";

const bot = new Client({ intents: [GatewayIntentBits.Guilds] });

bot.once(Events.ClientReady, () => {
  console.log("Ready");
});

bot.login(process.env.TOKEN);
