import {Message, Client} from 'discord.js';
import {Command} from '../../types';

export const ping: Command = {
  name: 'ping',
  aliases: ['p'],
  description: 'Ping the bot',

  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client: Client, message: Message) => {
    message.channel.send(`${client.ws.ping} ws ping`);
  },
};
